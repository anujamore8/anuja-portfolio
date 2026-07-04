import { Link } from "react-scroll";
import Button from "../ui/Button";
import portfolioData from "../../data/portfolioData";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="max-w-7xl mx-auto mt-4 bg-white/80 backdrop-blur-lg border border-slate-200 rounded-2xl shadow-sm px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-slate-900 cursor-pointer">
                    {portfolioData.personal.name}
                </h1>

                {/* Navigation */}
                <ul className="hidden md:flex items-center gap-8">

                    {portfolioData.navigation.map((item) => (
                        <li key={item}>
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="cursor-pointer text-slate-600 hover:text-blue-600 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}

                </ul>

                {/* Resume Button */}

                <Button variant="primary">
                    Resume
                </Button>

            </nav>
        </header>
    );
}

export default Navbar;