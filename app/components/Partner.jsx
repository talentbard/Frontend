import Image from "next/image";

const Partner = () => {
  return (
    <section className="bg-white text-black py-12 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-10">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
            Our Trusted Partner
          </h3>
          <h3 className="text-xl md:text-3xl font-bold text-black mt-2">
            One-Stop Solution for Startups to Hire, Collaborate & Pay Freelancers
          </h3>
          <p className="text-gray-700 mt-4 text-lg font-medium leading-relaxed">
            Unlock skilled, reliable & in-budget talent without the hassle of traditional hiring - 
            designed for startups and fueled by top talent.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-[304px] h-[304px] flex justify-center items-center rounded-lg shadow-lg p-4 bg-white">
          <Image
            src="/Images/Partner1.jpg"
            alt="Partner 1"
            width={304}
            height={304}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Partner;
