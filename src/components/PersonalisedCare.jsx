
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
    <section className="w-full overflow-hidden bg-[#FAF7F9] px-4 py-10 sm:px-6 sm:py-14 md:py-24">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AE2580]">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#252525] sm:text-4xl md:mt-4 md:text-5xl">
            Personalised Care
            <br />
            <span className="text-[#AE2580]">Step by Step.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:mt-6 md:text-base md:leading-7">
            From understanding your condition to creating a personalised care
            plan, every step is designed around you.
          </p>

        </div>


        {/* PROCESS */}
        <div className="relative mt-8 md:mt-20">

          {/* Desktop Connecting Line */}
          <div className="absolute left-[18%] right-[18%] top-[50%] hidden h-px bg-[#AE2580]/20 md:block" />

          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-4
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
                  w-[78vw]
                  min-w-[78vw]
                  shrink-0
                  snap-center
                  justify-center

                  sm:w-[60vw]
                  sm:min-w-[60vw]

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
                    max-w-[300px]
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#AE2580]/15
                    bg-white
                    px-6
                    text-center
                    shadow-[0_12px_40px_rgba(174,37,128,0.07)]
                    transition
                    duration-500

                    md:max-w-[360px]
                    md:px-8
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
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#AE2580]
                      shadow-[0_7px_20px_rgba(174,37,128,0.22)]

                      md:h-16
                      md:w-16
                    "
                  >
                    <span className="text-base font-bold text-white md:text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Step */}
                  <p className="relative z-10 mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#AE2580] md:mt-4 md:text-[10px]">
                    Step {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="relative z-10 mt-1.5 max-w-[210px] text-lg font-bold leading-tight text-[#252525] md:mt-2 md:text-2xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-2 max-w-[220px] text-[11px] leading-5 text-gray-500 md:mt-3 md:max-w-[235px] md:text-sm md:leading-7">
                    {step.description}
                  </p>

                  {/* Bottom Dot */}
                  <div className="relative z-10 mt-3 h-1.5 w-1.5 rounded-full bg-[#AE2580] md:mt-4" />

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
          <div className="mt-3 flex justify-center gap-2 md:hidden">
            <span className="h-1.5 w-6 rounded-full bg-[#AE2580]" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          </div>

          <p className="mt-2 text-center text-[10px] font-medium text-gray-400 md:hidden">
            Swipe to follow the process →
          </p>

        </div>


        {/* Bottom CTA */}
        <div className="mx-auto mt-8 max-w-4xl rounded-full bg-[#252525] px-5 py-4 text-center md:mt-16 md:px-10 md:py-6">

          <p className="text-xs font-medium text-white sm:text-sm md:text-base">
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
