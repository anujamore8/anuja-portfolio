import { Link } from "react-scroll";
import portfolioData from "../../data/portfolioData";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                <h1 className="text-2xl font-bold text-blue-600">
                    {portfolioData.personal.name}
                </h1>

                <ul className="hidden md:flex gap-8">

                    {portfolioData.navigation.map((item) => (
                        <li key={item}>
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-slate-700 hover:text-blue-600 font-medium"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </li>
                    ))}

                </ul>

            </nav>
        </header>
    );
}

export default Navbar;