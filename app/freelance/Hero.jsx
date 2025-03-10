const Hero = () => {
    return (
      <div className="w-full min-h-screen bg-gradient-to-r from-black to-blue-900  flex items-center justify-center px-4">

        <div className="text-center max-w-6xl">
          <h2 className="text-3xl md:text-6xl font-extrabold leading-snug md:leading-tight text-white">
            <span className="text-blue-700">Making Freelancing Mainstream</span > – as Seamless,{" "}
            <span className="font-bold text-white">Stable, and Secure</span> as a{" "}
            <span className="text-blue-600">Full-Time Job</span>
          </h2>
          <p className="text-gray-400 mt-4 text-2xl font-bold ">
            Get hired faster, collaborate effortlessly, and receive escrow-protected payments—
            all in one platform.
          </p>
          
    <button className="mt-8 px-12 py-4 text-lg font-bold rounded-full 
      bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl 
      hover:from-blue-500 hover:to-purple-500 hover:shadow-blue-400/50 
      transition-all duration-300 transform hover:scale-110 animate-pulse">
      ✨ Get Hired
    </button>

        </div>
      </div>
    );
  };
  
  export default Hero;
  