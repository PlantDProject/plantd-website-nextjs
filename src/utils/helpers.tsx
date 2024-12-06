import { trackMixpanelEvent } from './mixpanel';
import { trackPosthogEvent } from './posthog';

const regexPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const regexEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
const regexName = /^[a-zA-Z.]+(?: [a-zA-Z.]+)*$/;

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

export const light = '/next-images/logo-white.png';

export const trackEvent = (e: any, data: any = {}) => {
    trackMixpanelEvent(e, data);
    trackPosthogEvent(e, data);
};

export const fetchGraphQL = async (query: string, variables: object = {}) => {
    const response = await fetch(`${process.env.API_URL}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });
    return response.json();
};