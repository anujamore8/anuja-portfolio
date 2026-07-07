import "./Certificates.css";

import {
    FaAward,
    FaPython,
    FaDatabase,
    FaBrain,
    FaChartBar,
    FaChartLine,
    FaFileExcel,
    FaCalculator,
    FaLaptopCode,
    FaBriefcase,
} from "react-icons/fa";

/* ===========================
   Certificate Imports
=========================== */

import dsai from "../../assets/certificates/data-science-ai/certificate.jpeg";
import python from "../../assets/certificates/python/certificate.jpeg";
import sql from "../../assets/certificates/sql/certificate.jpeg";
import ml from "../../assets/certificates/machine-learning/certificate.jpeg";
import tableau from "../../assets/certificates/tableau/certificate.jpeg";
import powerbi from "../../assets/certificates/powerbi/certificate.jpeg";
import excel from "../../assets/certificates/excel/certificate.jpeg";
import numpy from "../../assets/certificates/numpy/certificate.jpeg";
import analysis from "../../assets/certificates/analysis-python/certificate.jpeg";

import deloitte from "../../assets/certificates/deloitte/certificate.jpeg";
import jpmorgan from "../../assets/certificates/jpmorgan/certificate.jpeg";
import hackerrank from "../../assets/certificates/hackerrank/certificate.jpeg";

/* ===========================
   Professional Certifications
=========================== */

const professionalCertificates = [
    {
        title: "Data Science & Artificial Intelligence",
        issuer: "ITVedant",
        year: "Aug 2025 – May 2026",
        icon: <FaAward />,
        image: dsai,
        featured: true,
    },
    {
        title: "Python Essentials for Data Science",
        issuer: "ITVedant",
        year: "2025",
        icon: <FaPython />,
        image: python,
    },
    {
        title: "SQL Mastery",
        issuer: "ITVedant",
        year: "2025",
        icon: <FaDatabase />,
        image: sql,
    },
    {
        title: "Machine Learning Mastery",
        issuer: "ITVedant",
        year: "2026",
        icon: <FaBrain />,
        image: ml,
    },
    {
        title: "Power BI Essentials",
        issuer: "ITVedant",
        year: "2026",
        icon: <FaChartLine />,
        image: powerbi,
    },
    {
        title: "Tableau Essentials",
        issuer: "ITVedant",
        year: "2026",
        icon: <FaChartBar />,
        image: tableau,
    },
    {
        title: "Advanced Excel",
        issuer: "ITVedant",
        year: "2025",
        icon: <FaFileExcel />,
        image: excel,
    },
    {
        title: "NumPy & Statistical Analysis",
        issuer: "ITVedant",
        year: "2025",
        icon: <FaCalculator />,
        image: numpy,
    },
    {
        title: "Analysis with Python",
        issuer: "ITVedant",
        year: "2025",
        icon: <FaLaptopCode />,
        image: analysis,
    },
];

/* ===========================
   Industry Credentials
=========================== */

const industryCertificates = [
    {
        company: "Deloitte",
        title: "Data Analytics Job Simulation",
        year: "April 2026",
        image: deloitte,
    },
    {
        company: "JPMorgan Chase & Co.",
        title: "Quantitative Research Job Simulation",
        year: "2026",
        image: jpmorgan,
    },
    {
        company: "HackerRank",
        title: "SQL (Advanced)",
        year: "December 2025",
        image: hackerrank,
    },
];

const Certificates = () => {
    return (
        <section className="certificates section" id="certifications"
            data-aos="fade-up">
            <div className="container">

                <div className="section-heading">
                    <span className="section-subtitle">CERTIFICATIONS</span>

                    <h2 className="section-heading">
                        Learning & Professional Credentials
                    </h2>

                    <p className="section-description">
                        Continuous learning has been a key part of my journey in
                        Data Science, Artificial Intelligence, Machine Learning,
                        Data Analytics and Business Intelligence.
                    </p>
                </div>

                {/* ==========================
            Professional
        ========================== */}

                <h3 className="certificate-section-title">
                    Professional Certifications
                </h3>

                <div className="certificate-grid">

                    {professionalCertificates.map((certificate, index) => (

                        <a
                            key={index}
                            href={certificate.image}
                            target="_blank"
                            rel="noreferrer"
                            className={`certificate-card ${certificate.featured ? "featured" : ""
                                }`}
                        >

                            <div className="certificate-icon">
                                {certificate.icon}
                            </div>

                            <h4>{certificate.title}</h4>

                            <p>{certificate.issuer}</p>

                            <span>{certificate.year}</span>

                            <div className="view-text">
                                Click to View Certificate →
                            </div>

                        </a>

                    ))}

                </div>

                {/* ==========================
            Industry Credentials
        ========================== */}

                <h3 className="certificate-section-title">
                    Industry Credentials
                </h3>

                <div className="industry-grid">

                    {industryCertificates.map((item, index) => (

                        <a
                            key={index}
                            href={item.image}
                            target="_blank"
                            rel="noreferrer"
                            className="industry-card"
                        >

                            <div className="industry-icon">
                                <FaBriefcase />
                            </div>

                            <h4>{item.company}</h4>

                            <p>{item.title}</p>

                            <span>{item.year}</span>

                            <div className="view-text">
                                View Credential →
                            </div>

                        </a>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Certificates;