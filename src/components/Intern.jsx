import React from 'react';

const Intern = () => {
    return (
        <div className="experience-container">
            <div className="card mb-3 card-experience">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                            src="/images/shirramlogo.png" 
                            className="img-fluid rounded-start" 
                            alt="Shriram Pistons Logo" 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">IT Intern</h5>
                            <p className="company-name">Shriram Pistons and Rings Limited, Ghaziabad</p>
                            <p className="internship-duration">June 2024 - July 2024</p>
                            <ul className="responsibilities-list">
                                <li>Monitored network infrastructure under senior engineers' guidance.</li>
                                <li>Assisted in troubleshooting and managing routers and nodes.</li>
                                <li>Coordinated with Airtel engineers to resolve network issues.</li>
                                <li>Generated tickets using NMS for issue tracking.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrow-main-skills">
                <img src="/images/arrow1.webp" className="arrow-experience" alt="Arrow Icon" />
            </div>
        </div>
    );
};

export default Intern;
