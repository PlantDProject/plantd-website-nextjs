import React, { useState } from 'react';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import '../ContactForm/contact-form.css';

interface Props {
    buttonName: string;
}

const ContactForm: React.FC<Props> = ({ buttonName }) => {
    const [formData, setFormData] = useState<any>({
        name: '',
        email: '',
        phoneNumber: '',
        organisation: '',
        tellUsMore: '',
        source: '',
        other: '',
    });

    const [errors, setErrors] = useState<any>({
        name: '',
        email: '',
        phoneNumber: '',
        organisation: '',
        tellUsMore: '',
        source: '',
        other: '',
    });

    const handleChange = (e: any, name: string) => {
        let value = e;

        if (name === 'phoneNumber' && e.length > 10) return;

        if (name === 'source') {
            value = e?.currentKey;
        }

        setFormData((prev: any) => {
            return { ...prev, [name]: value };
        });
    };

    const validate = () => {
        const newErrors: any = {};

        // Validate name
        if (!formData.name) newErrors.name = 'Name is required';

        // Validate email
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }

        // Validate phone number
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (formData.phoneNumber.length !== 10) {
            newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
        }

        // Validate organisation
        if (!formData.organisation) newErrors.organisation = 'Organisation is required';

        // Validate Tell Us More
        if (!formData.tellUsMore) newErrors.tellUsMore = 'Please tell us more about your inquiry';

        // Validate source
        if (!formData.source) newErrors.source = 'Please select how you heard about us';

        // Validate Other source
        if (formData.source === 'Other' && !formData.other) {
            newErrors.other = 'Please specify how you heard about us';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted successfully', formData);
            // Submit form data or handle success here
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <form>
            <div className="row">
                <div className={`inputClass d-flex flex-column col-12 col-md-6 mb-2`}>
                    <Input
                        classNames={{ inputWrapper: ['px-0'] }}
                        type="text"
                        label="Name"
                        labelPlacement="outside"
                        value={formData.name}
                        onValueChange={(e) => handleChange(e, 'name')}
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div className={`inputClass d-flex flex-column col-12 col-md-6 mb-2`}>
                    <Input
                        classNames={{ inputWrapper: ['px-0'] }}
                        type="email"
                        label="Email Address"
                        value={formData.email}
                        labelPlacement="outside"
                        onValueChange={(e) => handleChange(e, 'email')}
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
            </div>

            <div className="row">
                <div className={`inputClass phoneInput border-0 d-flex flex-column col-12 col-md-6 mb-2`}>
                    <div className='position-relative'>
                        <Input
                            classNames={{ inputWrapper: ['px-0'] }}
                            type="number"
                            label="Phone Number"
                            value={formData.phoneNumber}
                            labelPlacement="outside"
                            onValueChange={(e) => handleChange(e, 'phoneNumber')}
                        />
                        <span className="prefix">+1</span>
                    </div>
                    {errors.phoneNumber && <p className="error-text">{errors.phoneNumber}</p>}
                </div>
                <div className={`inputClass d-flex flex-column col-12 col-md-6 mb-2`}>
                    <Input
                        classNames={{ inputWrapper: ['px-0'] }}
                        type="text"
                        label="Organisation"
                        value={formData.organisation}
                        labelPlacement="outside"
                        onValueChange={(e) => handleChange(e, 'organisation')}
                    />
                    {errors.organisation && <p className="error-text">{errors.organisation}</p>}
                </div>
            </div>

            <div className="row">
                <div className={`inputClass d-flex flex-column col-12 col-md-6 mb-2`}>
                    <Textarea
                        classNames={{
                            input: 'textarea-custom',
                            inputWrapper: ['px-0', 'py-0'],
                        }}
                        minRows={5}
                        name="tellUsMore"
                        label="Tell Us More"
                        value={formData.tellUsMore}
                        labelPlacement="outside"
                        onValueChange={(e) => handleChange(e, 'tellUsMore')}
                    />
                    {errors.tellUsMore && <p className="error-text">{errors.tellUsMore}</p>}
                </div>
                <div className={`inputClass d-flex flex-column col-12 col-md-6 mb-2`}>
                    <Select
                        classNames={{
                            trigger: 'px-3 py-3 custom-select d-flex justify-between',
                            listbox: 'select-dropdown',
                        }}
                        labelPlacement={'outside-left'}
                        label="How did you hear about us?"
                        onSelectionChange={(e) => handleChange(e, 'source')}
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
                    {errors.source && <p className="error-text">{errors.source}</p>}

                    {formData.source === 'Other' && (
                        <Input
                            classNames={{ inputWrapper: ['px-0'] }}
                            type="text"
                            label="Other"
                            value={formData.other}
                            labelPlacement="outside"
                            onValueChange={(e) => handleChange(e, 'other')}
                        />
                    )}
                    {errors.other && <p className="error-text">{errors.other}</p>}
                </div>
            </div>

            <div className="lets-talk d-flex my-4 justify-center">
                <div className="btn primary-btn btn-rounded custom-btn" onClick={handleSubmit}>
                    {buttonName}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
