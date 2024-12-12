import { useEffect } from 'react';
import useCustomForm from '@/hooks/useContactForm';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import './signup-form.css';
import { trackEvent } from '@/utils/helpers';
import Link from 'next/link';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
// import Recaptcha from './Recaptcha';
// Define props type
interface CustomFormProps {
    formOrigin: string; // Explicitly typing formOrigin as string
    modal?: any;
}

function CustomSignupForm({ formOrigin, modal }: CustomFormProps) {
    const { formData, formDataErr, isSubmitting, handleChange, submitForm, showModal, handleSelectChange } = useCustomForm(formOrigin);
    useEffect(() => {
        if (modal) modal(showModal);
    }, [showModal]);

    const { executeRecaptcha } = useGoogleReCaptcha();

    //captcha verification with submit button
    const handleVerify = async () => {
        if (executeRecaptcha) {
            try {
                const token = await executeRecaptcha('submit'); // Generate token
                handleSubmit(token);
            } catch (error) {
                trackEvent('Error executing reCAPTCHA', { error });
                console.error('Error executing reCAPTCHA', error);
            }
        } else {
            console.error('reCAPTCHA is not ready yet');
            trackEvent('reCAPTCHA is not ready yet');
        }
    };

    const handleSubmit = (captchaToken: any) => {
        trackEvent('reCaptcha Verified and Submit Button Clicked', { formData });
        if (isSubmitting) return;

        if (!captchaToken) {
            alert('Please complete the reCAPTCHA.');
            return;
        }
        submitForm();
    };


    return (
        <div>
            <form>
                <div className="row">
                    {/* Email input */}
                    {/* <div className={`inputClass d-flex flex-column col-12`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type="text"
                            label="Email Address *"
                            value={formData.email}
                            labelPlacement="outside"
                            onValueChange={(e) => handleChange(e, 'email')}
                        />
                        {formDataErr.email && <small className="pt-2 text-danger">{formData.email === '' ? 'Email is required' : 'Please enter correct email address'}</small>}
                    </div> */}

                    <div className="row">
                        {/* First Name input */}
                        <div className={`inputClass d-flex flex-column col-lg-6 col-12`}>
                            <Input
                                classNames={{
                                    inputWrapper: ['px-0'],
                                }}
                                type="text"
                                label="First Name *"
                                labelPlacement="outside"
                                value={formData.name}
                                onValueChange={(e) => handleChange(e, 'name')}
                            />
                            {formDataErr.name && <small className="pt-2 text-danger">{formData.name.trim().length > 0 ? 'Please enter valid name' : 'Name is required'}</small>}
                        </div>

                        {/* Last Name input */}
                        <div className={`inputClass d-flex flex-column col-lg-6 col-12`}>
                            <Input
                                classNames={{
                                    inputWrapper: ['px-0'],
                                }}
                                type="text"
                                label="Last Name *"
                                labelPlacement="outside"
                                value={formData.name}
                                onValueChange={(e) => handleChange(e, 'name')}
                            />
                            {formDataErr.name && <small className="pt-2 text-danger">{formData.name.trim().length > 0 ? 'Please enter valid name' : 'Name is required'}</small>}
                        </div>
                    </div>

                    {/* Password input */}
                    <div className={`inputClass d-flex flex-column col-12 `}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type="text"
                            label="Password *"
                            labelPlacement="outside"
                            value={formData.name}
                            onValueChange={(e) => handleChange(e, 'name')}
                        />
                        {formDataErr.name && <small className="pt-2 text-danger">{formData.name.trim().length > 0 ? 'Please enter valid name' : 'Name is required'}</small>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-center my-3">
                    <div className={`btn primary-btn btn-rounded custom-btn ${isSubmitting ? 'btn-disabled' : ''}`} onClick={handleVerify}>
                        {formOrigin === 'fundraiser' ? "Let's Fundraise" : formOrigin === 'contactus' ? 'Send Message' : 'Submit'}
                    </div>
                </div>
            </form >
        </div >
    );
}

export default CustomSignupForm;
