import profile from "../../assets/images/profile.jpeg";
import portfolioData from "../../data/portfolioData";

import {
    FaGraduationCap,
    FaMapMarkerAlt,
    FaEnvelope,
    FaBrain,
    FaPython,
    FaChartLine,
    FaDatabase,
} from "react-icons/fa";

function About() {
    return (
        <section
            id="about"
            className="py-24 px-6 bg-gradient-to-b from-[#F8F5FF] via-[#FFF8F5] to-[#FFFFFF]"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-20">

                    <p className="uppercase tracking-[5px] text-violet-600 font-semibold">
                        About Me
                    </p>

                    <h2 className="text-5xl font-bold text-slate-900 mt-4">
                        Turning Data Into Meaningful Insights
                    </h2>

                    <p className="text-slate-600 mt-5 max-w-3xl mx-auto text-lg leading-8">
                        Passionate about Data Analytics, Machine Learning and Artificial
                        Intelligence with a strong desire to solve real-world business
                        problems using data.
                    </p>

                </div>

                {/* Main Layout */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Card */}

                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10">

                        <div className="flex justify-center">

                            <img
                                src={profile}
                                alt="Anuja More"
                                className="w-64 h-64 rounded-full object-cover border-8 border-violet-100 shadow-lg"
                            />

                        </div>

                        <div className="mt-10 space-y-5">

                            <div className="flex items-center gap-4">

                                <FaMapMarkerAlt className="text-violet-600 text-xl" />

                                <span className="text-slate-700 text-lg">
                                    {portfolioData.personal.location}
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaEnvelope className="text-violet-600 text-xl" />

                                <span className="text-slate-700 text-lg break-all">
                                    {portfolioData.personal.email}
                                </span>

                            </div>

                            <div className="flex items-center gap-4">

                                <FaGraduationCap className="text-violet-600 text-xl" />

                                <span className="text-slate-700 text-lg">
                                    {portfolioData.education.cgpa}
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* Right Side */}

                    <div>

                        <h3 className="text-4xl font-bold text-slate-900 mb-8">
                            Hi, I'm {portfolioData.personal.name}
                        </h3>

                        <p className="text-slate-600 leading-9 text-lg">
                            {portfolioData.about.description}
                        </p>

                        <div className="mt-10 bg-white rounded-3xl shadow-lg p-8">

                            <h4 className="text-2xl font-semibold text-slate-900 mb-6">
                                Education
                            </h4>

                            <div className="space-y-3">

                                <p className="text-slate-700 text-lg">
                                    <strong>Degree:</strong>{" "}
                                    {portfolioData.education.degree}
                                </p>

                                <p className="text-slate-700 text-lg">
                                    <strong>College:</strong>{" "}
                                    {portfolioData.education.college}
                                </p>

                                <p className="text-slate-700 text-lg">
                                    <strong>University:</strong>{" "}
                                    {portfolioData.education.university}
                                </p>

                                <p className="text-slate-700 text-lg">
                                    <strong>Graduation:</strong>{" "}
                                    {portfolioData.education.graduation}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Highlights */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

                        <FaPython className="text-5xl text-blue-600" />

                        <h3 className="text-xl font-bold mt-5">
                            Python
                        </h3>

                        <p className="text-slate-600 mt-3">
                            Data Analysis & Automation
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

                        <FaChartLine className="text-5xl text-green-600" />

                        <h3 className="text-xl font-bold mt-5">
                            Data Analytics
                        </h3>

                        <p className="text-slate-600 mt-3">
                            Excel, Power BI & Tableau
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

                        <FaBrain className="text-5xl text-violet-600" />

                        <h3 className="text-xl font-bold mt-5">
                            Machine Learning
                        </h3>

                        <p className="text-slate-600 mt-3">
                            Predictive Models & AI
                        </p>

                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

                        <FaDatabase className="text-5xl text-orange-500" />

                        <h3 className="text-xl font-bold mt-5">
                            SQL
                        </h3>

                        <p className="text-slate-600 mt-3">
                            Querying & Database Management
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;