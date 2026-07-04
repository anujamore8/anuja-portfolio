import profile from "../../assets/images/profile.jpeg";
import portfolioData from "../../data/portfolioData";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden pt-32"
        >
            {/* Background Blobs */}
            <div className="absolute top-10 left-0 w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-40"></div>

            <div className="absolute top-40 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-40"></div>

            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center min-h-screen">

                {/* Left Side */}
                <div>

                    <p className="text-violet-600 font-semibold text-lg mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-6xl font-bold text-slate-900 leading-tight">
                        {portfolioData.personal.name}
                    </h1>

                    <h2 className="mt-4 text-2xl font-semibold text-slate-700">
                        {portfolioData.personal.role}
                    </h2>

                    <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
                        {portfolioData.personal.tagline}
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-10">

                        <a
                            href={portfolioData.personal.resume}
                            className="flex items-center gap-2 bg-violet-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-violet-700 transition duration-300"
                        >
                            <FaDownload />
                            Resume
                        </a>

                        <a
                            href={portfolioData.personal.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-white border border-slate-300 px-7 py-3 rounded-full hover:border-violet-500 hover:text-violet-600 transition"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href={portfolioData.personal.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-white border border-slate-300 px-7 py-3 rounded-full hover:border-violet-500 hover:text-violet-600 transition"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                    </div>

                    {/* Stats */}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 text-center">
                            <h3 className="text-3xl font-bold text-violet-600">5+</h3>
                            <p className="text-slate-600 mt-2">Projects</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 text-center">
                            <h3 className="text-3xl font-bold text-violet-600">5+</h3>
                            <p className="text-slate-600 mt-2">Certificates</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 text-center">
                            <h3 className="text-3xl font-bold text-violet-600">1</h3>
                            <p className="text-slate-600 mt-2">Internship</p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-5 text-center">
                            <h3 className="text-xl font-bold text-violet-600">
                                Python • SQL
                            </h3>
                            <p className="text-slate-600 mt-2">Core Skills</p>
                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex justify-center">

                    <div className="relative">

                        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-orange-200 rounded-full blur-3xl opacity-50"></div>

                        <img
                            src={profile}
                            alt="Anuja More"
                            className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;