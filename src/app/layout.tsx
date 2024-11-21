import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navigation/Navbar/Navbar';
import Footer from '@/components/Navigation/Footer/Footer';
import { poppinsNormal } from '@/utils/fonts';
import { Metadata } from 'next';
import { initMixpanel } from '@/utils/mixpanel';

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
        <html lang="en" className={poppinsNormal.className}>
            <head>
                <link rel="icon" href="https://plantd.life/images/plantdimg/favicon.png" type="image/x-icon" sizes="300x300" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
