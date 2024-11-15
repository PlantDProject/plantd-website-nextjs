import { defaultOGImage } from '@/utils/helpers';
import Business from './Business';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business | Plantd',
    openGraph: { title: 'Business | Plantd', images: defaultOGImage },
};

export default function Page() {
    return <Business />;
}
