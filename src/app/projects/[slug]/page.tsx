// Import necessary types and components
import { Metadata } from 'next'; // For metadata generation
import ProjectDetails from './ProjectDetails'; // Component to display project details

// This function generates metadata for the page, such as title, description, OpenGraph, and Twitter metadata
export async function generateMetadata({ params }: any): Promise<Metadata> {
    // Extract slug parameter from the URL
    const { slug } = await params;

    // Fetch project data from the API
    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();

    // Find the project with the matching slug from the API response
    const e = response?.projectList?.items.find((proj: any) => proj.slug === slug);

    // Return metadata for SEO purposes
    return {
        title: e?.metaTitle, // Set the title for the page
        description: e?.metaDescription, // Set the description for the page
        openGraph: {
            title: e?.metaTitle, // OpenGraph title
            description: e?.metaDescription, // OpenGraph description
            images: e?.image, // OpenGraph image
        },
        twitter: {
            card: e?.image, // Twitter card type (image)
            title: e?.metaTitle, // Twitter title
            description: e?.metaDescription, // Twitter description
            images: e?.image, // Twitter image
        },
    };
}

// This is the main page component that displays project details
export default async function Page({ params }: any) {
    // Extract the slug from the URL parameters
    const { slug } = await params;

    // Fetch project data from the API
    const data = await fetch(`${process.env.API_URL}/configurations/get_project_data`);
    const response = await data.json();

    // Get the list of projects from the API response
    const projectsList = response?.projectList?.items || [];

    // Find the project in the list with the matching slug
    const filtered = projectsList.find((item: any) => item.slug === slug);

    // Pass the filtered project data to the ProjectDetails component
    return <ProjectDetails data={filtered} />;
}
