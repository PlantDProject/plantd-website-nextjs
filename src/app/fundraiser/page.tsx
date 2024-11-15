import Fundraiser from './fundraiser';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fundraiser Contact | Plantd',
    openGraph: { title: 'Fundraiser Contact Form' },
};

export default function Page() {
    return <Fundraiser />;
}