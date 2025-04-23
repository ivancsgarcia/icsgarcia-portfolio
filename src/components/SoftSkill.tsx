import { faSquareCheck } from "@fortawesome/free-solid-svg-icons/faSquareCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SoftSkill = ({ skill }: { skill: string }) => {
    return (
        <div className="flex items-center gap-2 text-xl">
            <FontAwesomeIcon icon={faSquareCheck} />
            <p className="text-base">{skill}</p>
        </div>
    );
};

export default SoftSkill;
