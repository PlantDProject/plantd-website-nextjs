import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script src="https://test.plantd.life/js/jquery.min.js"></script>
                <script src="./app.js" />
            </head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
