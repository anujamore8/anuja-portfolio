import "./Footer.css";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer"
            data-aos="fade-up">

            <div className="footer-container">

                <h2>Anuja More</h2>

                <p>
                    Data Analyst • Machine Learning Enthusiast • AI Explorer
                </p>

                <div className="footer-icons">

                    <a
                        href="https://github.com/anujamore8"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anuja-more-67169a347/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                </div>

                <div className="footer-bottom">

                    <p className="made-with">
                        Made with <FaHeart className="heart" />
                    </p>

                    <h3 className="footer-name">
                        Anuja More
                    </h3>

                    <span>
                        © {new Date().getFullYear()} All Rights Reserved
                    </span>

                </div>
            </div>

        </footer>
    );
};

export default Footer;