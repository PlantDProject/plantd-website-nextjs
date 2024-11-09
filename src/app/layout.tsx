import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navigation/Navbar/Navbar';
import Footer from '@/components/Navigation/Footer/Footer';
//👇 Import Open Sans font
import { Nunito_Sans } from 'next/font/google'

//👇 Configure our font object
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
})

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
