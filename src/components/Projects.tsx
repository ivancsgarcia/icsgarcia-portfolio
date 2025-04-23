import Project from "./Project";
import SpoonfedImage from "../assets/images/spoonfed.png";
import UActTrackImage from "../assets/images/UActTrack-logo.png";

const Projects = () => {
    return (
        <div
            id="projects"
            className="flex min-h-screen flex-col space-y-12 px-4 py-8 lg:mx-auto lg:w-3/4 lg:py-[100px]"
        >
            <h1 className="mb-8 text-center text-xl font-bold">Projects</h1>

            <Project
                image={SpoonfedImage}
                name="Spoonfed"
                desc="Spoonfed is a modern recipe and cookbook platform where food lovers can discover, save, and share delicious meals. Whether you're a home cook or a culinary explorer, Spoonfed brings inspiration to your kitchen with handpicked recipes, smart search tools, and a supportive food-loving community."
                features="none atm"
            />
            <Project
                image={UActTrackImage}
                name="UActTrack"
                desc="Spoonfed is a modern recipe and cookbook platform where food lovers can discover, save, and share delicious meals. Whether you're a home cook or a culinary explorer, Spoonfed brings inspiration to your kitchen with handpicked recipes, smart search tools, and a supportive food-loving community."
                features="none atm"
            />
        </div>
    );
};

export default Projects;
