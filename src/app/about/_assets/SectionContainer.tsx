import { SubSectionInterface } from '../_data/subsectionsData';

export const DescriptionSection = (description: string) => {
    return description.split('<br />').map((line, index) => (
        <>
            <p className="mb-4" key={index}>
                {line}
            </p>
        </>
    ));
};

export const SectionContainer = (data: SubSectionInterface, index: number) => {
    return (
        <div key={index} data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear">
            <div className="section-heading py-3">{data.isHeading ? <h1>{data.title}</h1> : <h2>{data.title}</h2>}</div>

            {data.image && <img src={data.image} width="100%" alt={data.title} className="" />}

            <div className={`fs-20 mb-5 ${data.image && 'mt-4'}`}>{DescriptionSection(data.description)}</div>
        </div>
    );
};
