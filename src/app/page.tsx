import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import Homepage from './homepage/Homepage';

const description = 'Contribute and Plant One Billion Trees with Plantd';
const title = 'Plantd Life for One Billion Trees Planted';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default async function Page() {
    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();
    const projectsList = response?.projectList?.items || [];

    return <Homepage projectsList={projectsList} />;
}
