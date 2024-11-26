import { Metadata } from 'next'; // Imports the Metadata interface for setting page metadata
import Projects from './Projects'; // Imports the Projects component
import { defaultOGImage } from '@/utils/helpers'; // Helper function to retrieve the default Open Graph image

// Meta description for the page
const description = 'See our Projects all over the world in our journey as we plant 1 Billion Trees through our Reforestation Contribution App';

// Metadata for the page, used for SEO and Open Graph purposes
export const metadata: Metadata = {
    title: 'Projects List | Plantd', // Sets the page title
    description, // Meta description for SEO
    openGraph: { 
        title: 'Projects List', // Open Graph title
        description, // Open Graph description
        images: defaultOGImage, // Open Graph image
    },
};

// Asynchronous function for rendering the page
export default async function Page() {
    // Fetch project data from an API endpoint
    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json(); // Parses the API response to JSON
    const projectsList = response?.projectList?.items || []; // Extracts the list of projects; defaults to an empty array if no data is found

    // Pass the fetched projects data as props to the Projects component
    return <Projects projectsList={projectsList} />;
}
