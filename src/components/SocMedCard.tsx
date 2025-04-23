import { ReactNode } from "react";

const SocMedCard = ({
    icon,
    text,
    link,
}: {
    icon: ReactNode;
    text: string;
    link?: string;
}) => {
    const CardContent = () => (
        <div className="flex items-center gap-4 rounded-lg bg-white p-4 transition-all duration-300 hover:shadow-md dark:bg-[var(--dark-accent)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary-blue)]/10 text-[var(--primary-blue)]">
                {icon}
            </div>
            <div className="text-[var(--light-text)] dark:text-[var(--dark-text)]">
                {text}
            </div>
        </div>
    );

    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline"
            >
                <CardContent />
            </a>
        );
    }

    return <CardContent />;
};

export default SocMedCard;
