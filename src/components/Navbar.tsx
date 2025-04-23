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
                    ? "bg-[#fafafa] shadow-md dark:bg-[#1a1a1a]"
                    : "bg-transparent"
            } fixed top-0 right-0 left-0 z-50 transition-all duration-300`}
        >
            <div className="flex justify-between p-8 md:justify-around">
                <div>Ivan Garcia</div>
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        <li className="cursor-pointer hover:underline">
                            <a href="#home">Home</a>
                        </li>
                        <li className="cursor-pointer hover:underline">
                            <a href="#about">About</a>
                        </li>
                        <li className="cursor-pointer hover:underline">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="cursor-pointer hover:underline">
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <ToggleDarkMode />
                        </li>
                    </ul>
                </nav>
                <div
                    onClick={() => setOpenMenu(!openMenu)}
                    className="block cursor-pointer md:hidden"
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            {openMenu && (
                <nav className="bg-gray-50 md:hidden dark:bg-[#1a1a1a] dark:text-[#fafafa]">
                    <ul className="flex flex-col text-center">
                        <li className="p-4">
                            <a
                                href="#home"
                                className="cursor-pointer hover:underline"
                            >
                                Home
                            </a>
                        </li>
                        <li className="p-4">
                            <a
                                href="#about"
                                className="cursor-pointer hover:underline"
                            >
                                About
                            </a>
                        </li>
                        <li className="p-4">
                            <a
                                href="#projects"
                                className="cursor-pointer hover:underline"
                            >
                                Projects
                            </a>
                        </li>
                        <li className="p-4">
                            <a
                                href="#contact"
                                className="cursor-pointer hover:underline"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
