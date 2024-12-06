import { defaultOGImage } from '@/utils/helpers';
import Individual from './Individual';
import { Metadata } from 'next';

const description = 'Individual';
export const metadata: Metadata = {
    title: 'Individual | Plantd',
    description,
    openGraph: { title: 'Individual | Plantd', description, images: defaultOGImage },
};

export default function Page() {
    return <Individual />;
}
