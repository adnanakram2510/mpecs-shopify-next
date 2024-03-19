const jewelleryHero = () => {
  return (
    <div className="relative grid h-[30vh] grid-cols-1 md:h-screen md:grid-cols-2">
      <div className="h-full w-full bg-[url('/watch-strap-1.jpg')] bg-cover bg-left bg-no-repeat md:bg-left"></div>
      <div className="hidden bg-[url('/watch-strap-2.jpg')] bg-right md:block md:bg-cover"></div>
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="md:px-1/2 w-full text-center md:w-full">
          <h1 className="text-md text-shadow text-white md:text-5xl">
            MPECS
            <br />
            WATCH STRAPS
            <br />
            NOW AVAILABLE
          </h1>
          {/* <p className="text-xl text-white mt-6 text-shadow underline underline-offset-4 decoration-1">CHANGING THE DYNAMIC</p> */}
        </div>
      </div>
    </div>
  );
};

export default jewelleryHero;
