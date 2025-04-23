import { useEffect } from "react";

const useDarkMode = () => {
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);
};

export default useDarkMode;
