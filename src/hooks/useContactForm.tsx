'use client'
import { isEmailValid, isNameValid, isPhoneNumberValid } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import {trackMixpanelEvent} from '@/utils/mixpanel';
import { trackPosthogEvent } from '@/utils/posthog';

interface FormDataError {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    organization?: boolean;
    message?: boolean;
    heard_from?: boolean;
    other?: boolean;
  }

const formDataFormat = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    heard_from: new Set([]),
    other: '',
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
    });

    const trackEvent = (e:any, data?:any)=>{
        trackMixpanelEvent(e, data);
        trackPosthogEvent(e, data);
    }

    useEffect(()=>{
        (Object.keys(formDataErr) as (keyof FormDataError)[]).forEach((field) => {
            if (formDataErr[field]) {
              trackEvent(`Error in ${field} Field`);
            }
          });
    },[formDataErr])

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSelectChange = (e: any) => {
        setFormData((prev: any) => ({ ...prev, heard_from: e }));
        setFormDataErr((prev: any) => {
            return { ...prev, other: false, heard_from : false };
        });
    };

    const handleChange = (e: any, name: string) => {

        // Limit phone number input length to 10
        if (name === 'phone' && (isNaN(e) || e.length > 10)) return;

        // Update the form data
        setFormData((prev: any) => {
            return { ...prev, [name]: e };
        });

        // Reset the error for the current field when it changes
        setFormDataErr((prev: any) => {
            return { ...prev, [name]: false };
        });
    };

    const validateForm = () => {
        const { name, email, phone, organization, message, other } = formData;

        const heard_from_array = [...formData.heard_from];

        const errors = {
            name: !isNameValid(name),
            email: !isEmailValid(email),
            phone: !isPhoneNumberValid(phone),
            organization: !organization,
            message: !message,
            heard_from: heard_from_array.length === 0,
            other: heard_from_array[0] === 'Other' && !other,
        };

        setFormDataErr(errors);
        return Object.values(errors).every((err) => !err); // Returns true if no errors
    };

    const submitForm = async () => {
        if (!validateForm()) return;

        const dataObject: any = { ...formData, other: formData.other, heard_from: [...formData.heard_from][0], phone: `+1${formData.phone}`, form_origin: formOrigin };

        if (dataObject.heard_from !== 'Other') delete dataObject['other'];

        const API_URL = 'https://d0f1vjnskd.execute-api.ap-south-1.amazonaws.com/main/contact-us';

        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'x-api-key': '07wfSmwpsL2ed5eH2XvjZ29VjPk7f0ha8s7TGcDm',
                },
                body: JSON.stringify(dataObject),
            });

            if (!response.ok) {
                const errorData = await response.json();
                trackEvent("Form Submission Failed")
                throw new Error(errorData.error || 'Submission failed');
            }
            trackEvent("Form Submitted Successfully",{dataObject})
            // Clear form or perform other success actions here
            setFormData(formDataFormat);
            setShowModal(true);
            trackEvent("Success Modal Opened")
        } catch (error: any) {
            trackEvent("Error In Form Submission Api", error.message)
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
