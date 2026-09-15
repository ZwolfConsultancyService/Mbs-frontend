import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-[#FAF7F9] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-2xl bg-[#252525] px-5 py-10 sm:rounded-[30px] sm:px-8 sm:py-12 md:rounded-[36px] md:px-16 md:py-16">

          {/* Decorative Circle */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#AE2580]/20 sm:-right-24 sm:-top-24 sm:h-72 sm:w-72" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-10">

            {/* Content */}
            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#AE2580] sm:text-sm sm:tracking-[0.2em]">
                Take The Next Step
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:mt-5 md:text-5xl">
                Let's Understand Your
                <br />
                <span className="text-[#AE2580]">
                  Condition Together
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-white/65 sm:mt-5 sm:text-base sm:leading-7 md:mt-6 md:text-lg md:leading-8">
                Start with an assessment and understand the available care
                options based on your individual needs.
              </p>

              {/* Doctor */}
              <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#AE2580] text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
                  Dr
                </div>

                <div>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Dr. Pawan Srivastava
                  </p>

                  <p className="mt-0.5 text-xs text-white/50 sm:text-sm">
                    Chiropractor & Spine Specialist
                  </p>
                </div>

              </div>

            </div>

            {/* Button */}
            <div className="relative">

              <Link
                to="/appointment"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#AE2580] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-[#8E1E68] hover:shadow-xl sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
              >
                Book Appointment
                <span className="text-lg sm:text-xl">→</span>
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTASection;