import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };
    const nextSlide = () => {
        const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };
    return (
        <div className="relative z-10 mx-auto h-full w-full max-w-3xl">
            <div className="h-full overflow-hidden rounded-lg shadow-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="h-full w-full object-center"
                />
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-[var(--primary-blue)] p-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--primary-blue-hover)]"
                aria-label="Previous Slide"
            >
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-[var(--primary-blue)] p-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[var(--primary-blue-hover)]"
                aria-label="Next Slide"
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-3 w-3 rounded-full ${currentIndex === idx ? "bg-blue-500" : "bg-gray-300"}`}
                        aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
