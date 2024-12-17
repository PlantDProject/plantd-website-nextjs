'use client'
import { isEmailValid, isNameValid, isPhoneNumberValid, trackEvent } from '@/utils/helpers';
import { useState } from 'react';

const formDataFormat = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    heard_from: new Set([]),
    other: '',
    isChecked: false
};
function useCustomForm(formOrigin: string) {
    const [formData, setFormData] = useState<any>(formDataFormat);
    const [showModal, setShowModal] = useState<boolean>(false);

    const [formDataErr, setFormDataErr] = useState({
        name: false,
        email: false,
        phone: false,
        organization: false,
        message: false,
        heard_from: false,
        other: false,
        isChecked: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSelectChange = (e: any) => {
        setFormData((prev: any) => ({ ...prev, heard_from: e }));
        setFormDataErr((prev: any) => {
            return { ...prev, other: false, heard_from: false };
        });
    };

    const handleChange = (e: any, name: string) => {

        //starting with space is not allowed
        if (name !== 'isChecked') {
            const ignoreFirstSpace = e?.indexOf(' ')
            if (ignoreFirstSpace == 0) {
                e = e?.trim()
            }
        }

        // Limit phone number input length to 10
        if (name === 'phone' && (isNaN(e) || e.length > 10)) return;
        if (name === 'name' && (e.length > 30)) return;
        if (name === 'email' && (e.length > 50)) return;


        if (name === 'name') {
            e = e.replace(/[^a-zA-Z\s.]/gi, ' ').replace(/\s+/g, ' ')
            //only one period can be entered
            const firstDotIndex = e.indexOf('.');
            if (firstDotIndex !== -1) {
                e = e.substring(0, firstDotIndex + 1) + e.substring(firstDotIndex + 1).replace(/\./g, '');
            }
        }

        setFormData((prev: any) => {
            return { ...prev, [name]: e, isChecked: e.target ? e.target.checked : prev.isChecked };
        });

        // Reset the error for the current field when it changes
        setFormDataErr((prev: any) => {
            return { ...prev, [name]: false };
        });
    };

    // const checkFields = (field: any) => {
    //     return formOrigin !== 'contactus' && !field
    // }

    const validateForm = () => {
        const { name, email, phone, organization, message, other, isChecked } = formData;

        const heard_from_array = [...formData.heard_from];

        const errors = {
            name: !isNameValid(name),
            email: !isEmailValid(email),
            phone: !isPhoneNumberValid(phone),
            message: !message,
            isChecked: !isChecked,
            organization: formOrigin !== 'contactus' && !organization,
            heard_from: formOrigin !== 'contactus' && heard_from_array.length === 0,
            other: formOrigin !== 'contactus' && heard_from_array[0] === 'Other' && !other,
        };

        trackEvent("Failed Validation Fields", { errorFields: errors })

        setFormDataErr(errors);
        return Object.values(errors).every((err) => !err); // Returns true if no errors
    };

    const submitForm = async () => {
        if (!validateForm()) return;
        const { isChecked, ...restData } = formData;
        const dataObject: any = { ...restData, other: formData.other, heard_from: [...formData.heard_from][0], phone: `+1${formData.phone}`, form_origin: formOrigin, is_checked: isChecked };

        delete dataObject['is_checked']
        if (dataObject.heard_from !== 'Other') delete dataObject['other'];
        if (formOrigin === 'contactus') {
            delete dataObject['form_origin']
            delete dataObject['organization']
        }
        //for qa: emails will go to plantd.club
        let API_URL = 'https://d0f1vjnskd.execute-api.ap-south-1.amazonaws.com/main/contact-us'
        let API_KEY = '07wfSmwpsL2ed5eH2XvjZ29VjPk7f0ha8s7TGcDm'
        //for prod: emails will go to info@plantd.life
        if (process.env.NEXT_PUBLIC_ENV === 'production') {
            API_URL = 'https://3cvc1ybydj.execute-api.us-east-1.amazonaws.com/prod/contact-us'
            API_KEY = 'WKcoxIjC3o6KQCurtTbmVauz4zyR89Zi4ntItZKe'
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'x-api-key': `${API_KEY}`,
                },
                body: JSON.stringify(dataObject),
            });

            if (!response.ok) {
                const errorData = await response.json();
                trackEvent('Form Submission Failed');
                throw new Error(errorData.error || 'Submission failed');
            }
            trackEvent('Form Submitted Successfully', { dataObject });
            // Clear form or perform other success actions here
            setFormData(formDataFormat);
            setShowModal(true);
            trackEvent('Success Modal Opened');
        } catch (error: any) {
            trackEvent('Error In Form Submission Api', error.message);
            console.error('Error submitting form:', error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        formDataErr,
        isSubmitting,
        handleChange,
        submitForm,
        showModal,
        setShowModal,
        handleSelectChange,
    };
}

export default useCustomForm;