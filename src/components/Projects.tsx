import Project from "./Project";
import { motion } from "motion/react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-[var(--light-accent)] px-4 py-16 dark:bg-[var(--dark-bg)]"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-2 inline-block border-b-4 border-[var(--primary-blue)] pb-1 text-3xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                        Projects
                    </h2>
                    <p className="mt-4 text-center text-[var(--light-text)]/70 dark:text-[var(--dark-text)]/70">
                        Here are some of my recent projects I've worked on
                    </p>
                </motion.div>

                <div className="flex flex-col space-y-16">
                    {projectsData.map((projects, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Project {...projects} reverse={index % 2 === 1} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
