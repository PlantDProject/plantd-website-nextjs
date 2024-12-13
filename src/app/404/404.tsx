import { Metadata } from 'next';
import { defaultOGImage } from '@/utils/helpers';
import './404.css';
import Link from 'next/link';

const title = 'Tree Planting Initiative by PLANTD';
const description = 'Fight Climate Change with Plantd and Join the Movement to plant 1 Billion Trees!';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title, description, images: defaultOGImage },
};

export default async function NotFoundPage() {
    return (
        <section className="notFound-bg-home text-white">
            <div className="error-center">
                <div className="notFound-center">
                    <div className="container-fluid w-100">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-4 col-md-7 col-10">
                                <div className="text-center">
                                    <p className="m-0 error-txt text-start ms-lg-5 ms-md-5 ms-0">ERROR</p>
                                    <h1 className="m-0 error-head">404</h1>
                                    <p className="m-0 error-txt text-end ms-lg-5 ms-md-5 ms-0">PAGE NOT</p>
                                    <p className="m-0 error-txt text-end ms-lg-5 ms-md-5 ms-0">FOUND</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center mt-5">
                            <div className="col-lg-4 col-md-7 col-12 text-center">
                                <Link href="/" className="btn btn-soft-primary btn-round d-flex justify-content-center my-4 mx-auto" style={{ width: '50%', padding: '10px 0px' }}>
                                    Go To Plantd Home<i className="fa fa-long-arrow-right ms-2 d-flex align-items-center" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
