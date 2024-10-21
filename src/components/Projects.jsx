import React from 'react';
import Section from './Section';

const MainContent = () => {




    const sectionsData = [
        {
            bgClass: "text-bg-dark",
            shadowClass: "bg-body-tertiary",
            headline: "Calculator",
            subheading: "A simple calculator to make your calculations easy.."
        },
        {
            bgClass: "bg-body-tertiary",
            shadowClass: "bg-dark",
            headline: "Project 2",
            subheading: "A description of the second project."
        },
        {
            bgClass: "bg-body-tertiary",
            shadowClass: "bg-dark",
            headline: "Project 3",
            subheading: "A description of the third project."
        },
        {
            bgClass: "text-bg-dark",
            shadowClass: "bg-body-tertiary",
            headline: "Project 4",
            subheading: "A description of the fourth project."
        }
    ];

    



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
                {sectionsData.slice(0, 2).map((section, index) => (
                    <Section key={index} bgClass={section.bgClass} shadowClass={section.shadowClass} headline={section.headline} subheading={section.subheading} />
                ))}
            </div>

            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 custom-two">
                {sectionsData.slice(2, 4).map((section, index) => (
                    <Section key={index} bgClass={section.bgClass} shadowClass={section.shadowClass} headline={section.headline} subheading={section.subheading} />
                ))}
            </div>
        </main>
    );
};


export default MainContent;
