import TechStackItem from "./TechStackItem";
import SoftSkill from "./SoftSkill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faVuejs } from "@fortawesome/free-brands-svg-icons/faVuejs";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faGit } from "@fortawesome/free-brands-svg-icons/faGit";
import { faPhp } from "@fortawesome/free-brands-svg-icons/faPhp";
import { faLaravel } from "@fortawesome/free-brands-svg-icons/faLaravel";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faUserGear } from "@fortawesome/free-solid-svg-icons/faUserGear";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { motion } from "motion/react";

const AboutMe = () => {
    return (
        <section
            id="about"
            className="bg-[var(--light-bg)] px-4 py-16 dark:bg-[var(--dark-bg)]"
        >
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-2 inline-block border-b-4 border-[var(--primary-blue)] pb-1 text-3xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                        About Me
                    </h2>
                </motion.div>

                <div className="flex flex-col space-y-10">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-xl bg-[var(--light-accent)] p-6 shadow-md dark:bg-[var(--dark-secondary)] dark:shadow-[var(--dark-accent)]/10"
                    >
                        <div className="flex flex-col space-y-4 text-[var(--light-text)] dark:text-[var(--dark-text)]">
                            <p className="text-xl font-bold text-[var(--primary-blue)]">
                                Hello!
                            </p>
                            <p>
                                My name is Ivan Christopher S. Garcia. I'm 22
                                years old and from the Philippines. I'm
                                currently a 4th-year Bachelor of Science in
                                Information Technology student at the University
                                of the Assumption.
                            </p>
                            <p>
                                Since I was a child, I've always been fascinated
                                by technology. I loved playing games, exploring
                                how devices worked, and trying to fix them
                                whenever they malfunctioned. I also enjoyed
                                browsing well-designed websites, which sparked
                                my curiosity even more.
                            </p>
                            <p>
                                That curiosity led me to pursue IT as my
                                course—and now, I genuinely enjoy solving
                                tech-related problems and growing as a
                                programmer.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-4 flex items-center">
                            <FontAwesomeIcon
                                icon={faGraduationCap}
                                className="mr-3 text-2xl text-[var(--primary-blue)]"
                            />
                            <h2 className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                                Education
                            </h2>
                        </div>
                        <div className="ml-10 rounded-lg border-l-4 border-[var(--primary-blue)] bg-[var(--light-accent)] p-4 pl-6 dark:bg-[var(--dark-secondary)]">
                            <p className="text-lg font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                                Bachelor of Science in Information Technology
                            </p>
                            <p className="text-[var(--light-text)]/80 dark:text-[var(--dark-text)]/80">
                                University of the Assumption
                            </p>
                            <p className="mt-1 inline-block rounded-full bg-[var(--primary-blue)]/10 px-3 py-1 text-sm text-[var(--primary-blue)]">
                                August 2021 - 2025
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 flex items-center">
                                <FontAwesomeIcon
                                    icon={faUserGear}
                                    className="mr-3 text-2xl text-[var(--primary-blue)]"
                                />
                                <h2 className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                                    Soft Skills
                                </h2>
                            </div>
                            <ul className="space-y-2 rounded-lg bg-[var(--light-accent)] p-4 dark:bg-[var(--dark-secondary)]">
                                <li>
                                    <SoftSkill skill="Clear communicator" />
                                </li>
                                <li>
                                    <SoftSkill skill="Team player" />
                                </li>
                                <li>
                                    <SoftSkill skill="Problem solver" />
                                </li>
                                <li>
                                    <SoftSkill skill="Adaptable mindset" />
                                </li>
                                <li>
                                    <SoftSkill skill="Curious and proactive" />
                                </li>
                                <li>
                                    <SoftSkill skill="Responsible and reliable" />
                                </li>
                                <li>
                                    <SoftSkill skill="Open to feedback" />
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 flex items-center">
                                <FontAwesomeIcon
                                    icon={faCode}
                                    className="mr-3 text-2xl text-[var(--primary-blue)]"
                                />
                                <h2 className="text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                                    Tech Stack
                                </h2>
                            </div>
                            <div className="rounded-lg bg-[var(--light-accent)] p-4 dark:bg-[var(--dark-secondary)]">
                                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faHtml5}
                                                    className="text-orange-700"
                                                />
                                            }
                                            name="HTML"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faCss3Alt}
                                                    className="text-blue-500"
                                                />
                                            }
                                            name="CSS"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faJs}
                                                    className="text-yellow-400"
                                                />
                                            }
                                            name="JAVASCRIPT"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faJs}
                                                    className="text-blue-400"
                                                />
                                            }
                                            name="TYPESCRIPT"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faReact}
                                                    className="text-cyan-400"
                                                />
                                            }
                                            name="REACTJS"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faVuejs}
                                                    className="text-green-800"
                                                />
                                            }
                                            name="VUEJS"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faNodeJs}
                                                    className="text-green-900"
                                                />
                                            }
                                            name="NODEJS"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faLaravel}
                                                    className="text-red-600"
                                                />
                                            }
                                            name="LARAVEL"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faPhp}
                                                    className="text-violet-400"
                                                />
                                            }
                                            name="PHP"
                                        />
                                    </li>
                                    <li>
                                        <TechStackItem
                                            icon={
                                                <FontAwesomeIcon
                                                    icon={faGit}
                                                    className="text-orange-700"
                                                />
                                            }
                                            name="GIT"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
