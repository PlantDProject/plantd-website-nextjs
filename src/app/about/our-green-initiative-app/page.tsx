import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import GreenInitiative from './GreenInitiative';

const title = 'Sign Up for Plantd';
const description = 'Ready to make a difference? Sign up for Plantd and join our green initiative app in America today!';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default function Page() {
    return <GreenInitiative />;
}
