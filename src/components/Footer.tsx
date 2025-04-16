import BackToTopButton from "./BackToTopButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative bg-gray-100 p-12">
      <div className="absolute top-12 right-12">
        <BackToTopButton />
      </div>
      <div>&#169; {currentYear}</div>
      <div className="py-12">
        <p className="uppercase">Have a project in mind?</p>
        <p className="text-9xl uppercase opacity-20">Let's Talk</p>
      </div>
      <div className="flex gap-4">
        <div className="rounded-full border px-4 py-2 tracking-wider uppercase">
          LinkedIn
        </div>
        <div className="rounded-full border px-4 py-2 tracking-wider uppercase">
          github
        </div>
      </div>
    </div>
  );
};

export default Footer;
