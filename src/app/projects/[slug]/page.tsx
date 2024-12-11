import { Metadata } from 'next';
import ProjectDetails from './ProjectDetails';
import { fetchAPI } from '@/utils/helpers';

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { slug } = await params;

    const data = await fetchAPI(`/configurations/get_project_data`);
    const e = data?.projectList?.items.find((proj: any) => proj.slug === slug);

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
    const { slug } = await params;

    const data = await fetchAPI(`/configurations/get_project_data`);
    const projectsList = data?.projectList?.items || [];

    const filtered = projectsList.find((item: any) => item.slug === slug);

    return <ProjectDetails data={filtered} />;
}
