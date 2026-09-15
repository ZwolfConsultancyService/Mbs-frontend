import { Link } from "react-router-dom";
import doctorImage from "../assets/Doctor/drpawan.jpeg";

const DoctorSection = () => {
  return (
    <section className="bg-[#FAF7F9] px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">

        {/* Doctor Image */}
        <div className="relative">

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm sm:rounded-3xl">
            <img
              src={doctorImage}
              alt="Dr. Pawan Srivastava"
              className="h-[360px] w-full object-contain sm:h-[440px] md:h-[520px]"
            />
          </div>

          {/* MBS Card */}
          <div className="absolute -bottom-4 right-3 rounded-xl bg-[#252525] px-5 py-3.5 shadow-xl sm:-bottom-5 sm:right-5 sm:rounded-2xl sm:px-6 sm:py-5">
            <p className="text-xl font-bold text-white sm:text-2xl">
              MBS
            </p>

            <p className="mt-0.5 text-xs text-white/60 sm:mt-1 sm:text-sm">
              Mind Body Soul
            </p>
          </div>

        </div>

        {/* Content */}
        <div>

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#AE2580] sm:text-sm sm:tracking-[0.2em]">
            Meet Your Doctor
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#252525] sm:mt-4 sm:text-4xl md:text-5xl">
            Dr. Pawan
            <br />
            <span className="text-[#AE2580]">Srivastava</span>
          </h2>

          <p className="mt-3 text-base font-semibold text-[#252525] sm:mt-4 sm:text-lg">
            Chiropractor & Spine Specialist
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600 sm:mt-5 sm:text-base sm:leading-7">
            Every patient is different, and so is every condition. Our focus
            is on understanding your symptoms, assessing your individual needs
            and developing a personalised approach to care.
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
            The aim is to support better movement, comfort and overall
            well-being through a thoughtful, assessment-led approach.
          </p>

          {/* Approach */}
          <div className="mt-5 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-4">

            <div className="rounded-xl bg-white p-3.5 sm:rounded-2xl sm:p-5">
              <span className="text-lg font-bold text-[#AE2580] sm:text-xl">
                01
              </span>

              <p className="mt-1.5 text-xs font-semibold text-[#252525] sm:mt-2 sm:text-sm">
                Understand
              </p>
            </div>

            <div className="rounded-xl bg-white p-3.5 sm:rounded-2xl sm:p-5">
              <span className="text-lg font-bold text-[#AE2580] sm:text-xl">
                02
              </span>

              <p className="mt-1.5 text-xs font-semibold text-[#252525] sm:mt-2 sm:text-sm">
                Assess
              </p>
            </div>

            <div className="rounded-xl bg-white p-3.5 sm:rounded-2xl sm:p-5">
              <span className="text-lg font-bold text-[#AE2580] sm:text-xl">
                03
              </span>

              <p className="mt-1.5 text-xs font-semibold text-[#252525] sm:mt-2 sm:text-sm">
                Personalise
              </p>
            </div>

          </div>

          {/* Button */}
          <Link
            to="/about"
            className="mt-6 inline-flex rounded-xl bg-[#AE2580] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8E1E68] sm:mt-8 sm:px-7 sm:py-3.5 sm:text-base"
          >
            Know More About Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default DoctorSection;