const BackToTopButton = () => {
  return (
    <div className="flex items-center gap-4">
      <p>Back to top</p>
      <div className="flex size-12 items-center justify-center rounded-full bg-white p-4 hover:cursor-pointer">
        &uarr;
      </div>
    </div>
  );
};

export default BackToTopButton;
