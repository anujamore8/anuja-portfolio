import profile from "../../assets/images/profile.jpeg";
import portfolioData from "../../data/portfolioData";
import Button from "../../ui/Button";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-32"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-blue-600 text-lg font-semibold mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                        {portfolioData.personal.name}
                    </h1>

                    <h2 className="text-2xl font-semibold text-slate-600 mt-4">
                        {portfolioData.personal.role}
                    </h2>

                    <p className="text-slate-600 mt-6 leading-8 text-lg max-w-xl">
                        {portfolioData.personal.tagline}
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-8">

                        <Button variant="primary">
                            <FaDownload />
                            <span className="ml-2">Resume</span>
                        </Button>

                        <Button
                            variant="secondary"
                            href={portfolioData.personal.github}
                            target="_blank"
                        >
                            <FaGithub />
                            <span className="ml-2">GitHub</span>
                        </Button>

                        <Button
                            variant="secondary"
                            href={portfolioData.personal.linkedin}
                            target="_blank"
                        >
                            <FaLinkedin />
                            <span className="ml-2">LinkedIn</span>
                        </Button>

                    </div>

                    {/* Stats */}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

                        <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                            <h3 className="text-3xl font-bold text-blue-600">5</h3>
                            <p className="text-slate-600 mt-2">Projects</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                            <h3 className="text-3xl font-bold text-blue-600">5</h3>
                            <p className="text-slate-600 mt-2">Certificates</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                            <h3 className="text-3xl font-bold text-blue-600">1</h3>
                            <p className="text-slate-600 mt-2">Internship</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-5 text-center">
                            <h3 className="text-xl font-bold text-blue-600">
                                Python • SQL
                            </h3>
                            <p className="text-slate-600 mt-2">Core Skills</p>
                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex justify-center">

                    <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-full shadow-2xl">

                        <img
                            src={profile}
                            alt="Anuja More"
                            className="w-80 h-80 object-cover rounded-full border-8 border-white"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;