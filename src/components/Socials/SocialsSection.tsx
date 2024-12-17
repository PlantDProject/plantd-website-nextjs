import Link from "next/link";

export const SocialsBar = () => {
    return (
        <section className="section-green py-5 mt-5">
            <div className="container flex-wrap align-center justify-between d-flex">
                <div className="col-12 col-lg-6 text-center mx-auto">
                    <h2 className="align-items-center text-white justify-center d-flex h-100 mb-0 fw-bold">Get Started Now</h2>
                </div>

                <div className="col-12 col-lg-6 mt-4 mt-lg-0 align-items-center justify-center d-flex mx-auto">
                    <Link className="app-store me-3 w-25" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                        <img src="/next-images/socials/app-store.png" alt="App Store" className="ms-auto" />
                    </Link>
                    <Link className="play-store w-25" href="https://app.plantd.life/MW/Footer/AppDownload" target="_blank">
                        <img src="/next-images/socials/play-store.png" alt="Google Play" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
