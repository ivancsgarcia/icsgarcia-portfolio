const Project = ({
    name,
    image,
    desc,
    features,
}: {
    name: string;
    image: string;
    desc: string;
    features: string;
}) => {
    return (
        <div className="flex flex-col justify-center lg:flex-row lg:gap-4">
            <div className="mx-auto mb-4 block lg:hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-[400px] w-[600px] border"
                />
            </div>
            <div className="lg:w-1/2 lg:px-8">
                <p className="mb-4 text-center text-lg font-bold">{name}</p>
                <p className="mb-4 text-justify">{desc}</p>
                <p className="font-bold">Features: </p>
                <p className="mb-8">{features}</p>
                <div className="flex items-center justify-center gap-4">
                    <a
                        href="https://spoonfed.vercel.app/"
                        target="_blank"
                        className="cursor-pointer border p-2 hover:bg-gray-100 dark:hover:bg-black"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        className="underline hover:text-gray-500"
                    >
                        Github Link
                    </a>
                </div>
            </div>
            <div className="hidden w-1/2 lg:block">
                <img
                    src={image}
                    alt={name}
                    className="h-[400px] w-full border"
                />
            </div>
        </div>
    );
};

export default Project;
