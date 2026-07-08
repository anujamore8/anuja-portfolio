import { useState } from "react";
import "./Projects.css";

import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import ProjectModal from "../ProjectModal/ProjectModal";

/* ===========================
   Images
=========================== */

import landuse1 from "../../assets/projects/landuse/1.jpeg";
import landuse2 from "../../assets/projects/landuse/2.jpeg";
import landuse3 from "../../assets/projects/landuse/3.jpeg";
import landuse4 from "../../assets/projects/landuse/4.jpeg";
import landuse5 from "../../assets/projects/landuse/5.jpeg";
import landuse6 from "../../assets/projects/landuse/6.jpeg";

import covid1 from "../../assets/projects/covid/dashboard.png";

import flipkart1 from "../../assets/projects/flipkart/1.png";
import flipkart2 from "../../assets/projects/flipkart/2.png";

import cricket1 from "../../assets/projects/cricket/1.png";
import cricket2 from "../../assets/projects/cricket/2.png";

import car1 from "../../assets/projects/car/1.png";

/* ===========================
   Projects Data
=========================== */

const projects = [

    {
        title: "Explainable Deep Learning Model for Land Use Change Detection",

        images: [
            landuse1,
            landuse2,
            landuse3,
            landuse4,
            landuse5,
            landuse6,
        ],

        type: "Academic Group Project",

        tech: [
            "Python",
            "TensorFlow",
            "OpenCV",
            "Streamlit",
        ],

        description:
            "Developed an Explainable Deep Learning model to detect land use changes from satellite imagery using multi-temporal remote sensing datasets.",

        problem:
            "Manual land use change detection from satellite images is slow and error-prone. This project automates the process using deep learning while providing explainable AI visualizations for model predictions.",

        dataset:
            "LEVIR-CD Dataset (Satellite Remote Sensing Images)",

        features: [
            "Land Use Change Detection",
            "Explainable AI Visualization",
            "Satellite Image Processing",
            "Interactive Streamlit Interface",
            "Prediction Confidence Maps",
        ],

        github: "#",

        demo: "#",
    },

    {
        title: "COVID-19 Trend Analysis & Prediction",

        images: [
            covid1,
        ],

        type: "Machine Learning",

        tech: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
            "Streamlit",
        ],

        description:
            "Performed exploratory data analysis and developed predictive Machine Learning models to forecast COVID-19 trends using an interactive Streamlit dashboard.",

        problem:
            "Analyze COVID-19 historical data and predict future trends to help understand disease spread using Machine Learning.",

        dataset:
            "Public COVID-19 Global Dataset",

        features: [
            "Data Cleaning",
            "EDA",
            "Trend Visualization",
            "Machine Learning Prediction",
            "Interactive Dashboard",
        ],

        github:
            "https://github.com/anujamore8/COVID-19-Trend-Analysis-and-prediction-using-ML",

        demo: "#",
    },

    {
        title: "Flipkart Mobile Data Analysis",

        images: [
            flipkart1,
            flipkart2,
        ],

        type: "Python Project",

        tech: [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
        ],

        description:
            "Analyzed Flipkart mobile datasets to discover pricing trends, customer preferences and recommend products using Python.",

        problem:
            "Extract business insights from Flipkart mobile listings and identify pricing patterns for better purchasing decisions.",

        dataset:
            "Flipkart Mobile Dataset",

        features: [
            "Data Cleaning",
            "Visualization",
            "Price Analysis",
            "Recommendation Insights",
            "Customer Trend Analysis",
        ],

        github:
            "https://github.com/anujamore8/Flipkart-Mobile-Data-Analysis-Recommendation-System-Python-Pandas",

        demo: "#",
    },
    {
        title: "Indian Women's Cricket Team Performance Analysis",

        images: [
            cricket1,
            cricket2,
        ],

        type: "Power BI Dashboard",

        tech: [
            "Power BI",
            "Excel",
            "DAX",
        ],

        description:
            "Designed an interactive Power BI dashboard to analyze player performances, batting and bowling statistics, team insights and match outcomes.",

        problem:
            "Cricket performance data is difficult to interpret from raw scorecards. This dashboard transforms match statistics into interactive visual insights.",

        dataset:
            "Women's International Cricket Statistics Dataset",

        features: [
            "Player Performance Analysis",
            "Batting & Bowling Statistics",
            "Interactive Filters",
            "Match Insights",
            "Team Comparison",
        ],

        github:
            "https://github.com/anujamore8/Indian-Women-Cricket-Team-Performance-Analysis-",

        demo: "#",
    },

    {
        title: "Car Sales Dashboard",

        images: [
            car1,
        ],

        type: "Tableau Dashboard",

        tech: [
            "Tableau",
            "Excel",
        ],

        description:
            "Developed an interactive Tableau dashboard to analyze regional sales performance, customer behavior and profit trends.",

        problem:
            "Business users require an easy way to monitor sales performance, identify profitable regions and understand customer purchasing patterns.",

        dataset:
            "Car Sales Dataset",

        features: [
            "Sales KPI Dashboard",
            "Regional Performance",
            "Profit Analysis",
            "Customer Insights",
            "Interactive Dashboard",
        ],

        github:
            "https://github.com/anujamore8/Car-Sales-Dashboard-Tableau",

        demo: "#",
    },

    {
        title: "Cab Booking Management System",

        images: [],

        type: "SQL Project",

        tech: [
            "SQL",
            "MySQL",
        ],

        description:
            "Designed and implemented a relational database for managing cab bookings using SQL queries, joins and normalization techniques.",

        problem:
            "Efficiently manage cab bookings, customer information, drivers and trip records through a normalized relational database.",

        dataset:
            "Self Designed Relational Database",

        features: [
            "Database Normalization",
            "Complex SQL Queries",
            "Joins",
            "ER Diagram Design",
            "Booking Management",
        ],

        github:
            "https://github.com/anujamore8/Cab-Booking-Analysis-SQL-",
        demo: "#",
    },

];

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (

        <section className="projects section" id="projects">

            <div
                className="section-heading"
                data-aos="fade-up"

            >

                <span>FEATURED PROJECTS</span>

                <h2>My Recent Work</h2>

                <p

                >
                    A collection of Machine Learning, Data Analytics,
                    Business Intelligence and SQL projects showcasing
                    practical problem-solving skills.
                </p>

            </div>

            <div className="projects-grid">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 120}
                    >

                        {project.images.length > 0 ? (

                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="project-image"
                            />

                        ) : (

                            <div className="project-placeholder">

                                🚖

                            </div>

                        )}

                        <div className="project-content">

                            <span className="project-type">

                                {project.type}

                            </span>

                            <h3>

                                {project.title}

                            </h3>

                            <p>

                                {project.description}

                            </p>

                            <div className="tech-tags">

                                {project.tech.map((item, i) => (

                                    <span key={i}>

                                        {item}

                                    </span>

                                ))}

                            </div>

                            <div className="project-buttons">

                                {project.github === "#" ? (

                                    <button
                                        className="academic-btn"
                                        disabled
                                    >

                                        🎓 Academic Group Project

                                    </button>

                                ) : (

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >

                                        <FaGithub />

                                        GitHub

                                    </a>

                                )}

                                <button
                                    className="details-btn"
                                    onClick={() => setSelectedProject(project)}
                                >

                                    <FaExternalLinkAlt />

                                    Details

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {selectedProject && (

                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

            )}

        </section>

    );

}

export default Projects;