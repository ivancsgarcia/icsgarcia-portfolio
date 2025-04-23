import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SoftSkill = ({ skill }: { skill: string }) => {
    return (
        <div className="flex items-center rounded-lg p-2 transition-all duration-300 hover:bg-white/50 dark:hover:bg-[var(--dark-accent)]/30">
            <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)]">
                <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <span className="text-[var(--light-text)] dark:text-[var(--dark-text)]">
                {skill}
            </span>
        </div>
    );
};

export default SoftSkill;
