import Business from './Business';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business | Plantd',
    openGraph: { title: 'Boosyness' },
};

export default function Page() {
    return <Business />;
}