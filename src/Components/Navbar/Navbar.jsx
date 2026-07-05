import { useState } from "react";
import { Link } from "react-scroll";
import {
    HiOutlineMenuAlt3,
    HiOutlineX,
} from "react-icons/hi";
import portfolioData from "../../data/portfolioData";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 px-5 lg:px-10 pt-6">
                <div className="max-w-7xl mx-auto">

                    {/* Glass Navbar */}

                    <nav className="flex items-center justify-between rounded-full bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg px-8 py-4">

                        {/* Logo */}

                        <h1 className="text-2xl font-bold text-slate-900 cursor-pointer">
                            {portfolioData.personal.name}
                        </h1>

                        {/* Desktop Menu */}

                        <ul className="hidden lg:flex items-center gap-10">

                            {portfolioData.navigation.map((item) => (

                                <li key={item}>

                                    <Link
                                        to={item}
                                        smooth={true}
                                        duration={600}
                                        offset={-80}
                                        spy={true}
                                        activeClass="text-violet-600"
                                        className="cursor-pointer capitalize text-slate-600 font-medium hover:text-violet-600 transition-all duration-300"
                                    >
                                        {item}
                                    </Link>

                                </li>

                            ))}

                        </ul>

                        {/* Resume */}

                        <a
                            href={portfolioData.personal.resume}
                            download
                            className="hidden lg:inline-flex items-center rounded-full bg-violet-600 text-white px-6 py-3 font-semibold shadow-md hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Resume
                        </a>

                        {/* Mobile */}

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden text-3xl text-slate-800"
                        >
                            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                        </button>

                    </nav>

                </div>
            </header>

            {/* Mobile Menu */}

            {menuOpen && (

                <div className="fixed top-28 left-5 right-5 bg-white rounded-3xl shadow-xl p-8 z-40 lg:hidden">

                    <ul className="flex flex-col gap-7 text-center">

                        {portfolioData.navigation.map((item) => (

                            <li key={item}>

                                <Link
                                    to={item}
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    onClick={() => setMenuOpen(false)}
                                    className="capitalize text-lg text-slate-700 font-medium cursor-pointer hover:text-violet-600 transition"
                                >
                                    {item}
                                </Link>

                            </li>

                        ))}

                    </ul>

                    <a
                        href={portfolioData.personal.resume}
                        download
                        className="mt-8 flex justify-center rounded-full bg-violet-600 py-3 text-white font-semibold hover:bg-violet-700 transition"
                    >
                        Download Resume
                    </a>

                </div>

            )}
        </>
    );
}

export default Navbar;