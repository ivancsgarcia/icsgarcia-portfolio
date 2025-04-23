const BackToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex items-center gap-1">
            <p>Back to top</p>
            <div
                onClick={scrollToTop}
                className="flex size-12 cursor-pointer items-center justify-center rounded-full border p-4 hover:bg-gray-200 dark:bg-[#1a1a1a] dark:text-[#fafafa] dark:hover:bg-black"
            >
                &uarr;
            </div>
        </div>
    );
};

export default BackToTopButton;
