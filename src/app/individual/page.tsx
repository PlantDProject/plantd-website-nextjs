import { defaultOGImage } from '@/utils/helpers';
import Individual from './Individual';
import { Metadata } from 'next';

const description = 'Your Individual Action to Fight Climate Change with Plantd';
export const metadata: Metadata = {
    title: 'Plant Trees and Make an Impact with Plantd',
    description,
    openGraph: { title: 'Plant Trees and Make an Impact with Plantd', description, images: defaultOGImage },
};

export default function Page() {
    return <Individual />;
}
