import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import MakeAnImpactTogether from './MakeAnImpactTogether';

const title = 'Our Mission at Plantd';
const description = 'Discover how reforestation efforts at Plantd help climate change. Join Plantd today and be part of the solution';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default function Page() {
    return <MakeAnImpactTogether />;
}
