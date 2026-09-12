const PersonalisedCare = () => {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description:
        "A detailed assessment to understand your condition, symptoms and individual needs.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
        >
          <rect
            x="15"
            y="10"
            width="30"
            height="43"
            rx="4"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M25 10.5C25 7.5 27 5 30 5C33 5 35 7.5 35 10.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M24 25H36"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M24 33H36"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M24 41H32"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="44"
            cy="42"
            r="9"
            fill="white"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M44 38V46M40 42H48"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Root Cause Understanding",
      description:
        "We focus on understanding the factors that may be contributing to your condition.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
        >
          <circle
            cx="28"
            cy="28"
            r="17"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M40 40L53 53"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M28 38C28 31 28 23 34 19"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M28 32C23 30 20 26 20 22"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M28 36C34 34 38 30 38 25"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Personalised Treatment Plan",
      description:
        "A care plan designed around your individual condition and treatment requirements.",
      icon: (
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14"
        >
          <path
            d="M18 7H40L49 16V54H18V7Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M40 7V17H49"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M25 29H39"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M25 37H39"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M25 45H34"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="45"
            cy="44"
            r="9"
            fill="white"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M45 40V48M41 44H49"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:py-28">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-[#AE2580]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#F8E8F2] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#AE2580]">
            Personalised Care
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#252525] sm:text-4xl md:text-5xl">
            Understanding Your Condition
            <br />
            <span className="text-[#AE2580]">Comes First</span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#AE2580]/20" />
            <span className="h-1 w-16 rounded-full bg-[#AE2580]" />
            <span className="h-1 w-8 rounded-full bg-[#AE2580]/20" />
          </div>

          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            Every condition is different. We begin by understanding your
            symptoms and individual needs before developing a suitable care
            approach.
          </p>
        </div>

        {/* ================= STEP FLOW ================= */}
        <div className="relative mt-20">
          {/* Desktop Connecting Flow */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[135px] hidden h-[2px] md:block">
            <div className="relative h-full w-full bg-[#EFC7DF]">
              {/* Moving/Flow Dots */}
              <span className="absolute -top-[4px] left-[28%] h-2 w-2 rounded-full bg-[#AE2580]" />
              <span className="absolute -top-[4px] left-[68%] h-2 w-2 rounded-full bg-[#AE2580]" />
            </div>

            {/* Arrow 1 */}
            <div className="absolute left-[43%] top-1/2 -translate-y-1/2">
              <div className="h-3 w-3 rotate-45 border-r-2 border-t-2 border-[#AE2580]" />
            </div>

            {/* Arrow 2 */}
            <div className="absolute left-[75%] top-1/2 -translate-y-1/2">
              <div className="h-3 w-3 rotate-45 border-r-2 border-t-2 border-[#AE2580]" />
            </div>
          </div>

          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-center text-center"
              >
                {/* ================= CIRCLE ================= */}
                <div className="relative flex h-64 w-64 items-center justify-center">
                  {/* Outer Circle */}
                  <div className="absolute inset-2 rounded-full border border-[#AE2580]/15" />

                  {/* Dashed Flow Circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#AE2580]/35 transition duration-700 group-hover:rotate-180 group-hover:border-[#AE2580]" />

                  {/* Pink Background Circle */}
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#FFF7FB] to-[#F8E8F2] shadow-[0_15px_45px_rgba(174,37,128,0.12)] transition duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_55px_rgba(174,37,128,0.20)]" />

                  {/* Decorative Arc */}
                  <div className="absolute left-1/2 top-0 h-10 w-20 -translate-x-1/2 rounded-b-full border-b-4 border-[#AE2580]" />

                  {/* Icon */}
                  <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-white text-[#AE2580] shadow-[0_8px_30px_rgba(174,37,128,0.12)] transition duration-500 group-hover:scale-110">
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div className="absolute right-3 top-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#AE2580] text-lg font-bold text-white shadow-lg ring-8 ring-white transition duration-300 group-hover:scale-110">
                    {step.number}
                  </div>
                </div>

                {/* ================= TITLE ================= */}
                <div className="mt-7 min-h-[52px] flex items-center justify-center">
                  <h3 className="rounded-full bg-[#F8E8F2] px-6 py-3 text-lg font-bold text-[#252525] transition duration-300 group-hover:bg-[#AE2580] group-hover:text-white md:text-xl">
                    {step.title}
                  </h3>
                </div>

                {/* ================= DESCRIPTION ================= */}
                <p className="mt-5 max-w-sm text-base leading-7 text-gray-600">
                  {step.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-10 rounded-full bg-[#AE2580] transition-all duration-300 group-hover:w-20" />

                {/* Mobile Flow Arrow */}
                {index !== steps.length - 1 && (
                  <div className="mt-8 flex h-12 w-12 rotate-90 items-center justify-center rounded-full bg-[#F8E8F2] text-[#AE2580] md:hidden">
                    <span className="text-2xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <div className="relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-[2rem] bg-[#252525] px-7 py-8 shadow-2xl md:px-12 md:py-10">
          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#AE2580]/20 blur-3xl" />

          <div className="relative flex flex-col items-center justify-center gap-5 text-center md:flex-row md:text-left">
            {/* Heart Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#AE2580]/40 bg-[#AE2580]/10 text-[#F48BC8]">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                className="h-9 w-9"
              >
                <path
                  d="M32 53S10 40 10 24C10 16 15 11 22 11C27 11 30 14 32 18C34 14 37 11 42 11C49 11 54 16 54 24C54 40 32 53 32 53Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 30H24L27 24L31 35L35 27L38 30H46"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Divider */}
            <div className="hidden h-12 w-px bg-white/20 md:block" />

            <p className="max-w-3xl text-base leading-8 text-white/90 md:text-xl">
              Our approach combines careful assessment with personalised
              care, keeping your individual condition and needs at the centre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalisedCare;