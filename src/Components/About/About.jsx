import "./About.css";
import resume from "../../assets/resume/Anuja_More_Resume Data Analysis.pdf";
import profile from "../../assets/images/profile.jpeg";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaGraduationCap,
    FaDownload,
} from "react-icons/fa";

function About() {
    return (
        <section
            id="about"
            data-aos="fade-up"
        >

            <div className="section-heading">
                <span>ABOUT ME</span>
                <h2>Turning Data Into Meaningful Insights</h2>
                <p>
                    Passionate about Data Analytics, Machine Learning and Artificial
                    Intelligence with a strong desire to solve real-world business
                    problems using data.
                </p>
            </div>

            <div className="about-container">

                {/* Left */}

                <div className="about-image">

                    <div className="image-card">

                        <img src={profile} alt="Anuja More" />

                        <div className="info">

                            <p>
                                <FaMapMarkerAlt />
                                Pune, Maharashtra
                            </p>

                            <p>
                                <FaEnvelope />
                                anujamore288@gmail.com
                            </p>

                            <p>
                                <FaGraduationCap />
                                9.40 CGPA
                            </p>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="about-content">

                    <h3>Hi, I'm Anuja More 👋</h3>

                    <p>
                        I am a passionate Information Technology student with a strong
                        interest in Data Analytics, Machine Learning, Artificial
                        Intelligence and Business Intelligence.
                    </p>

                    <p>
                        I enjoy transforming raw data into meaningful insights using Python,
                        SQL, Excel, Power BI, Tableau and Machine Learning. My goal is to
                        build intelligent data-driven solutions that solve real-world
                        problems.
                    </p>

                    <div className="education-card">

                        <h4>Education</h4>

                        <ul>

                            <li>
                                <strong>Degree :</strong> B.E Information Technology
                            </li>

                            <li>
                                <strong>College :</strong> Parvatibai Genba Moze College of
                                Engineering, Wagholi
                            </li>

                            <li>
                                <strong>University :</strong> Savitribai Phule Pune University
                            </li>

                            <li>
                                <strong>CGPA :</strong> 9.40
                            </li>

                            <li>
                                <strong>Graduation :</strong> 2026
                            </li>

                        </ul>

                    </div>

                    <a href={resume} className="resume-btn" target="_blank" rel="noreferrer">
                        <FaDownload />
                        Download Resume
                    </a>
                </div>

            </div>

            {/* Bottom Cards */}

            <div className="about-cards">

                <div className="card">
                    <h3>🎓 Education</h3>
                    <p>Strong academic background with 9.40 CGPA.</p>
                </div>

                <div className="card">
                    <h3>📊 Data Analytics</h3>
                    <p>Excel, SQL, Power BI, Tableau & Dashboard Development.</p>
                </div>

                <div className="card">
                    <h3>🤖 Machine Learning</h3>
                    <p>Predictive models using Python and Scikit-Learn.</p>
                </div>

                <div className="card">
                    <h3>💡 Problem Solver</h3>
                    <p>Building real-world projects using AI and Data Science.</p>
                </div>

            </div>

        </section>
    );
}

export default About;