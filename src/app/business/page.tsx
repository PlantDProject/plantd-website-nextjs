import Business from './Business';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business | Plantd',
};

export default function Page() {
    return <Business />;
}