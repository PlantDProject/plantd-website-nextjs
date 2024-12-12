import { Metadata } from 'next';
import { defaultOGImage, fetchAPI } from '@/utils/helpers';
import Homepage from './homepage/Homepage';

const description = 'Fight Climate Change with Plantd and Join the Movement to plant 1 Billion Trees!';
const title = 'Tree Planting Initiative by PLANTD';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default async function Page() {
    const data = await fetchAPI(`/configurations/get_project_data`);
    const projectsList = data?.projectList?.items || [];

    return <Homepage projectsList={projectsList} />;
}
