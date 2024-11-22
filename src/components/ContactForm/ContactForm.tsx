import useCustomForm from '@/hooks/useContactForm';
import { poppinsMedium } from '@/utils/fonts';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import './contactForm.css';
import CustomModal from '../Navigation/Modal/modal';
import {trackMixpanelEvent} from '@/utils/mixpanel';
import {trackPosthogEvent} from '@/utils/posthog';

// Define props type
interface CustomFormProps {
    formOrigin: string; // Explicitly typing formOrigin as string
}

function CustomForm({ formOrigin }: CustomFormProps) {
    const { formData, formDataErr, isSubmitting, handleChange, submitForm, showModal, setShowModal, handleSelectChange } = useCustomForm(formOrigin);

    const trackEvent = (e:any, data?:any)=>{
        trackMixpanelEvent(e, data);
        trackPosthogEvent(e, data);
    }
    
    const handleSubmit = () => {
        trackEvent("Submit Button Clicked",{formData})
        if (isSubmitting) return;
        submitForm();
    };

    const closeModal = () => {
        setShowModal(false);
        trackEvent("Success Modal Closed")
    };

    const successModal = () => {
        // if (formOrigin === 'fundraiser') return;
        return <CustomModal isOpen={showModal} modalType="resultModal" onClose={closeModal} />;
    };


    return (
        <div>
            <form>
                <div className="row">
                    {/* Name input */}
                    <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
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
                    <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type="email"
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
                    <div className={`inputClass border-0 d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                                innerWrapper: ['d-flex', 'align-items-center'],
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
                </div>

                <div className="row">
                    {/* Tell Us More input */}
                    <div className={`inputClass d-flex flex-column col-12 col-md-6 ${poppinsMedium.className}`}>
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
                            <div>
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
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-center my-3">
                    <div className={`btn primary-btn btn-rounded custom-btn ${isSubmitting ? 'btn-disabled' : ''}`} onClick={handleSubmit}>
                        {formOrigin === 'fundraiser' ? "Let's Fundraise" : 'Submit'}
                    </div>
                </div>
            </form>
            {successModal()}
        </div>
    );
}

export default CustomForm;
