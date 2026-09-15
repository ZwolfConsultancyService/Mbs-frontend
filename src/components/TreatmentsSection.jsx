
import { Link } from "react-router-dom";

const TreatmentsSection = () => {
  const treatments = [
    {
      number: "01",
      title: "Sciatica",
      description:
        "Personalised care focused on understanding your symptoms and improving movement.",
    },
    {
      number: "02",
      title: "Slip Disc",
      description:
        "Assessment-led care based on your individual condition and treatment needs.",
    },
    {
      number: "03",
      title: "Back Pain",
      description:
        "A personalised approach to managing discomfort and supporting better mobility.",
    },
    {
      number: "04",
      title: "Frozen Shoulder",
      description:
        "Individualised care focused on symptoms, mobility and your specific needs.",
    },
    {
      number: "05",
      title: "Knee Pain",
      description:
        "Care designed around your condition to support comfortable movement and mobility.",
    },
    {
      number: "06",
      title: "Cervical",
      description:
        "Personalised assessment and care for cervical discomfort and related symptoms.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6">

          <div className="max-w-2xl">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#AE2580] md:mb-4 md:text-sm">
              What We Treat
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#252525] sm:text-4xl md:text-5xl">
              Treatment For Your
              <br />
              <span className="text-[#AE2580]">
                Movement & Comfort
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 md:text-base md:leading-7">
            Every condition is different. Our approach begins with understanding
            your symptoms and individual needs.
          </p>

        </div>


        {/* Treatment Cards */}
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">

          {treatments.map((treatment) => (
            <div
              key={treatment.number}
              className="group relative min-h-[225px] overflow-hidden rounded-[24px] border border-gray-100 bg-[#FAF7F9] p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-[#252525] hover:shadow-2xl sm:min-h-[245px] sm:p-7 lg:min-h-[270px] lg:rounded-[28px] lg:p-8"
            >

              {/* Background Number */}
              <span className="absolute -right-3 -top-7 text-[90px] font-black leading-none text-[#AE2580]/10 transition-all duration-300 group-hover:text-white/5 sm:text-[100px] lg:text-[110px]">
                {treatment.number}
              </span>


              {/* Top */}
              <div className="relative flex items-center justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#AE2580] shadow-sm transition-all duration-300 group-hover:bg-[#AE2580] group-hover:text-white sm:h-11 sm:w-11 lg:h-12 lg:w-12 lg:rounded-2xl">
                  <span className="text-lg sm:text-xl">
                    ✦
                  </span>
                </div>

                <span className="text-xs font-semibold text-gray-400 transition-colors duration-300 group-hover:text-white/40 sm:text-sm">
                  {treatment.number}
                </span>

              </div>


              {/* Content */}
              <div className="relative mt-7 sm:mt-8 lg:mt-10">

                <h3 className="text-xl font-bold text-[#252525] transition-colors duration-300 sm:text-2xl group-hover:text-white">
                  {treatment.title}
                </h3>

                <p className="mt-3 max-w-sm text-xs leading-6 text-gray-500 transition-colors duration-300 sm:mt-4 sm:text-sm sm:leading-7 group-hover:text-white/65">
                  {treatment.description}
                </p>

              </div>


              {/* Arrow */}
              <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm text-[#AE2580] transition-all duration-300 group-hover:border-[#AE2580] group-hover:bg-[#AE2580] group-hover:text-white sm:bottom-6 sm:right-6 sm:h-10 sm:w-10">
                →
              </div>


              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#AE2580] transition-all duration-500 group-hover:w-full" />

            </div>
          ))}

        </div>


        {/* View All Treatments */}
        <div className="mt-8 text-center sm:mt-10 md:mt-12">

          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 rounded-xl bg-[#AE2580] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8E1E68] sm:px-7 sm:py-3.5 sm:text-base"
          >
            View All Treatments
            <span className="text-lg">
              →
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
