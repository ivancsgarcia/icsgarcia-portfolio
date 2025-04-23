import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faMugHot } from "@fortawesome/free-solid-svg-icons/faMugHot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t px-4 py-8 text-center">
            <div className="mb-8">
                <ul className="flex flex-col justify-center gap-4 lg:flex-row">
                    <li className="cursor-pointer hover:underline">Resume</li>
                    <li className="cursor-pointer hover:underline">LinkedIn</li>
                    <li className="cursor-pointer hover:underline">Github</li>
                </ul>
            </div>
            <div>
                <p className="">
                    &copy; {currentYear} Ivan Garcia. Built with{" "}
                    <FontAwesomeIcon icon={faMugHot} className="text-xl" />,{" "}
                    <FontAwesomeIcon icon={faHeart} className="text-xl" /> and{" "}
                    <FontAwesomeIcon icon={faReact} className="text-xl" />.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
