import SpoonfedImage from "../assets/images/spoonfed.png";
import UActTrackImage from "../assets/images/UActTrack-logo.png";

export const projectsData = [
    {
        images: [SpoonfedImage, UActTrackImage, SpoonfedImage, UActTrackImage],
        name: "Spoonfed",
        desc: "Spoonfed is a modern recipe and cookbook platform where food lovers can discover, save, and share delicious meals. Whether you're a home cook or a culinary explorer, Spoonfed brings inspiration to your kitchen with handpicked recipes, smart search tools, and a supportive food-loving community.",
        features: [
            "Recipe discovery and sharing",
            "Personal cookbook collections",
            "Interactive cooking guides",
            "Community ratings and reviews",
        ],
        technologies: ["React", "Typescript", "Node.js", "MongoDB", "Express"],
        liveUrl: "https://spoonfed.vercel.app/",
        repoUrl: "https://github.com/ivancsgarcia/spoonfed",
    },
    {
        images: [UActTrackImage, SpoonfedImage, UActTrackImage, SpoonfedImage],
        name: "UActTrack",
        desc: "UActTrack is a comprehensive university activity tracking system designed to help administrators, faculty, and students manage and participate in campus activities. The platform streamlines event organization, attendance tracking, and participation certification.",
        features: [
            "Event management dashboard",
            "QR-based attendance tracking",
            "Activity certificates generation",
            "Analytics and reporting tools",
        ],
        technologies: ["Vue", "Laravel", "mySQL"],
        liveUrl: "",
        repoUrl: "https://github.com/",
    },
];
