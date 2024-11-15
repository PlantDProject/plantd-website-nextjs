import React, {useState} from 'react';
import { Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import '../ContactForm/contact-form.css'

interface Props {
  buttonName: string
}

const ContactForm: React.FC<Props> = ({buttonName}) => {
    const [formData, setFormData] = useState<any>({
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
    console.log(formData)

    return (
        <form>
            <div className="row">
                <div className={`inputClass d-flex flex-column col-12 col-md-6`}>
                    <Input
                        classNames={{
                            inputWrapper: ['px-0'],
                        }}
                        type="text"
                        label="Name"
                        labelPlacement="outside"
                        value={formData.name}
                        onValueChange={(e) => handleChange(e, 'name')}
                    />
                </div>
                <div className={`inputClass d-flex flex-column col-12 col-md-6 `}>
                    <Input
                        classNames={{
                            inputWrapper: ['px-0'],
                        }}
                        type="email"
                        label="Email Address"
                        value={formData.email}
                        labelPlacement="outside"
                        onValueChange={(e) => handleChange(e, 'email')}
                    />
                </div>
            </div>

            <div className="row">
                <div className={`inputClass phoneInput border-0 d-flex flex-column col-12 col-md-6 position-relative`}>
                    <Input
                        classNames={{
                            inputWrapper: ['px-0'],
                        }}
                        type="text"
                        label="Phone Number"
                        value={formData.phoneNumber}
                        labelPlacement="outside"
                        onValueChange={(e) => handleChange(e, 'phoneNumber')}
                    />
                    <span className='prefix'>+1</span>
                </div>
                <div className={`inputClass d-flex flex-column col-12 col-md-6 `}>
                    <Input
                        classNames={{
                            inputWrapper: ['px-0'],
                        }}
                        type="text"
                        label="Organisation"
                        value={formData.organisation}
                        labelPlacement="outside"
                        onValueChange={(e) => handleChange(e, 'organisation')}
                    />
                </div>
            </div>

            <div className="row">
                <div className={`inputClass d-flex flex-column col-12 col-md-6 `}>
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
                        className=""
                        variant="underlined"
                    />
                </div>
                <div className={`inputClass d-flex flex-column col-12 col-md-6 `}>
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

                    {formData.source === 'Other' && (
                        <Input
                            classNames={{
                                inputWrapper: ['px-0'],
                            }}
                            type="text"
                            label="Other"
                            value={formData.other}
                            labelPlacement="outside"
                            onValueChange={(e) => handleChange(e, 'other')}
                        />
                    )}
                </div>
            </div>

            <div className="lets-talk d-flex my-4 justify-center">
                <div className="btn primary-btn btn-rounded custom-btn" onClick={() => { }}>
                    {buttonName}
                </div>
            </div>
        </form>
    )
}
export default ContactForm