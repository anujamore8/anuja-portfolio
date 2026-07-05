import "./Projects.css";

import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

import landuse from "../../assets/projects/landuse/1.jpeg";
import covid from "../../assets/projects/covid/dashboard.png";
import flipkart from "../../assets/projects/flipkart/1.png";
import cricket from "../../assets/projects/cricket/1.png";
import car from "../../assets/projects/car/1.png";

const projects = [
    {
        title: "Explainable Deep Learning Model for Land Use Change Detection",
        image: landuse,
        type: "Academic Group Project",
        tech: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
        description:
            "Developed an explainable deep learning model to detect land use changes from satellite imagery.",
        github: "#",
        demo: "#",
    },

    {
        title: "COVID-19 Trend Analysis & Prediction",
        image: covid,
        type: "Machine Learning",
        tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Streamlit"],
        description:
            "Performed data analysis and built predictive machine learning models to forecast COVID-19 trends through an interactive Streamlit dashboard.",
        github: "https://github.com/anujamore8/COVID-19-Trend-Analysis-and-prediction-using-ML",
        demo: "#",
    },

    {
        title: "Flipkart Mobile Data Analysis",
        image: flipkart,
        type: "Python Project",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        description:
            "Analyzed Flipkart mobile data to identify pricing trends, customer preferences and product recommendations using Python.",
        github: "https://github.com/anujamore8/Flipkart-Mobile-Data-Analysis-Recommendation-System-Python-Pandas",
        demo: "#",
    },

    {
        title: "Indian Women's Cricket Team Analysis",
        image: cricket,
        type: "Power BI Dashboard",
        tech: ["Power BI", "Excel", "DAX"],
        description:
            "Designed an interactive dashboard to analyze player performances, match statistics and team insights.",
        github: "#",
        demo: "#",
    },

    {
        title: "Car Sales Dashboard",
        image: car,
        type: "Tableau Dashboard",
        tech: ["Tableau", "Excel"],
        description:
            "Created an interactive Tableau dashboard to analyze sales performance, customer trends and regional insights.",
        github: "https://github.com/anujamore8/Car-Sales-Dashboard-Tableau",
        demo: "#",
    },

    {
        title: "Cab Booking Management System",
        image: "",
        type: "SQL Project",
        tech: ["SQL", "MySQL"],
        description:
            "Designed and managed a relational database for a cab booking system using SQL with optimized queries, joins and database normalization.",
        github: "https://github.com/anujamore8/Cab-Booking-system-Using-SQL",
        demo: "#",
    },
];

function Projects() {
    return (
        <section className="projects section" id="projects">

            <div className="section-title">

                <span>FEATURED PROJECTS</span>

                <h2>My Recent Work</h2>

                <p>
                    A collection of Machine Learning, Data Analytics,
                    Business Intelligence and SQL projects showcasing
                    practical problem-solving skills.
                </p>

            </div>

            <div className="projects-grid">

                {projects.map((project, index) => (

                    <div className="project-card" key={index}>

                        {project.image ? (
                            <img
                                src={project.image}
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

                            <h3>{project.title}</h3>

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

                                <a href={project.github}>
                                    <FaGithub />
                                    GitHub
                                </a>

                                <a href={project.demo}>
                                    <FaExternalLinkAlt />
                                    Details
                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;