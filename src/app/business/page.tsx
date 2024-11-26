import { defaultOGImage } from '@/utils/helpers'; // Helper function for retrieving the default Open Graph image
import Business from './Business'; // Imports the Business component to render the page content
import { Metadata } from 'next'; // Imports the Metadata interface for setting page metadata

// Meta description for the page
const description = 'Work with Plantd and enable your business to Plant Trees and take meaningful action.';
const title = 'Sustainable Solutions for your Business';

// Metadata for the page, used for SEO and Open Graph sharing purposes
export const metadata: Metadata = {
    title, // Sets the page title for SEO
    description, // Meta description for SEO
    openGraph: {
        title, // Open Graph title for sharing previews
        description, // Open Graph description
        images: defaultOGImage, // Default Open Graph image for previews
    },
};

// Default functional component for rendering the page
export default function Page() {
    // Renders the Business component, which contains the content for this page
    return <Business />;
}
