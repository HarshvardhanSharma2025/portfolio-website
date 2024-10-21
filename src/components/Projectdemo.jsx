// UniqueProjectsShowcase.js
import React from 'react';
import './Projectdemo.css';

const Projectdemo = () => {
    const projects = [
        {
            title: 'Interactive Calculator',
            description: 'An interactive calculator built with React, offering advanced functionalities and a sleek design.',
            link: 'https://hvscal.netlify.app/',
            image: 'path_to_calculator_image.jpg', // Update with actual image path
        },
        {
            title: 'Real-Time Network Monitor',
            description: 'A sophisticated tool for monitoring network traffic and nodes in real-time, providing insights at a glance.',
            link: '#',
            image: 'path_to_network_monitor_image.jpg', // Update with actual image path
        },
    ];

    return (
        <div className="unique-projects-section">
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

const ProjectCard = ({ title, description, link, image }) => (
    <div className="project-card">
        <div className="project-image-container">
            <img src={image} alt={title} className="project-image" />
        </div>
        <div className="project-info">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    </div>
);

export default Projectdemo;
