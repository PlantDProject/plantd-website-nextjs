'use client';

import './business.css';

export default function Business() {
    return (
        <div style={{ backgroundColor: '#000' }}>
            <section className="top-container">
                {/* <Video className="video-container" src={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} autoPlay muted loop playsInline controls={false} className="" /> */}
                <video autoPlay muted loop className="video">
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                <div className="title business-title">For Business that want to do more</div>
                <span />
                <p>Our B2B solutions enable businesses to offset their carbon footprint by planting trees worldwide while supporting diverse carbon offset projects. With our One-to-One model, a tree is planted for every product or service sold, empowering companies to take meaningful climate action.</p>
            </section>
        </div>
    );
}
