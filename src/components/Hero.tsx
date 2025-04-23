import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../assets/images/avatar.webp";
import { motion } from "motion/react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";

const Hero = () => {
    return (
        <div
            id="home"
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--light-bg)] to-[var(--light-accent)] px-4 md:flex-row dark:from-[var(--dark-bg)] dark:to-[var(--dark-secondary)]"
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--primary-blue)] opacity-10 blur-3xl dark:opacity-20"></div>
                <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[var(--primary-blue)] opacity-10 blur-3xl dark:opacity-20"></div>
            </div>

            <div className="z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col text-center md:text-left"
                >
                    <p className="mb-2 text-sm font-medium tracking-wider text-[var(--primary-blue)] uppercase">
                        Hello, I'm
                    </p>
                    <h1 className="mb-3 text-4xl font-bold text-[var(--light-text)] md:text-5xl lg:text-6xl dark:text-[var(--dark-text)]">
                        Ivan Christopher Garcia
                    </h1>
                    <h2 className="mb-6 text-xl font-medium text-[var(--primary-blue)] md:text-2xl">
                        Web Developer
                    </h2>
                    <p className="mb-8 max-w-xl text-gray-700 dark:text-[var(--dark-text)]/80">
                        Passionate about building user-friendly web applications
                        while growing as a developer every step of the way.
                    </p>
                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a
                            href="#about"
                            className="flex items-center justify-center rounded-lg bg-[var(--primary-blue)] px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-[var(--primary-blue-hover)] hover:shadow-lg dark:bg-[var(--primary-blue)] dark:hover:bg-[var(--primary-blue-hover)]"
                        >
                            Learn About Me
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center justify-center rounded-lg border-2 border-[var(--primary-blue)] bg-transparent px-6 py-3 font-medium text-[var(--primary-blue)] transition-all duration-300 hover:bg-[var(--light-accent)] dark:border-[var(--primary-blue)] dark:text-[var(--primary-blue)] dark:hover:bg-[var(--dark-accent)]/20"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-[var(--light-bg)] shadow-xl sm:h-80 sm:w-80 md:h-96 md:w-96 dark:border-[var(--primary-blue)]/30">
                        <img
                            src={Avatar}
                            alt="Ivan Christopher Garcia"
                            className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 rounded-full shadow-inner"></div>
                    </div>
                </motion.div>
            </div>

            <a href="#about">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center"
                >
                    <p className="mb-2 text-sm text-[var(--light-text)]/70 dark:text-[var(--dark-text)]/70">
                        Scroll down
                    </p>
                    <div className="h-6 w-1 animate-bounce">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                </motion.div>
            </a>
        </div>
    );
};

export default Hero;
