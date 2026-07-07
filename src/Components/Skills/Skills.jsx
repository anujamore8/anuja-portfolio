import "./Skills.css";

const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Excel", level: 92 },
    { name: "Power BI", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Machine Learning", level: 85 },
    { name: "React", level: 75 },
    { name: "HTML", level: 80 },
];

const technologies = [
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Tableau",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-Learn",
    "React",
    "HTML",
];

const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Communication",
    "Teamwork",
    "Quick Learner",
    "Time Management",
];

function Skills() {
    return (
        <section className="skills" id="skills">

            <div className="section-heading"
                data-aos="fade-up">
                <span>MY SKILLS</span>
                <h2>Technologies I Work With</h2>

                <p>
                    A combination of programming, analytics, visualization and machine
                    learning skills that help me build data-driven solutions.
                </p>
            </div>

            <div className="skills-container">

                {/* Left */}

                <div className="skills-left">

                    <h3>Technical Skills</h3>

                    {technicalSkills.map((skill) => (

                        <div className="skill" key={skill.name}>

                            <div className="skill-title">

                                <span>{skill.name}</span>

                                <span>{skill.level}%</span>

                            </div>

                            <div className="progress">

                                <div
                                    className="progress-bar"
                                    style={{ width: `${skill.level}%` }}
                                ></div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Right */}

                <div className="skills-right">

                    <div className="tech-card">

                        <h3>Tools & Technologies</h3>

                        <div className="tech-grid">

                            {technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}

                        </div>

                    </div>

                    <div className="soft-card">

                        <h3>Professional Skills</h3>

                        <div className="soft-grid">

                            {softSkills.map((skill, index) => (
                                <span key={skill}>✓ {skill}</span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Skills;