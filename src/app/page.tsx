import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import Homepage from './homepage/Homepage';

const description = 'See our Projects all over the world in our journey as we plant 1 Billion Trees through our Reforestation Contribution App';

export const metadata: Metadata = {
    title: 'Projects List | Plantd',
    description,
    openGraph: { title: 'Projects List', description, images: defaultOGImage },
};

export default async function Page() {
    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();
    const projectsList = response?.projectList?.items || [];

    return <Homepage projectsList={projectsList} />;
}
