import { ReactNode } from "react";

const TechStackItem = ({ icon, name }: { icon: ReactNode; name: string }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-6xl">{icon}</div>
            <p>{name}</p>
        </div>
    );
};

export default TechStackItem;
