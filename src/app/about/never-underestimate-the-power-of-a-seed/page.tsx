import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import NeverUnderestimate from './NeverUnderestimate';

const title = 'Download our Plant a Tree App | Plantd';
const description = 'Download our Plant-a-Tree app and make a difference today! Take action against deforestation and climate change with Plantd.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default function Page() {
    return <NeverUnderestimate />;
}
