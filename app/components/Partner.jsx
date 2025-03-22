import Image from "next/image";

const Partner = () => {
  return (
    <section className="bg-white text-black pt-12">
      {/* Partner Section */}
      <div className="w-full flex flex-col items-center justify-center py-12 gap-8">
        {/* Header */}
        <h3 className="text-3xl font-bold text-blue-600 text-center">
          Our Trusted Partner
        </h3>

        {/* Partner Image with Shadow */}
        <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex justify-center items-center rounded-lg shadow-xl p-6 bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <Image
            src="/Images/Partner1.jpg"
            alt="Partner 1"
            width={200}
            height={200}
            className="object-contain shadow-lg md:shadow-xl lg:shadow-2xl"
          />
        </div>
      </div>

      {/* Information Section */}
      <div className="w-full flex flex-col items-center justify-center mt-12 py-16 bg-gradient-to-t from-blue-200 to-white">
        <div className="w-full max-w-5xl text-center px-4 md:px-0">
          <h3 className="text-2xl md:text-4xl font-bold text-black">
            One-Stop Solution for Startups to Hire, Collaborate & Pay Freelancers
          </h3>
          <p className="text-gray-700 mt-4 text-lg md:text-xl font-medium leading-relaxed">
            Unlock skilled, reliable & budget-friendly talent without the hassle of traditional hiring.
            Designed for startups and powered by top professionals.
          </p>
        </div>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Partner;
