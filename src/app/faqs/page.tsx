'use client';

// Import necessary components and styles
import { Accordion, AccordionItem } from '@nextui-org/react'; // Accordion and AccordionItem components from NextUI
import './faq.css'; // Custom CSS file for FAQ styling
import { faqItems } from './faq-items'; // FAQ items imported from a separate file
import Link from 'next/link'; // Link component for client-side navigation

export default function Page() {
    return (
        <div className="bg-dark-grey">
            {/* Section for FAQ page header */}
            <section className="text-white bg-home faqs-bg-home" id="home">
                <h1 className="text-center">Frequently Asked Questions</h1>
            </section>

            {/* Main container for FAQ Accordion */}
            <div className="container-fluid w-90 mt-5">
                {/* Accordion with full width and split variant */}
                <Accordion fullWidth variant="splitted" className="d-flex flex-col custom-accordion">
                    {/* Iterate over FAQ items */}
                    {faqItems?.map((e: any, index: number) => {
                        return (
                            <AccordionItem
                                isCompact // Ensures a compact display for each accordion item
                                key={index} // Unique key for each item
                                aria-label={e?.title} // Accessibility label for screen readers
                                className="accordion-item" // Custom CSS class for additional styling
                                title={
                                    <div className="align-items-center d-flex w-100 flex-row">
                                        {/* Icon for the accordion item */}
                                        <div className="fs-16 d-flex align-items-center" dangerouslySetInnerHTML={{ __html: e?.icon }}></div>
                                        {/* Title text for the accordion item */}
                                        <p className="mb-0 ms-2 fs-16 text-green">{e?.title}</p>
                                    </div>
                                }
                            >
                                {/* Description/content for the accordion item */}
                                <div className="fs-16 pt-2 pb-3 text-green">{e?.description}</div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>

            {/* Container for the "Contact Us" link */}
            <div className="container-fluid w-90 px-4 pt-4 pb-5">
                <p className="text-white">
                    {/* Text with a link to the Contact Us page */}
                    Cant find what you are looking for?{' '}
                    <Link href="/contact-us" className="text-green f-15">
                        Contact us
                    </Link>
                    {' '}now!
                </p>
            </div>
        </div>
    );
}
