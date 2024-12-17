import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import FAQs from './FAQs';

const description = 'Plantd is a revolutionary app that combines the idea of “going green” with a gamified concept that will allow our users to have trees planted on their behalf';
const title = 'FAQs | Plantd';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default function Page() {
    return <FAQs />;
}
