import "./ProjectModal.css";
import { useState, useEffect } from "react";
import {
    FaGithub,
    FaChevronLeft,
    FaChevronRight,
    FaTimes,
} from "react-icons/fa";

function ProjectModal({ project, onClose }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        setCurrentImage(0);
    }, [project]);

    useEffect(() => {
        const close = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", close);

        return () => window.removeEventListener("keydown", close);
    }, [onClose]);

    if (!project) return null;

    const nextImage = () => {
        if (!project.images) return;

        setCurrentImage(
            (currentImage + 1) % project.images.length
        );
    };

    const previousImage = () => {
        if (!project.images) return;

        setCurrentImage(
            currentImage === 0
                ? project.images.length - 1
                : currentImage - 1
        );
    };

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal-card"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close */}

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>

                {/* Image */}

                {project.images && project.images.length > 0 ? (

                    <div className="modal-image">

                        <img
                            src={project.images[currentImage]}
                            alt={project.title}
                        />

                        {project.images.length > 1 && (

                            <>

                                <button
                                    className="arrow left"
                                    onClick={previousImage}
                                >
                                    <FaChevronLeft />
                                </button>

                                <button
                                    className="arrow right"
                                    onClick={nextImage}
                                >
                                    <FaChevronRight />
                                </button>

                                <div className="image-count">

                                    {currentImage + 1} / {project.images.length}

                                </div>

                            </>

                        )}

                    </div>

                ) : (

                    <div className="modal-placeholder">
                        🚖
                    </div>

                )}

                {/* Content */}

                <div className="modal-content">

                    <span className="modal-type">

                        {project.type}

                    </span>

                    <h2>

                        {project.title}

                    </h2>

                    <p>

                        {project.description}

                    </p>

                    <h4>Problem Statement</h4>

                    <p>

                        {project.problem}

                    </p>

                    <h4>Dataset Used</h4>

                    <p>

                        {project.dataset}

                    </p>

                    <h4>Key Features</h4>

                    <ul>

                        {project.features.map((item, index) => (

                            <li key={index}>

                                {item}

                            </li>

                        ))}

                    </ul>

                    <div className="modal-tech">

                        {project.tech.map((tech, index) => (

                            <span key={index}>

                                {tech}

                            </span>

                        ))}

                    </div>

                    {project.github !== "#" && (

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="github-btn"
                        >

                            <FaGithub />

                            GitHub Repository

                        </a>

                    )}

                </div>

            </div>
        </div>
    );
}

export default ProjectModal;