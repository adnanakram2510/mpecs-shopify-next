const detailsHero = () => {
  return (
    <div className="content-fit grid text-black md:grid-cols-5">
      <div
        className="content-fit h-80 bg-cover bg-center bg-no-repeat md:col-span-2 md:h-full"
        style={{ backgroundImage: "url('/watch-strap-3.jpg')" }}
      >
        <div className="flex h-full items-center justify-center">
          <div>
            {/* <h1 className="text-2xl font-bold text-white bg-black bg-opacity-30 leading-tight">
                                    Fine jewelry designed to be worthy of those who wear it
                                </h1> */}
          </div>
        </div>
      </div>
      <div className="content-fit bg-white md:col-span-3 md:grid md:grid-rows-2">
        <div className="p-10 md:p-20">
          <h2 className="mb-6 flex justify-center text-2xl font-bold md:text-5xl">
            Unique Craftmanship
          </h2>
          <p className="mb-6 flex justify-center text-lg font-light md:text-justify md:text-3xl">
            We can count on over 4 decades working experience and the highly specialised
            craftmanship, this is why we are proud to have a highly efficient production rate which
            makes our straps amongst the best on the market for price to quality ratio.
            <br /> <br />
          </p>
        </div>
        <div className="w-full">
          <img src="/watch-strap-4.jpg" className="" />
        </div>
      </div>
    </div>
  );
};

export default detailsHero;
