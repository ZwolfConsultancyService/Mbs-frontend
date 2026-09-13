const PersonalisedCare = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description:
        "A detailed assessment to understand your condition, symptoms and individual needs.",
    },
    {
      number: "02",
      title: "Root Cause Understanding",
      description:
        "We focus on understanding the factors that may be contributing to your pain and movement concerns.",
    },
    {
      number: "03",
      title: "Personalised Treatment Plan",
      description:
        "A care plan is designed around your condition, goals and individual requirements.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#FAF7F9] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#AE2580]">
            Our Process
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#252525] sm:text-4xl md:text-5xl">
            Personalised Care
            <br />
            <span className="text-[#AE2580]">Step by Step.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:mt-6 md:text-base">
            From understanding your condition to creating a personalised care
            plan, every step is designed around you.
          </p>
        </div>

        {/* PROCESS */}
        <div className="relative mt-12 md:mt-20">

          {/* Desktop Connecting Line */}
          <div className="absolute left-[18%] right-[18%] top-[50%] hidden h-px bg-[#AE2580]/20 md:block" />

          <div
            className="
              flex
              gap-5
              overflow-x-auto
              pb-6
              snap-x
              snap-mandatory
              scroll-smooth
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              md:grid
              md:grid-cols-3
              md:gap-8
              md:overflow-visible
              md:pb-0
            "
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="
                  relative
                  flex
                  w-[82vw]
                  min-w-[82vw]
                  shrink-0
                  snap-center
                  justify-center

                  sm:w-[65vw]
                  sm:min-w-[65vw]

                  md:w-auto
                  md:min-w-0
                  md:shrink
                "
              >

                {/* ================= CIRCLE ================= */}
                <div
                  className="
                    relative
                    flex
                    aspect-square
                    w-full
                    max-w-[330px]
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#AE2580]/15
                    bg-white
                    px-8
                    text-center

                    shadow-[0_15px_50px_rgba(174,37,128,0.08)]

                    transition
                    duration-500

                    md:max-w-[360px]
                    md:hover:-translate-y-3
                    md:hover:shadow-[0_25px_65px_rgba(174,37,128,0.14)]
                  "
                >

                  {/* Outer Ring */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-3
                      rounded-full
                      border
                      border-dashed
                      border-[#AE2580]/15
                    "
                  />

                  {/* Number Circle */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#AE2580]
                      shadow-[0_8px_25px_rgba(174,37,128,0.25)]
                    "
                  >
                    <span className="text-lg font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Step */}
                  <p className="relative z-10 mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#AE2580]">
                    Step {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="relative z-10 mt-2 max-w-[220px] text-xl font-bold leading-tight text-[#252525] md:text-2xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-3 max-w-[235px] text-xs leading-6 text-gray-500 md:text-sm md:leading-7">
                    {step.description}
                  </p>

                  {/* Bottom Dot */}
                  <div className="relative z-10 mt-4 h-1.5 w-1.5 rounded-full bg-[#AE2580]" />
                </div>

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div
                    className="
                      absolute
                      -right-5
                      top-1/2
                      z-20
                      hidden
                      h-10
                      w-10
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#AE2580]/20
                      bg-white
                      text-[#AE2580]
                      shadow-sm
                      md:flex
                    "
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Indicators */}
          <div className="mt-4 flex justify-center gap-2 md:hidden">
            <span className="h-1.5 w-7 rounded-full bg-[#AE2580]" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          </div>

          <p className="mt-3 text-center text-[11px] font-medium text-gray-400 md:hidden">
            Swipe to follow the process →
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-12 max-w-4xl rounded-full bg-[#252525] px-6 py-5 text-center md:mt-16 md:px-10 md:py-6">
          <p className="text-sm font-medium text-white md:text-base">
            Understanding first.
            <span className="mx-2 text-[#D88BC0]">•</span>
            Personalised care next.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PersonalisedCare;