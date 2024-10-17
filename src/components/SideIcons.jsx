import 'font-awesome/css/font-awesome.min.css';
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { IoShareSocialSharp } from "react-icons/io5";
const SideIcons = () => {
    return (
        <div className="social-icons">
            <a
                href="https://www.instagram.com"
                target="_blank"
                className="icon"
                rel="noopener noreferrer"
                title="Instagram"
            >
                <IoLogoInstagram size={30} />
            </a>
            <a
                href="https://github.com"
                target="_blank"
                className="icon"
                rel="noopener noreferrer"
                title="GitHub"
            >
                <FaSquareGithub size={30}/>
            </a>
            <a
                href="https://leetcode.com"
                target="_blank"
                className="icon"
                rel="noopener noreferrer"
                title="LeetCode"
            >
                <SiLeetcode size={30}/>
            </a>
            <a
                href="#"
                className="icon"
                onClick={() => navigator.share({
                    title: 'Share this page!',
                    url: window.location.href
                })}
                title="Share"
            >
                <IoShareSocialSharp size={30} />
            </a>
        </div>
    );
};


export default SideIcons;