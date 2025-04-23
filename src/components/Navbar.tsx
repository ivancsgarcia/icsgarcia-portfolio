import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header
            className={`${
                isScrolled
                    ? "bg-white shadow-md dark:bg-[var(--dark-secondary)]"
                    : "bg-transparent"
            } fixed top-0 right-0 left-0 z-50 transition-all duration-300`}
        >
            <div className="flex justify-between p-6 md:justify-around">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    Ivan Garcia
                </div>
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        <li className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                            <a href="#home">Home</a>
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                            <a href="#about">About</a>
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <ToggleDarkMode />
                        </li>
                    </ul>
                </nav>
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className="block cursor-pointer text-gray-700 hover:text-blue-600 md:hidden dark:text-gray-300 dark:hover:text-blue-400"
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            {openMenu && (
                <nav className="bg-white shadow-md md:hidden dark:bg-[var(--dark-secondary)]">
                    <ul className="flex flex-col text-center">
                        <li className="border-b border-gray-100 p-4 dark:border-gray-700">
                            <a
                                href="#home"
                                className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                Home
                            </a>
                        </li>
                        <li className="border-b border-gray-100 p-4 dark:border-gray-700">
                            <a
                                href="#about"
                                className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                About
                            </a>
                        </li>
                        <li className="border-b border-gray-100 p-4 dark:border-gray-700">
                            <a
                                href="#projects"
                                className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                Projects
                            </a>
                        </li>
                        <li className="p-4">
                            <a
                                href="#contact"
                                className="cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="flex justify-center p-4">
                            <ToggleDarkMode />
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
