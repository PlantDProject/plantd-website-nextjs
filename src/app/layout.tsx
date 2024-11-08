import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navigation/Navbar/Navbar';
import Footer from '@/components/Navigation/Footer/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
