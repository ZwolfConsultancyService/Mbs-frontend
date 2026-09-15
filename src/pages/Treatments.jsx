const Treatments = () => {
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
    {
      number: "07",
      title: "Navel Alignment",
      description:
        "An individualised, assessment-based approach according to your concerns.",
    },
    {
      number: "08",
      title: "Migraine Pain",
      description:
        "Understanding your symptoms first, followed by a personalised care approach.",
    },
    {
      number: "09",
      title: "Headache",
      description:
        "Care tailored around your symptoms and individual treatment requirements.",
    },
    {
      number: "10",
      title: "TMJ Alignment",
      description:
        "Personalised care focused on jaw discomfort, movement and individual treatment needs.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AE2580]">
            Our Treatments
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#252525] md:text-6xl">
            Treatment For Your
            <br />
            <span className="text-[#AE2580]">
              Movement & Comfort
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-gray-500 md:text-lg">
            Every condition is different. Our approach begins with understanding
            your symptoms and individual needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <div
              key={treatment.number}
              className="group relative min-h-[270px] overflow-hidden rounded-[28px] border border-gray-100 bg-[#FAF7F9] p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#252525] hover:shadow-2xl"
            >
              <span className="absolute -right-3 -top-8 text-[110px] font-black leading-none text-[#AE2580]/10 transition-all duration-300 group-hover:text-white/5">
                {treatment.number}
              </span>

              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#AE2580] shadow-sm transition-all duration-300 group-hover:bg-[#AE2580] group-hover:text-white">
                  <span className="text-xl">✦</span>
                </div>

                <span className="text-sm font-semibold text-gray-400 group-hover:text-white/40">
                  {treatment.number}
                </span>
              </div>

              <div className="relative mt-10">
                <h2 className="text-2xl font-bold text-[#252525] transition-colors duration-300 group-hover:text-white">
                  {treatment.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500 transition-colors duration-300 group-hover:text-white/65">
                  {treatment.description}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#AE2580] transition-all duration-300 group-hover:border-[#AE2580] group-hover:bg-[#AE2580] group-hover:text-white">
                →
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#AE2580] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-[32px] bg-[#252525] px-8 py-10 md:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#AE2580]">
                Need Guidance?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Let's understand your condition first.
              </h3>
            </div>

            <a
              href="/appointment"
              className="rounded-xl bg-[#AE2580] px-7 py-3.5 font-semibold text-white transition hover:bg-[#8E1E68]"
            >
              Book Appointment
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Treatments;