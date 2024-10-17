import React from 'react';
import { FiArrowUp } from "react-icons/fi";

const Scrool = () => {
    // Function to scroll down by half the page height
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight, // Scroll down by half the viewport height
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    return (
        <div style={{ height: '200vh', textAlign: 'center', paddingTop: '50px' }}>
            <p>Scroll down</p>

            {/* Scroll Down Arrow */}
            <FiArrowUp
                onClick={handleScroll}
                style={{
                    cursor: 'pointer',
                    fontSize: '40px',
                    color: '#007bff',
                    marginTop: '20px',
                    height: '250px',
                    width: '50px',
                    transform: 'scaleY(2)',
                }}
            />
        </div>
    );
};

export default Scrool;
