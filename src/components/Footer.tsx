import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--light-border)] bg-[var(--light-bg)] px-6 py-8 dark:border-[var(--dark-border)] dark:bg-[var(--dark-bg)]">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="text-center md:text-left">
                        <h3 className="mb-2 text-xl font-bold text-[var(--primary-blue)]">
                            Ivan Garcia
                        </h3>
                        <p className="text-sm text-[var(--light-text)]/70 dark:text-[var(--dark-text)]/70">
                            Web Developer
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 text-[var(--light-text)] transition-colors duration-300 hover:text-[var(--primary-blue)] dark:text-[var(--dark-text)] dark:hover:text-[var(--primary-blue)]"
                        >
                            <FontAwesomeIcon icon={faFileAlt} />
                            <span>Resume</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/ivancsgarcia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[var(--light-text)] transition-colors duration-300 hover:text-[var(--primary-blue)] dark:text-[var(--dark-text)] dark:hover:text-[var(--primary-blue)]"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/ivancsgarcia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[var(--light-text)] transition-colors duration-300 hover:text-[var(--primary-blue)] dark:text-[var(--dark-text)] dark:hover:text-[var(--primary-blue)]"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span>Github</span>
                        </a>
                    </div>
                </div>

                <div className="my-6 h-px w-full bg-[var(--light-border)] dark:bg-[var(--dark-border)]"></div>

                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
                    <p className="text-sm text-[var(--light-text)]/70 dark:text-[var(--dark-text)]/70">
                        &copy; {currentYear} Ivan Garcia. All rights reserved.
                    </p>

                    <p className="flex items-center gap-2 text-sm text-[var(--light-text)]/70 dark:text-[var(--dark-text)]/70">
                        Built with
                        <FontAwesomeIcon
                            icon={faMugHot}
                            className="text-[var(--primary-blue)]"
                        />
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="text-red-500"
                        />
                        and
                        <FontAwesomeIcon
                            icon={faReact}
                            className="animate-spin-slow text-[var(--primary-blue)]"
                        />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
