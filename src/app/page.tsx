import './giveaways/giveaway.css';

export default function Home() {
    return (
        <>
            <section className="bg-home " id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid w-95">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1 className="title mb-5 text-center">HomePage Update check</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{height : 2000, backgroundColor : "#000"}}></div>
        </>
    );
}
