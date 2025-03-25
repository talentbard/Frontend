"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
const offerings = [
  {
    head: "Effortless Hiring Experience",
    title: "Hire & Collaborate with Ease",
    desc: "Effortless On-Demand hiring with pre-vetted talent, on-demand teams, and real-time tracking. Streamline your workflow and boost productivity with our intuitive platform designed for seamless collaboration.",
    image: "/hire-and-collaborate.jpg",
  },
  {
    head: "Streamlined Talent Solutions",
    title: "Flexible & Seamless Solution",
    desc: "Talents enjoy stability with automated client matchmaking and AI-generated contracts. Our platform ensures smooth communication, secure agreements, and hassle-free project execution.",
    image: "/flexible.jpg",
  },
  {
    head: "Secure Payment Handling",
    title: "Escrow Payment Management",
    desc: "Secure, timely payouts while startups invest in high-yield government securities. Protect your earnings and transactions with our transparent and reliable escrow system, ensuring peace of mind for all parties.",
    image: "/escrow-payment-management.jpg",
  },
  {
    head: "Global Payment Simplified",
    title: "Cross-Border Payments",
    desc: "Flat fees, no FX markup, and same-day settlements for freelancers. Get paid instantly with our efficient and cost-effective international payment solutions, eliminating unnecessary delays and fees.",
    image: "/crossborder-payment.jpg",
  },
];

const Offers = () => {
  const router = useRouter();
  return (
    
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-200 to-white">
      {/* Section Title */}
      <div className="text-center">
        <h3 className="text-4xl font-bold mb-2 border-black inline-block px-2">
          What TalentBard Offers
        </h3>
        <p className="text-2xl font-semibold max-w-4xl mx-auto px-4 leading-relaxed">

  
        </p>
      </div>

      {/* Offerings List */}
      <div className="space-y-10 mt-10">
        {offerings.map((offer, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center  gap-10 md:gap-24 w-full min-h-[200px] mx-auto p-4 md:p-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-4 md:px-10">
              <h4 className="font-bold text-3xl text-blue-600">{offer.head}</h4>
              <h4 className="font-bold text-4xl text-black">{offer.title}</h4>
              <p className="text-gray-600 mt-2 text-lg font-semibold">{offer.desc}</p>
            </div>

            {/* Image Section with Shadow & Border */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full h-[350px] overflow-hidden rounded-lg border-2 border-gray-300 shadow-lg shadow-gray-400">
                <Image 
                  src={offer.image} 
                  alt={offer.title} 
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col md:flex-row justify-center">
        <button
          onClick={() => router.push("/login/signup")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Get Started
        </button>
        </div>
      </div>
      
    </section>
  );
};

export default Offers;
