import { trackMixpanelEvent } from './mixpanel';
import { trackPosthogEvent } from './posthog';

const regexPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexName = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

// Validators (implement these according to your needs)
export const isNameValid = (name: string) => {
    return name && name.trim().length > 0 && regexName.test(name.trim());
};
export const isEmailValid = (email: string) => regexEmail.test(email);

export const isPhoneNumberValid = (e: string) => {
    return regexPhoneNumber.test(e);
};

export const defaultOGImage = 'https://plantd.life/images/plantdimg/plantdRecOg.jpg';

export const isEven = (n: number) => {
    return n % 2 == 0;
};

export const getDay = (date: string) => {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekday[new Date(`${date}`).getDay()];
};
export const getDate = (date: string) => {
    const edate = date.split(',');
    return edate[0].split(' ');
};

interface IFrameRendererProps {
    iframeHtml: string;
}

export const IFrameRenderer: React.FC<IFrameRendererProps> = ({ iframeHtml }) => {
    return <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />;
};

export const getImgUri = (uri: string) => {
    if (uri?.includes('https')) return uri;

    return `${process.env.API_URL}${uri}`;
};

export const light = 'https://test.plantd.life/images/plantdimg/logo-white.png';
export const dark = 'https://test.plantd.life/images/plantdimg/logo-dark.png';

export const trackEvent = (e: any, data: any = {}) => {
    trackMixpanelEvent(e, data);
    trackPosthogEvent(e, data);
};
