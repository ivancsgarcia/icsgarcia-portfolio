import { ReactNode } from "react";

const SocMedCard = ({ icon, text }: { icon: ReactNode; text: string }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-4 text-center shadow-md md:flex-row dark:border dark:border-[#fafafa]">
            <div className="text-xl">{icon}</div>
            <div>{text}</div>
        </div>
    );
};

export default SocMedCard;
