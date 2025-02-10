const Hero = () => {
  return (
    <div
      className="h-[34vw] w-[90%] md:max-w-6xl mx-auto rounded-xl
    bg-custom-image bg-cover bg-center relative  shadow-sm border-2 border-black"
    >
      <div
        className="absolute flex flex-col items-start gap-1.5vw
     max-w-[50%] bottom-[10%] left-[6vw] text-black  "
      >
        <h2 className=" rounded-lg  text-lg md:text-2xl font-semibold bg-white px-1 md:bg-transparent">
          Order Delicious Cake here
        </h2>
        <p className=" text-base md:text-normal font-normal flex-1 hidden md:flex">
          Choose from a variety of flavors and designs to make your celebrations
          special. Order now and enjoy!
        </p>
     
        <button
          className="btn btn-default rounded-full btn-sm
       waves waves-light md:btn-md mt-2 bg-black  text-white hover:bg-black  hover:text-pink-400 border-0"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Hero;
