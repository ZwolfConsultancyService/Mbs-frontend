
import { Link } from "react-router-dom";
import doctorImage from "../assets/Doctor/drpawan.jpeg";

const Hero = () => {
  return (
    <section className="bg-[#FAF7F9]">

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 md:min-h-[600px] md:grid-cols-2 md:gap-12 md:py-20">

        {/* Left Content */}
        <div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#AE2580] sm:mb-4 sm:text-base">
            Chiropractor & Pain Specialist
          </p>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-[#252525] sm:text-4xl md:mb-6 md:text-6xl">
            MBS
            <br />
            Chiropractic Centre
          </h1>

          <p className="mb-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 md:mb-8">
            

           Personalised care to relieve pain, restore movement, and help you live a healthier, more active life.

          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

            {/* Book Appointment */}
            <Link
              to="/appointment"
              className="rounded-lg bg-[#AE2580] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#8E1E68] sm:px-6"
            >
              Book Appointment
            </Link>

            {/* Explore Treatments */}
            <Link
              to="/treatments"
              className="rounded-lg border-2 border-[#AE2580] px-5 py-3 text-center font-semibold text-[#AE2580] transition hover:bg-[#AE2580] hover:text-white sm:px-6"
            >
              Explore Treatments
            </Link>

          </div>

        </div>


        {/* Doctor Image */}
        <div className="flex h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-[#F5E8F0] shadow-sm sm:h-[450px] sm:rounded-3xl md:h-[500px]">

          <img
            src={doctorImage}
            alt="Dr. Pawan Srivastava"
            className="h-full w-full object-contain"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;

