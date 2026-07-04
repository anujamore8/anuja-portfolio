import profile from "../../assets/images/profile.jpeg";
import portfolioData from "../../data/portfolioData";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 px-8"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-blue-600 font-semibold text-lg">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-3">
                        {portfolioData.personal.name}
                    </h1>

                    <h2 className="text-2xl text-slate-600 mt-5">
                        {portfolioData.personal.role}
                    </h2>

                    <p className="text-slate-600 text-lg leading-8 mt-8 max-w-xl">
                        {portfolioData.personal.tagline}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">

                        <a
                            href={portfolioData.personal.resume}
                            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                        >
                            <FaDownload />
                            Resume
                        </a>

                        <a
                            href={portfolioData.personal.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-xl hover:border-blue-600 hover:text-blue-600 transition"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href={portfolioData.personal.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-xl hover:border-blue-600 hover:text-blue-600 transition"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                    </div>

                </div>

                {/* Right Side */}

                <div className="flex justify-center">

                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl opacity-30"></div>

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