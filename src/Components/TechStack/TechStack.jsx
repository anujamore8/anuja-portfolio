import {
    FaPython,
    FaReact,
    FaHtml5,
    FaDatabase,
    FaChartBar,
    FaBrain,
    FaCode,
    FaLaptopCode,
    FaServer,
    FaProjectDiagram,
} from "react-icons/fa";

const technologies = [
    {
        name: "Python",
        icon: <FaPython />,
        color: "text-blue-600",
    },
    {
        name: "SQL",
        icon: <FaDatabase />,
        color: "text-orange-500",
    },
    {
        name: "Excel",
        icon: <FaChartBar />,
        color: "text-green-600",
    },
    {
        name: "Power BI",
        icon: <FaChartBar />,
        color: "text-yellow-500",
    },
    {
        name: "Tableau",
        icon: <FaProjectDiagram />,
        color: "text-blue-500",
    },
    {
        name: "Pandas",
        icon: <FaServer />,
        color: "text-slate-700",
    },
    {
        name: "NumPy",
        icon: <FaCode />,
        color: "text-cyan-600",
    },
    {
        name: "Machine Learning",
        icon: <FaBrain />,
        color: "text-purple-600",
    },
    {
        name: "React",
        icon: <FaReact />,
        color: "text-sky-500",
    },
    {
        name: "HTML",
        icon: <FaHtml5 />,
        color: "text-orange-600",
    },
];

function TechStack() {
    return (
        <section
            id="techstack"
            className="py-24 px-6 bg-gradient-to-b from-[#FFF7F3] via-[#FDF2F8] to-[#F3E8FF]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-violet-600 uppercase tracking-[4px] font-semibold">
                        Technologies
                    </p>

                    <h2 className="text-5xl font-bold text-slate-900 mt-3">
                        Tools & Technologies
                    </h2>

                    <p className="text-slate-600 text-lg mt-5 max-w-3xl mx-auto">
                        Technologies I use to build data-driven applications and solve
                        real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex flex-col items-center"
                        >
                            <div className={`${tech.color} text-5xl`}>
                                {tech.icon}
                            </div>

                            <h3 className="mt-6 text-lg font-semibold text-slate-800 text-center">
                                {tech.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TechStack;