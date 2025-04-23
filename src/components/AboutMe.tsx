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

const AboutMe = () => {
    return (
        <div
            id="about"
            className="flex min-h-screen flex-col space-y-8 px-4 py-8 lg:mx-auto lg:w-1/2 lg:py-[100px]"
        >
            <h1 className="text-center text-xl font-bold">About Me</h1>
            <div className="flex flex-col space-y-4 text-justify">
                <p className="text-lg font-bold">Hello!</p>
                <p>
                    My name is Ivan Christopher S. Garcia. I’m 22 years old and
                    from the Philippines. I’m currently a 4th-year Bachelor of
                    Science in Information Technology student at the University
                    of the Assumption.
                </p>
                <p>
                    Since I was a child, I’ve always been fascinated by
                    technology. I loved playing games, exploring how devices
                    worked, and trying to fix them whenever they malfunctioned.
                    I also enjoyed browsing well-designed websites, which
                    sparked my curiosity even more.
                </p>
                <p>
                    That curiosity led me to pursue IT as my course—and now, I
                    genuinely enjoy solving tech-related problems and growing as
                    a programmer.
                </p>
            </div>
            <div className="">
                <h2 className="mb-2 text-lg font-bold">Education:</h2>
                <div className="">
                    <p className="font-bold">
                        Bachelor of Science in Information Technology
                    </p>
                    <p>University of the Assumption </p>
                    <p>August 2021 - 2025</p>
                </div>
            </div>
            <div className="">
                <h2 className="mb-2 text-lg font-bold">Soft Skills:</h2>
                <ul className="italic">
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
            </div>
            <div className="">
                <h2 className="mb-2 text-lg font-bold">Tech Stack:</h2>
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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
        </div>
    );
};

export default AboutMe;
