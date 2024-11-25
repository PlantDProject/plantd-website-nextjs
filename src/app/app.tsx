'use client';
import React, { useEffect } from 'react';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navigation/Navbar/Navbar';
import Footer from '@/components/Navigation/Footer/Footer';
import { poppinsMedium } from '@/utils/fonts';
import { initMixpanel } from '@/utils/mixpanel';
import { initPostHog } from '@/utils/posthog';

export default function App({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        initMixpanel();
        initPostHog();
    }, []);
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="https://plantd.life/images/plantdimg/favicon.png" type="image/x-icon" sizes="300x300" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
            </head>
            <body className={poppinsMedium.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
