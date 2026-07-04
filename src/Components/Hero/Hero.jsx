import profile from "../../assets/images/profile.jpeg";
import portfolioData from "../../data/portfolioData";

import {
    FaGithub,
    FaLinkedin,
    FaDownload,
} from "react-icons/fa";

function Hero() {
    return (
        <section
            id="Home"
            className="min-h-screen bg-slate-900 flex items-center pt-24"
        >
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SECTION */}
                <div>

                    <p className="text-sky-400 text-xl font-medium mb-3">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-6xl font-extrabold text-white leading-tight">
                        {portfolioData.personal.name}
                    </h1>

                    <h2 className="text-3xl font-semibold text-sky-400 mt-5">
                        Data Analyst | Aspiring Data Scientist | AI Enthusiast
                    </h2>

                    <p className="text-slate-300 text-lg leading-8 mt-8">
                        {portfolioData.personal.tagline}
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-5 mt-10">

                        <a
                            href="#"
                            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
                        >
                            <FaDownload />
                            Resume
                        </a>

                        <a
                            href={portfolioData.personal.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 border border-slate-600 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 px-6 py-3 rounded-xl"
                        >
                            <FaGithub />
                            GitHub
                        </a>

                        <a
                            href={portfolioData.personal.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 border border-slate-600 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 px-6 py-3 rounded-xl"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                    </div>

                </div>

                {/* RIGHT SECTION */}

                <div className="flex justify-center">

                    <div className="relative">

                        <div className="absolute inset-0 rounded-full bg-sky-500 blur-3xl opacity-30"></div>

                        <img
                            src={profile}
                            alt="Anuja More"
                            className="relative w-[380px] h-[380px] object-cover rounded-full border-8 border-sky-500 shadow-2xl"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;