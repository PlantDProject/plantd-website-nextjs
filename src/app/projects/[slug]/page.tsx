import { Metadata } from 'next';
import ProjectDetails from './ProjectDetails';

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { slug } = params;

    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();
    const projectsList = response?.projectList?.items || [];

    const e = projectsList.find((item: any) => item.slug === slug);

    return {
        title: e?.metaTitle,
        description: e?.metaDescription,
        openGraph: {
            title: e?.metaTitle,
            description: e?.metaDescription,
            images: e?.image,
        },
        twitter: {
            card: e?.image,
            title: e?.metaTitle,
            description: e?.metaDescription,
            images: e?.image,
        },
    };
}

export default async function Page({ params }: any) {
    const { slug } = params;

    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();
    const projectsList = response?.projectList?.items || [];

    const filtered = projectsList.find((item: any) => item.slug === slug);

    console.log('projectsList', filtered);

    return <ProjectDetails data={filtered} />;
}
