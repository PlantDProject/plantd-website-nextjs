import { defaultOGImage } from '@/utils/helpers';
import Fundraiser from './fundraiser';
import { Metadata } from 'next';

const description = 'Raise Funds and Contribute to Planting One Billion Trees with Plantd';

export const metadata: Metadata = {
    title: 'Fundraise with Plantd',
    description,
    openGraph: { title: 'Fundraiser Contact Form', description, images: defaultOGImage },
};

export default function Page() {
    return <Fundraiser />;
}
