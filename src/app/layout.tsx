import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navigation/Navbar/Navbar';
import Footer from '@/components/Navigation/Footer/Footer';
import { nunitoSans } from '@/utils/fonts';
import { Metadata } from 'next';

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
        <html lang="en" className={nunitoSans.className}>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
