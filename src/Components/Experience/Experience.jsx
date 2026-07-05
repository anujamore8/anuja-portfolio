import "./Experience.css";

import {
    FaBriefcase,
    FaCalendarAlt,
    FaPython,
    FaDatabase,
    FaChartLine,
    FaFileExcel,
    FaBrain,
} from "react-icons/fa";

import certificate from "../../assets/experience/betechnos.pdf";

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <div className="container">

                <div className="section-heading">
                    <span className="section-subtitle">
                        EXPERIENCE
                    </span>

                    <h2 className="section-title">
                        Professional Experience
                    </h2>

                    <p className="section-description">
                        Hands-on industry experience in Data Science,
                        Data Analytics and Machine Learning through
                        real-world business projects and data-driven solutions.
                    </p>
                </div>

                <div className="experience-card">

                    {/* Header */}

                    <div className="experience-header">

                        <div className="experience-icon">
                            <FaBriefcase />
                        </div>

                        <div>

                            <h3>Data Scientist</h3>

                            <h4>Betechnos Technology Pvt. Ltd.</h4>

                            <div className="experience-date">

                                <FaCalendarAlt />

                                <span>January 2025 – April 2025</span>

                            </div>

                        </div>

                    </div>

                    {/* Skills */}

                    <div className="experience-skills">

                        <span>
                            <FaPython />
                            Python
                        </span>

                        <span>
                            <FaDatabase />
                            SQL
                        </span>

                        <span>
                            <FaChartLine />
                            Power BI
                        </span>

                        <span>
                            <FaFileExcel />
                            Excel
                        </span>

                        <span>
                            <FaBrain />
                            Machine Learning
                        </span>

                        <span>
                            📊 EDA
                        </span>

                    </div>

                    {/* Responsibilities */}

                    <div className="experience-content">

                        <ul>

                            <li>
                                Analyzed and cleaned transaction datasets
                                using Python, SQL and Excel.
                            </li>

                            <li>
                                Performed data preprocessing and
                                Exploratory Data Analysis (EDA)
                                to identify patterns, anomalies and trends.
                            </li>

                            <li>
                                Developed interactive Power BI dashboards
                                to visualize KPIs and business insights.
                            </li>

                            <li>
                                Automated reporting workflows
                                to improve reporting efficiency.
                            </li>

                            <li>
                                Supported machine learning workflows
                                through data preparation, feature engineering
                                and analytics.
                            </li>

                        </ul>

                    </div>

                    <a
                        href={certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience-btn"
                    >
                        View Experience Certificate →
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Experience;