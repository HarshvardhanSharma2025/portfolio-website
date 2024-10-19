import "./ProjectsShowcase.css";

const ProjectsShowcase = () => {
    return (
        <main className="projects-section">
            <div className="intro-section text-center">
                <h1 className="display-4 fw-bold project-heading">"My Digital Creations Portfolio"</h1>
                <h3 className="fw-normal text-muted mb-4 project-subheading">
                Check out the projects 
                </h3>
                <div className="d-flex gap-4 justify-content-center">
                    <a className="action-button" href="#learn-more">
                        Read More
                    </a>
                    <a className="action-button" href="#buy">
                       Contact
                    </a>
                </div>
            </div>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </main>
    );
};

const projects = [
    {
        title: 'Calculator',
        description: 'A simple calculator to make your calculations easy.',
        link: 'https://hvscal.netlify.app/',
        image: '/images/project1.png',
    },
    {
        title: 'Network Monitor Dashboard',
        description: 'A tool for monitoring nodes and networks in real-time.',
        link: '#',
        image: '/images/network.png',
    },
    {
        title: 'E-commerce Website',
        description: 'Full-stack application built with React and Node.js.',
        link: '#',
        image: '/images/ecommerce.png',
    },
];

const ProjectCard = ({ title, description, link, image }) => (
    <div className="project-card">
            <img src={image} alt={title} className="project-image" />
        
        <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    </div>
);

export default ProjectsShowcase;
