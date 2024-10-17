import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaSquareGithub } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { IoShareSocialSharp } from 'react-icons/io5';

const SideIcons = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position to toggle the icon color
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 500; // Change color after 100px scroll
            setIsScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Dynamic color based on scroll state
    const iconColor = isScrolled ? '#007bff' : 'black'; // Orange when scrolled, blue otherwise

    return (
        <div className="social-icons" style={{ position: 'fixed', top: '50%', transform: 'translateY(-50%)' }}>
            <a
                href="https://www.instagram.com"
                target="_blank"
                className="icon"
                rel="noopener noreferrer"
                title="Instagram"
                style={{ color: iconColor }}
            >
                <IoLogoInstagram size={30} />
            </a>
            <a
                href="https://github.com"
                target="_blank"
                className="icon"
                rel="noopener noreferrer"
                title="GitHub"
                style={{ color: iconColor }}
            >
                <FaSquareGithub size={30} />
            </a>
            <a
                href="https://leetcode.com"
                target="_blank"
                className="icon"
                rel="noopener noreferrer"
                title="LeetCode"
                style={{ color: iconColor }}
            >
                <SiLeetcode size={30} />
            </a>
            <a
                href="#"
                className="icon"
                onClick={() =>
                    navigator.share({
                        title: 'Share this page!',
                        url: window.location.href,
                    })
                }
                title="Share"
                style={{ color: iconColor }}
            >
                <IoShareSocialSharp size={30} />
            </a>
        </div>
    );
};

export default SideIcons;
