//👇 Import Open Sans font
// import { Nunito_Sans } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Architects_Daughter } from 'next/font/google';

//👇 Configure our font object
// export const nunitoSans = Nunito_Sans({
//     subsets: ['latin'],
//     display: 'swap',
// });

export const poppinsNormal = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100','500']
});
export const poppinsMedium = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: '300',
});

export const poppinsBold = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: '500',
});
export const cursiveNormal = Architects_Daughter({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
});
