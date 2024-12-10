import { useEffect } from 'react';
import useCustomForm from '@/hooks/useContactForm';
import { poppinsMedium } from '@/utils/fonts';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import './contactForm.css';
import { trackEvent } from '@/utils/helpers';
import Link from 'next/link';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
// import Recaptcha from './Recaptcha';
// Define props type
interface CustomFormProps {
    formOrigin: string; // Explicitly typing formOrigin as string
    modal?: any;
}

function CustomForm({ formOrigin, modal }: CustomFormProps) {
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
                    {/* Name input */}
                    <div className={`inputClass d-flex flex-column col-12 ${formOrigin !== 'contactus' && 'col-md-6'}  ${poppinsMedium.className}`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type="text"
                            label="Name *"
                            labelPlacement="outside"
                            value={formData.name}
                            onValueChange={(e) => handleChange(e, 'name')}
                        />
                        {formDataErr.name && <small className="pt-2 text-danger">{formData.name.trim().length > 0 ? 'Please enter valid name' : 'Name is required'}</small>}
                    </div>

                    {/* Email input */}
                    <div className={`inputClass d-flex flex-column col-12 ${formOrigin !== 'contactus' && 'col-md-6'} ${poppinsMedium.className}`}>
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
                    </div>
                </div>

                <div className="row">
                    {/* Phone number input */}
                    <div className={`inputClass border-0 d-flex flex-column col-12 ${formOrigin !== 'contactus' && 'col-md-6'} ${poppinsMedium.className}`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                                innerWrapper: ['d-flex'],
                                input: ['mb-0 phoneNumber'],
                            }}
                            type="text"
                            label="Phone Number *"
                            value={formData.phone}
                            labelPlacement="outside"
                            onValueChange={(e) => handleChange(e, 'phone')}
                            startContent={<div className="plus-input">+1</div>}
                        />
                        {formDataErr.phone && <small className="pt-2 text-danger">{formData.phone === '' ? 'Phone number is required' : 'Phone number must be exactly 10 digits'}</small>}
                    </div>

                    {/* organization input */}
                    {formOrigin !== "contactus" &&
                        <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                            <Input
                                classNames={{
                                    inputWrapper: ['px-0'],
                                }}
                                type="text"
                                label="Organization *"
                                value={formData.organization}
                                labelPlacement="outside"
                                onValueChange={(e) => handleChange(e, 'organization')}
                            />
                            {formDataErr.organization && <small className="pt-2 text-danger">Organisation is required</small>}
                        </div>
                    }
                </div>

                <div className="row">
                    {/* Tell Us More input */}
                    <div className={`inputClass d-flex flex-column col-12 ${formOrigin !== 'contactus' && 'col-md-6'} ${poppinsMedium.className}`}>
                        <Textarea
                            classNames={{
                                input: ['textarea-custom'],
                                inputWrapper: ['px-0', 'py-0'],
                            }}
                            minRows={5}
                            name="message"
                            label="Tell Us More *"
                            value={formData.message}
                            labelPlacement="outside"
                            onValueChange={(e) => handleChange(e, 'message')}
                            className=""
                            variant="underlined"
                        />
                        {formDataErr.message && <small className="pt-2 text-danger">Please tell us more about your inquiry</small>}
                    </div>


                    {/* heard_from of hearing about us dropdown */}

                    {formOrigin !== "contactus" &&
                        <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                            <Select
                                classNames={{
                                    trigger: 'px-3 py-3 custom-select d-flex justify-between',
                                    listbox: 'select-dropdown',
                                }}
                                labelPlacement={'outside-left'}
                                label="How did you hear about us? *"
                                selectedKeys={formData.heard_from}
                                onSelectionChange={handleSelectChange}
                            >
                                <SelectItem key="Friends/Family" value="Friends/Family">
                                    Friends/Family
                                </SelectItem>
                                <SelectItem key="Email Marketing" value="Email Marketing">
                                    Email Marketing
                                </SelectItem>
                                <SelectItem key="Social" value="Social">
                                    Social
                                </SelectItem>
                                <SelectItem key="Other" value="Other">
                                    Other
                                </SelectItem>
                            </Select>
                            {formDataErr.heard_from && <small className="pt-2 text-danger">Please select how you heard about us</small>}

                            {/* Conditional input for 'Other' option */}
                            {[...formData.heard_from][0] === 'Other' && (
                                <div className='mt-2'>
                                    <Input
                                        classNames={{
                                            inputWrapper: ['px-0'],
                                        }}
                                        type="text"
                                        label="Other..."
                                        value={formData.other}
                                        onValueChange={(e) => handleChange(e, 'other')}
                                    />
                                    {formDataErr.other && <small className="pt-2 text-danger">Please specify how you heard about us</small>}
                                </div>
                            )}

                        </div>
                    }
                    {/* Conditional input for 'Other' option */}

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
                        {formOrigin === 'fundraiser' ? "Let's Fundraise" : formOrigin === 'contactus' ? 'Send Message' : 'Submit'}
                    </div>
                </div>
            </form >
        </div >
    );
}

export default CustomForm;
