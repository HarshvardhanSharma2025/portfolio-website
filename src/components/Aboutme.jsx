import React from 'react';

const Aboutme = () => {
    return (
        <div>
            <div className="card mb-3 card-aboutme">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="\images\cardlogo.webp" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{<u>Who I Am</u>}</h3>
                            <p className="intro-text">
                                Hi! I’m a <strong>B.Tech 4th-year student</strong> at SRM University, passionate about technology,
                                web development, and IT infrastructure. With a knack for problem-solving, I love to dive into both
                                front-end and back-end development.
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='arrow-main'><img src="\images\arrow1.webp" className="arrow-aboutme" alt="..." /></div>
        </div>
    );
};

export default Aboutme;
