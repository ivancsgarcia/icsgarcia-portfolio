import { ReactNode } from "react";

const TechStackItem = ({ icon, name }: { icon: ReactNode; name: string }) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-[var(--dark-accent)]/40 dark:shadow-[var(--dark-accent)]/5">
            <div className="mb-2 text-4xl">{icon}</div>
            <p className="text-center text-sm font-medium text-[var(--light-text)] dark:text-[var(--dark-text)]">
                {name}
            </p>
        </div>
    );
};

export default TechStackItem;
