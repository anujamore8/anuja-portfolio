import profile from "../../assets/images/profile.jpeg";
import portfolioData from "../../data/portfolioData";

import {
    FaGithub,
    FaLinkedin,
    FaDownload,
    FaBriefcase,
    FaAward,
    FaFolderOpen,
    FaCode,
} from "react-icons/fa";

import Button from "../ui/Button";

function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-b from-[#FFF8F4] via-[#FDFBFF] to-[#F8F5FF] pt-32"
        >
            {/* Background Blobs */}

            <div className="absolute -top-32 -left-20 w-96 h-96 bg-[#FFE8D9] rounded-full blur-3xl opacity-50"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EDE9FE] rounded-full blur-3xl opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* LEFT */}

                <div data-aos="fade-right">

                    <p className="text-violet-600 font-semibold text-lg mb-4">
                        👋 Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900">
                        {portfolioData.personal.name}
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-600 font-semibold mt-6">
                        {portfolioData.personal.role}
                    </h2>

                    <p className="text-slate-600 leading-8 text-lg mt-8 mb-8 max-w-xl">
                        {portfolioData.personal.tagline}
                    </p>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4">

                        <Button
                            href={portfolioData.personal.resume}
                            variant="primary"
                        >
                            <FaDownload />
                            <span className="ml-2">Resume</span>
                        </Button>

                        <Button
                            href={portfolioData.personal.github}
                            variant="secondary"
                            target="_blank"
                        >
                            <FaGithub />
                            <span className="ml-2">GitHub</span>
                        </Button>

                        <Button
                            href={portfolioData.personal.linkedin}
                            variant="secondary"
                            target="_blank"
                        >
                            <FaLinkedin />
                            <span className="ml-2">LinkedIn</span>
                        </Button>

                    </div>

                    <div className="h-12"></div>

                    {/* Stats */}

                    <div className="grid grid-cols-2 gap-6 mt-6">

                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition duration-300">

                            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                                <FaFolderOpen className="text-violet-600 text-xl" />
                            </div>

                            <h3 className="text-3xl font-bold">7</h3>

                            <p className="text-slate-500 mt-2">
                                Projects
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition duration-300">

                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                                <FaAward className="text-orange-500 text-xl" />
                            </div>

                            <h3 className="text-3xl font-bold">12+</h3>

                            <p className="text-slate-500 mt-2">
                                Certificates
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition duration-300">

                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                                <FaBriefcase className="text-green-600 text-xl" />
                            </div>

                            <h3 className="text-3xl font-bold">1</h3>

                            <p className="text-slate-500 mt-2">
                                Internship
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition duration-300">

                            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-4">
                                <FaCode className="text-pink-600 text-xl" />
                            </div>

                            <h3 className="text-lg font-bold">
                                Python • SQL
                            </h3>

                            <p className="text-slate-500 mt-2">
                                Core Skills
                            </p>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div
                    className="flex justify-center"
                    data-aos="fade-left"
                >

                    <div className="relative">

                        <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-pink-300 rounded-full blur-3xl opacity-40 scale-110"></div>

                        <div className="relative bg-white p-3 rounded-full shadow-2xl">

                            <img
                                src={profile}
                                alt="Anuja More"
                                className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full object-cover"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;