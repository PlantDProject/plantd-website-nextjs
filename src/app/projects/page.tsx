import { Metadata } from 'next';
import Projects from './Projects';

const description = 'See our Projects all over the world in our journey as we plant 1 Billion Trees through our Reforestation Contribution App';

export const metadata: Metadata = {
    title: 'Projects List | Plantd',
    description,
    openGraph: { title: 'Projects List', description, images: 'https://plantd.life/images/plantdimg/plantdRecOg.jpg' },
};

export default async function Page() {
    const data = await fetch(`https://admin-dev.getplantd.com/configurations/get_project_data`);
    const response = await data.json();
    const projectsList = response?.projectList?.items || [];

    return <Projects projectsList={projectsList} />;
}
