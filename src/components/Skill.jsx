import React from 'react';

const Skill = () => {
    return (
        <div className="skill-container">
            {/* Skill Card */}
            <div className="card mb-3 card-skill">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                            src="/images/skills.jpg" 
                            className="img-fluid rounded-start skill-logo" 
                            alt="Skills" 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Technical Skills</h5>
                            <p className="card-text">
                                <strong>Programming Languages:</strong> C, C++, JavaScript, Python, SQL
                            </p>
                            <p className="card-text">
                                <strong>Web Development:</strong> HTML5, CSS3, JavaScript, React.js, Bootstrap
                                <br />
                                <strong>Backend:</strong> Node.js, Express.js
                                <br />
                                <strong>Database:</strong> MongoDB, MySQL
                            </p>
                            <p className="card-text">
                                <strong>Tools & Technologies:</strong> Git, GitHub, Postman, Docker (if relevant), VS Code, Eclipse, IntelliJ
                            </p>
                            <p className="card-text">
                                <strong>Frameworks & Libraries:</strong> React.js, Bootstrap, Tailwind CSS, MERN Stack
                            </p>
                            <p className="card-text">
                                <strong>Soft Skills:</strong> Problem-solving, Analytical thinking, Teamwork, Time management
                            </p>
                            <p className="card-text">
                                <strong>Certifications & Achievements:</strong>
                                <ul>
                                    <li>Coursera – Front-End Web Development with React</li>
                                    <li>LinkedIn Learning – SQL for Data Analysis</li>
                                    <li>CodeChef 4-star (if applicable)</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Arrow Image */}
            <div className="arrow-main-intern">
                <img 
                    src="/images/arrow1.webp" 
                    className="arrow-card-skill" 
                    alt="Arrow" 
                />
            </div>
        </div>
    );
};

export default Skill;
