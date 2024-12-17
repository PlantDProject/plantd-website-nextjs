import Image from 'next/image';
import { SubSectionInterface } from '../_data/subsectionsData';

const parseDescription = (desc: string) => {
    const linkRegex = /\{link:([^|]+)\|([^}]+)\}/g;

    const parts = [];
    let lastIndex = 0;

    desc.replace(linkRegex, (match, url, text, index) => {
        // Push plain text before the link
        parts.push(desc.substring(lastIndex, index));
        // Push the link as JSX
        parts.push(
            <a href={url} target={url?.includes('https') ? '_blank' : ''} className="text-green" key={index}>
                {text}
            </a>
        );
        // Update the last index
        lastIndex = index + match.length;
        return match;
    });

    // Push any remaining plain text
    parts.push(desc.substring(lastIndex));
    return parts;
};

export const DescriptionSection = (description: string) => {
    // Helper function to replace link patterns with JSX

    // Render paragraphs with processed text
    return description.split('<br />').map((line, index) => (
        <p className="mb-4" key={index}>
            {parseDescription(line)}
        </p>
    ));
};

export const SectionContainer = (data: SubSectionInterface, index: number) => {
    return (
        <div key={index} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
            <div className="section-heading py-3">{data.isHeading ? <h1>{data.title}</h1> : <h2>{data.title}</h2>}</div>

            {data.image && <Image src={data.image} className="w-100" alt={data.title} width={800} height={600} />}

            <div className={`fs-20 mb-5 ${data.image && 'mt-4'}`}>{DescriptionSection(data.description)}</div>
        </div>
    );
};
