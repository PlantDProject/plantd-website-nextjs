import { defaultOGImage } from '@/utils/helpers';
import Business from './Business';
import { Metadata } from 'next';

const description = 'Work with Plantd and enable your business to Plant Trees and take meaningful action.';
export const metadata: Metadata = {
    title: 'Sustainable Solutions for your Business',
    description,
    openGraph: { title: 'Sustainable Solutions for your Business', description, images: defaultOGImage },
};

export default function Page() {
    return <Business />;
}
