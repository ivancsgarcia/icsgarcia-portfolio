import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageCarousel from "./ImageCarousel";

const Project = ({
    name,
    images,
    desc,
    features,
    technologies,
    liveUrl,
    repoUrl,
    reverse = false,
}: {
    name: string;
    images: string[];
    desc: string;
    features: string[];
    technologies: string[];
    liveUrl?: string;
    repoUrl: string;
    reverse?: boolean;
}) => {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-[var(--dark-secondary)] dark:shadow-[var(--dark-accent)]/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                    className={`relative h-64 md:h-full ${
                        reverse ? "md:order-last" : "md:order-first"
                    }`}
                >
                    <ImageCarousel images={images} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-20"></div>
                </div>

                <div
                    className={`flex flex-col p-6 ${reverse ? "md:order-first" : "md:order-last"}`}
                >
                    <h3 className="mb-3 text-2xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                        {name}
                    </h3>
                    <p className="mb-4 text-[var(--light-text)]/80 dark:text-[var(--dark-text)]/80">
                        {desc}
                    </p>

                    {features && features.length > 0 && (
                        <div className="mb-4">
                            <h4 className="mb-2 font-medium text-[var(--primary-blue)]">
                                Key Features
                            </h4>
                            <ul className="ml-5 list-disc space-y-1 text-sm text-[var(--light-text)]/80 dark:text-[var(--dark-text)]/80">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {technologies && technologies.length > 0 && (
                        <div className="mt-auto mb-6">
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-[var(--primary-blue)]/10 px-3 py-1 text-xs font-medium text-[var(--primary-blue)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-auto flex space-x-3">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center rounded-lg bg-[var(--primary-blue)] px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--primary-blue-hover)]"
                            >
                                <FontAwesomeIcon
                                    icon={faExternalLinkAlt}
                                    className="mr-2"
                                />
                                Live Demo
                            </a>
                        )}
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center rounded-lg border border-[var(--primary-blue)] px-4 py-2 text-sm font-medium text-[var(--primary-blue)] transition-colors duration-300 hover:bg-[var(--primary-blue)]/5"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="mr-2"
                                />
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
