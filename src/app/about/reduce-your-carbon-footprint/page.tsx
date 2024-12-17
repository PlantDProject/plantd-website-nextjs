import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import ReduceYourCrabonFootprint from './ReduceYourCrabonFootprint';

const title = 'Tracking Your Impact with Plantd';
const description = 'Download Plantd to seamlessly reduce your carbon footprint. Our app serves as your eco-guide, offering resources and insights for your green journey.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default function Page() {
    return <ReduceYourCrabonFootprint />;
}
