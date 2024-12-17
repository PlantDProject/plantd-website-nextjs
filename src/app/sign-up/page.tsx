import Signup from './Signup';
import { defaultOGImage, } from '@/utils/helpers';
import { Metadata } from 'next';
import './signup.css';

const description = 'Your first tree is on us, just a click away';

export const metadata: Metadata = {
    title: 'Sign Up to Plantd',
    description,
    openGraph: { title: 'Sign Up to Plantd', description, images: defaultOGImage },
};

export default async function Page() {
    return <Signup />;
}
