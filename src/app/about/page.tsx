import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import About from './About';

const title = 'About Plantd Fighting Climate Change';
const description = 'We envision a greener future for our planet where a thriving community of different individual actions lead to an equally thriving ecosystem.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default function Page() {
    return <About />;
}
