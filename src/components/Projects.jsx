import React from 'react';

const MainContent = () => {
    return (
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                <div className="col-md-6 p-lg-5 mx-auto my-5">
                    <h1 className="display-3 fw-bold">"My Digital Creations Portfolio"</h1>
                    <h3 className="fw-normal text-muted mb-3">
                        Check out the projects 
                    </h3>
                    <div className="d-flex gap-3 justify-content-center lead fw-normal">
                        <a className="icon-link" href="#">
                        Read more
                            <svg className="bi">
                                <use xlinkHref="#chevron-right" />
                            </svg>
                        </a>
                        <a className="icon-link" href="#">
                        Contact
                            <svg className="bi">
                                <use xlinkHref="#chevron-right" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 custom-one">
                <Section
                    bgClass="text-bg-dark"
                    shadowClass="bg-body-tertiary"
                    headline="Another headline"
                    subheading="And an even wittier subheading."
                />
                <Section
                    bgClass="bg-body-tertiary"
                    shadowClass="bg-dark"
                    headline="Another headline"
                    subheading="And an even wittier subheading."
                />
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 custom-two">

                <Section
                    bgClass="bg-body-tertiary"
                    shadowClass="bg-dark"
                    headline="Another headline"
                    subheading="And an even wittier subheading."
                />

                <Section
                    bgClass="text-bg-dark"
                    shadowClass="bg-body-tertiary"
                    headline="Another headline"
                    subheading="And an even wittier subheading."
                />
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 custom-three">
                <Section
                    bgClass="text-bg-dark"
                    shadowClass="bg-body-tertiary"
                    headline="Another headline"
                    subheading="And an even wittier subheading."
                />
                <Section
                    bgClass="bg-body-tertiary"
                    shadowClass="bg-dark"
                    headline="Another headline"
                    subheading="And an even wittier subheading."
                />
            </div>
        </main>
    );
};

const Section = ({ bgClass, shadowClass, headline, subheading }) => (
    <div className={`${bgClass} me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden`}>
        <div className="my-3 p-3">
            <h2 className="display-5">{headline}</h2>
            <p className="lead">{subheading}</p>
        </div>
        <div
            className={`${shadowClass} shadow-sm mx-auto`}
            style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}
        ></div>
    </div>
);

export default MainContent;
