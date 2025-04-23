import { faMoon } from "@fortawesome/free-regular-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-regular-svg-icons/faSun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ||
            (!localStorage.getItem("theme") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches),
    );

    const toggleTheme = () => {
        if (darkMode) {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        setDarkMode(!darkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className={`relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors duration-300 ${
                darkMode ? "bg-blue-800" : "bg-blue-400"
            }`}
        >
            <span
                className={`inline-flex h-4 w-4 transform items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
                    darkMode ? "translate-x-6" : "translate-x-1"
                }`}
            >
                {darkMode ? (
                    <FontAwesomeIcon
                        icon={faMoon}
                        className="h-3 w-3 text-blue-800"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faSun}
                        className="h-3 w-3 text-yellow-500"
                    />
                )}
            </span>
        </button>
    );
};

export default ToggleDarkMode;
