export const regexPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
export const regexEmail = /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const regexName = /^[a-zA-Z][a-zA-Z ]*$/;

export const defaultOGImage = 'https://plantd.life/images/plantdimg/plantdRecOg.jpg';

export const isEven = (n: number) => {
    return n % 2 == 0;
};