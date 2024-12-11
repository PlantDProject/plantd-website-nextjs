import { Metadata } from 'next';
import Projects from './Projects';
import { defaultOGImage, fetchAPI } from '@/utils/helpers';

const description = 'See our Projects all over the world in our journey as we plant 1 Billion Trees through our Reforestation Contribution App';

export const metadata: Metadata = {
    title: 'Projects List | Plantd',
    description,
    openGraph: { title: 'Projects List', description, images: defaultOGImage },
};

export default async function Page() {
    const data = await fetchAPI(`/configurations/get_project_data`);
    const projectsList = data?.projectList?.items || [];

    return <Projects projectsList={projectsList} />;
}
