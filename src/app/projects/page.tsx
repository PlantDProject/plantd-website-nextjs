import { Metadata } from 'next';
import Projects from './Projects';

const description = 'See our Projects all over the world in our journey as we plant 1 Billion Trees through our Reforestation Contribution App';

// export const metadata: Metadata = {
//     title: 'Projects List | Plantd',
//     description,
//     openGraph: { title: 'Projects List', description, images: 'https://plantd.life/images/plantdimg/plantdRecOg.jpg' },
// };

export async function generateMetadata(): Promise<Metadata> {
    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();
    const projectsList = response?.projectList?.items || [];

    // Use the first project's image or a default fallback image for the meta tag
    const metaImage = projectsList.length > 0 ? projectsList[0].image : 'https://plantd.life/images/plantdimg/plantdRecOg.jpg';

    return {
        title: 'Projects List | Plantd',
        description,
        openGraph: {
            title: 'Projects List',
            description,
            images: metaImage,
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Projects List',
            description,
            images: metaImage,
        },
    };
}

export default async function Page() {
    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();
    const projectsList = response?.projectList?.items || [];

    return <Projects projectsList={projectsList} />;
}
