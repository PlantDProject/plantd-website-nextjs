import { useEffect, useState } from 'react';
import useCustomForm from '@/hooks/useContactForm';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import './signup-form.css';
import { trackEvent } from '@/utils/helpers';
import Link from 'next/link';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { redirect } from 'next/navigation';

// import Recaptcha from './Recaptcha';
// Define props type

interface SignupFormProps {
    email?: any;
    referralCode?: any;
}

const formDataFormat = {
    first_name: '',
    last_name: '',
    password: '',
    isChecked: false
};

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@?#\$%\^&\*])(?=.{8,})/;

function CustomSignupForm({ email, referralCode }: SignupFormProps) {

    const [formData, setFormData] = useState<any>(formDataFormat);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [formDataErr, setFormDataErr] = useState({
        first_name: false,
        last_name: false,
        password: false,
        isChecked: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

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

    //signupflow

    const handleChange = (e: any, name: string) => {

        //starting with space is not allowed
        if (name !== 'isChecked') {
            const ignoreFirstSpace = e?.indexOf(' ')
            if (ignoreFirstSpace == 0) {
                e = e?.trim()
            }
        }

        if (name === 'first_name' || name === 'last_name') {
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

    const validateForm = () => {
        const { first_name, last_name, password, isChecked } = formData;

        const errors = {
            first_name: !first_name,
            last_name: !last_name,
            password: !password || !passwordPattern.test(formData.password),
            isChecked: !isChecked,
        };
        trackEvent("Failed Validation Fields", { errorFields: errors })

        setFormDataErr(errors);
        return Object.values(errors).every((err) => !err); // Returns true if no errors
    };

    const submitForm = async () => {
        if (!validateForm()) return;
        const { isChecked, ...restData } = formData;
        const dataObject: any = { ...restData, email: email, referralCode: referralCode, is_checked: isChecked };

        delete dataObject['is_checked']

        let API_URL = 'https://d0f1vjnskd.execute-api.ap-south-1.amazonaws.com/main/qa-signup'

        if (process.env.NEXT_PUBLIC_ENV === 'production') {
            API_URL = 'https://d0f1vjnskd.execute-api.ap-south-1.amazonaws.com/main/prod-signup'
        }

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

            console.log("RESPONSE",response)
            if (!response.ok) {
                const errorData = await response.json();
                trackEvent('Form Submission Failed');
                throw new Error(errorData.error || 'Submission failed');
            }
            trackEvent('Form Submitted Successfully', { dataObject });
            // Clear form or perform other success actions here
            setFormData(formDataFormat);
            trackEvent('Redirect to thank you page');
            // redirect('/thankyou')
            window.location.href = '/thankyou';
        } catch (error: any) {
            trackEvent('Error In Form Submission Api', error);
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form>
                <div className="row">
                    {/* First Name input */}
                    <div className={`inputClass d-flex flex-column col-lg-6 col-12`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type="text"
                            placeholder='First Name *'
                            maxLength={30}
                            value={formData.first_name}
                            onValueChange={(e) => handleChange(e, 'first_name')}
                        />
                        {formDataErr.first_name && <small className="pt-2 text-danger">{formData.first_name?.trim().length > 0 ? 'Please enter valid name' : 'First name is required'}</small>}
                    </div>

                    {/* Last Name input */}
                    <div className={`inputClass d-flex flex-column col-lg-6 col-12`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type="text"
                            placeholder='Last Name *'
                            maxLength={30}
                            value={formData.last_name}
                            onValueChange={(e) => handleChange(e, 'last_name')}
                        />
                        {formDataErr.last_name && <small className="pt-2 text-danger">{formData.last_name?.trim().length > 0 ? 'Please enter valid name' : 'Last name is required'}</small>}
                    </div>

                    {/* Password input */}
                    <div className={`inputClass d-flex flex-column col-12 position-relative password-input`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password *'
                            // label="Password *"
                            // labelPlacement='outside'
                            maxLength={30}
                            value={formData.password}
                            onValueChange={(e) => handleChange(e, 'password')}
                        />
                        <div className='eye-btn-div' onClick={handlePasswordVisibility}>
                            <i className={`fa ${showPassword ? `fa-eye` : `fa-eye-slash`}`}></i>
                        </div>
                        {formDataErr.password && <small className="pt-2 text-danger">{formData.password?.trim().length > 0 ? 'Please enter a password that contains minimum 8 characters with 1 capital letter, 1 small letter, 1 special character and 1 number.' : 'Password is required'}</small>}
                    </div>
                    <div>
                        <div className="d-flex">
                            <Input
                                classNames={{
                                    inputWrapper: ['px-0'],
                                }}
                                type="checkbox"
                                checked={formData.isChecked}
                                onChange={(e) => handleChange(e, "isChecked")}
                            />
                            <label className='ms-2'>
                                I agree to plantd's <Link className='text-green' href={'/terms-and-conditions'}>Terms and conditions</Link> for data privacy.
                            </label>
                        </div>
                        {formDataErr.isChecked && <small className="pt-2 text-danger">Kindly agree to terms and
                            conditions to
                            proceed.</small>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-center my-3">
                    <div className={`btn primary-btn btn-rounded custom-btn ${isSubmitting ? 'btn-disabled' : ''}`} onClick={handleVerify}>
                        Sign up
                    </div>
                </div>
            </form >
        </div >
    );
}

export default CustomSignupForm;
