import { useState } from 'react';

const formDataFormat = {
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    heard_from: '',
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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: any, name: string) => {
        let value = e;

        // Limit phone number input length to 10
        if (name === 'phone' && (isNaN(e) || e.length > 10)) return;

        // Special handling for 'heard_from' field
        if (name === 'heard_from') {
            value = e?.currentKey;
        }

        // Update the form data
        setFormData((prev: any) => {
            return { ...prev, [name]: value };
        });

        // Reset the error for the current field when it changes
        setFormDataErr((prev: any) => {
            return { ...prev, [name]: false };
        });

        if (name === 'heard_from') {
            setFormDataErr((prev: any) => {
                return { ...prev, other: false };
            });
        }
    };

    const validateForm = () => {
        const { name, email, phone, organization, message, heard_from, other } = formData;

        const errors = {
            name: !isNameValid(name),
            email: !isEmailValid(email),
            phone: !isPhoneNumberValid(phone),
            organization: !organization,
            message: !message,
            heard_from: !heard_from,
            other: heard_from === 'Other' && !other,
        };

        setFormDataErr(errors);
        return Object.values(errors).every((err) => !err); // Returns true if no errors
    };

    const submitForm = async () => {
        if (!validateForm()) return;

        const dataObject: any = { ...formData, phone: `+1${formData.phone}`, form_origin: formOrigin };

        if (dataObject.heard_from !== 'other') delete dataObject['other'];

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
                throw new Error(errorData.error || 'Submission failed');
            }

            const data = await response.json();
            // Clear form or perform other success actions here
            setFormData(formDataFormat);
        } catch (error: any) {
            console.error('Error submitting form:', error.message);
        } finally {
            setIsSubmitting(false);
            setShowModal(true);
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
    };
}

// Validators (implement these according to your needs)
const isNameValid = (name: string) => name && name.trim().length > 0;
const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isPhoneNumberValid = (phone: string) => /^\d{10}$/.test(phone);

export default useCustomForm;
