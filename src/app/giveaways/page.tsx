import { Metadata } from 'next';
import './giveaway.css';

export const metadata: Metadata = {
    title: 'Giveaways',
};

export default function Giveaways() {
    return (
        <>
            <section className="bg-home " id="home">
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container-fluid w-95">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="text-center">
                                        <h1 className="title title-color mb-5 text-center fs-40">Plantd Giveaway List</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 bg-black giveawayHead">
                <div className="container-fluid w-90">
                    <h3 className="title-sub-heading title-color text-center fw-600">
                        Welcome to Plantd All Access! Here you can enter for a chance to win awesome Experiences. Check in daily to see what’s new.
                        <br /> <span className="text-green">Don’t Miss Out!</span>
                    </h3>
                </div>
            </section>

            <section className="pt-5 bg-black">
                <div className="container-fluid bg-dark-grey w-90 p-lg-5 p-md-4 px-1 py-4">
                    <div className="row justify-content-center align-items-center text-center w-95 m-auto mb-4 image-bg" style={{}}>
                        <div className="col-12 py-3 position-relative">
                            <div className="position-absolute eventdate-div">
                                <p className="f-15 text-white mb-0">Saturday</p>
                                <h3 className="text-white m-0">
                                    30
                                    <br />
                                    NOV
                                </h3>
                            </div>

                            <div className="position-absolute eventshare-div">
                                <i className="fa fa-files-o text-primary text-white" aria-hidden="true"></i>
                            </div>

                            <h3 className="title-heading text-white text-center">Chhath Mahaparv</h3>
                            <img src="https://qa.getplantd.com/images/480x548.png" className="my-2 ty-img mx-auto" alt="Chhath Mahaparv img" />
                            <div>
                                <a href="/giveawaydetail?chhath-mahaparv" className="btn btn-sm btn-soft-primary btn-rounded abc detailBtn">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
