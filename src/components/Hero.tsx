import Avatar from "../assets/images/avatar.webp";

const Hero = () => {
    return (
        <div
            id="home"
            className="flex h-screen flex-col items-center justify-center px-4 md:flex-row"
        >
            <div className="block md:hidden">
                <img src={Avatar} alt="my-photo" />
            </div>
            <div className="flex flex-col">
                <p className="text-center text-xl font-bold">
                    Ivan Christopher Garcia
                </p>
                <p className="text-center text-lg">Developer</p>
                <p className="text-justify">
                    Passionate about building user-friendly web applications
                    while growing as a developer every step of the way.
                </p>
                <div className="mx-auto mt-8 flex gap-4">
                    <button className="cursor-pointer border p-4 hover:bg-gray-100 dark:hover:bg-black">
                        Learn about me
                    </button>
                    <button className="cursor-pointer border p-4 hover:bg-gray-100 dark:hover:bg-black">
                        Download Resume
                    </button>
                </div>
            </div>
            <div className="hidden md:block">
                <img src={Avatar} alt="my-photo" />
            </div>
        </div>
    );
};

export default Hero;
