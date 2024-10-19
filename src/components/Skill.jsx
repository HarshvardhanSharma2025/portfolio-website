import React from 'react';

const Skill = () => {
    const skills = [
        {
            heading: "Programming Languages",
            items: ["C", "C++", "JavaScript", "SQL"]
        },
        {
            heading: "Web Development",
            items: [
                "HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap",
                "Backend: Node.js, Express.js"
            ]
        },
        {
            heading: "Tools & Technologies",
            items: ["Git", "GitHub", "VS Code"]
        },
        {
            heading: "Frameworks & Libraries",
            items: ["React.js", "Bootstrap", "Tailwind CSS", "MERN Stack"]
        },
        {
            heading: "Soft Skills",
            items: ["Problem-solving", "Analytical Thinking", "Teamwork", "Time Management"]
        }
    ];

    return (
        <div><div className="arrow-main-intern">

            <img src="/images/arrow1.webp" className="arrow-card-skill" alt="Arrow" /></div>
            <div className="card-skill">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="/images/skills.jpg" className="img-fluid rounded-start skill-logo" alt="Skills" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-category">
                                    <h6 className="skill-heading">{skill.heading}</h6>
                                    <div className="skill-items-container">
                                        {skill.items.map((item, idx) => (
                                            <div key={idx} className="skill-item">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skill;
