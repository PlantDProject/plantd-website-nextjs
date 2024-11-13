import { Metadata } from 'next';
import '../projects.css';

export const metadata: Metadata = {
    title: 'Giveaways',
    openGraph: { title: 'sadad' },
};

// const content = {
//     stats: [
//         {
//             content: 'Trees will be planted.',
//             emoji: '🌳',
//             value: '100,000+',
//         },
//         {
//             content: 'Different species of tress to be planted across all projects.',
//             emoji: '🌳',
//             value: '26',
//         },
//         {
//             content: 'Number of women planting through all projects.',
//             emoji: '🙎',
//             value: '2,500',
//         },
//         {
//             content: 'Hectare of land will be allocated to each group, consisting of 25 women per group.',
//             emoji: '🏞',
//             value: '1',
//         },
//     ],
// };

export default function Projects() {
    return (
        <div style={{ backgroundColor: '#f6f7fb!important' }}>
            <section className="bg-home" id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid w-95">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1 className="title title-color mb-18 text-center fs-50">Projects</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid w-90">
                <section className="">
                    <p className="fs-20 m-5">Plantd’s Mission is to be able to plant One Billion Trees to be able to make an impact in fighting climate change. We have made and continue to make efforts to support different reforestation projects all over the world. Take a look at some of the ongoing climate change actions worldwide.</p>
                </section>

                <section className="">
                    <div className="container-fluid w-90">
                        <h2 className="text-green-dark text-center mb-lg-4 mt-1 fw-bold">Current Projects</h2>
                    </div>
                </section>
            </div>
        </div>
    );
}