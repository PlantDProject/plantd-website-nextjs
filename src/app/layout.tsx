import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Metadata } from 'next';
import App from './app';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

export const metadata: Metadata = {
    title: 'Tree Planting Initiative by PLANTD',
    description: 'Fight Climate Change with Plantd and Join the Movement to plant 1 Billion Trees!',
    metadataBase: new URL('https://plantd.life'),
    openGraph: { title: 'Testing' },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <App>
            {children}
        </App>
    );
}
