const CTASection = () => {
  return (
    <section className="bg-[#FAF7F9] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] bg-[#252525] px-8 py-14 md:px-16 md:py-16">

          {/* Decorative Circle */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#AE2580]/20" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">

            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AE2580]">
                Take The Next Step
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl">
                Let's Understand Your
                <br />
                <span className="text-[#AE2580]">Condition Together</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
                Start with an assessment and understand the available care
                options based on your individual needs.
              </p>

              {/* Doctor */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#AE2580] text-lg font-bold text-white">
                  Dr
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Dr. Pawan Srivastava
                  </p>
                  <p className="text-sm text-white/50">
                    Chiropractor & Spine Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <a
                href="/appointment"
                className="inline-flex items-center gap-3 rounded-2xl bg-[#AE2580] px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-[#8E1E68] hover:shadow-xl"
              >
                Book Appointment
                <span className="text-xl">→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;