import { defaultOGImage } from '@/utils/helpers';
import Contact from './Contact-us';
import { Metadata } from 'next';

const description = 'Let us know how you want to change the world and Stop Climate Change with Plantd';
export const metadata: Metadata = {
    title: 'Contact Us ',
    description,
    openGraph: { title: 'Contact Us ', description, images: defaultOGImage },
};

export default function Page() {
    return <Contact />;
}
