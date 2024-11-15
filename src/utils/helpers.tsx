export const regexPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
export const regexEmail = /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const regexName = /^[a-zA-Z][a-zA-Z ]*$/;

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

    return `${process.env.API_URL}${uri}`
};

export const light = 'https://test.plantd.life/images/plantdimg/logo-white.png';
export const dark = 'https://test.plantd.life/images/plantdimg/logo-dark.png';
