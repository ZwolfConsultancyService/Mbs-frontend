import doctorImage from "../assets/Doctor/drpawan.jpeg";

const DoctorSection = () => {
  return (
    <section className="bg-[#FAF7F9] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Doctor Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
            <img
              src={doctorImage}
              alt="Dr. Pawan Srivastava"
              className="h-[520px] w-full object-contain"
            />
          </div>

          {/* Experience Card */}
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#252525] px-6 py-5 shadow-xl md:right-6">
            <p className="text-2xl font-bold text-white">MBS</p>
            <p className="mt-1 text-sm text-white/60">
              Mind Body Soul
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AE2580]">
            Meet Your Doctor
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#252525] md:text-5xl">
            Dr. Pawan
            <br />
            <span className="text-[#AE2580]">Srivastava</span>
          </h2>

          <p className="mt-4 text-lg font-semibold text-[#252525]">
            Chiropractor & Spine Specialist
          </p>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Every patient is different, and so is every condition. Our focus
            is on understanding your symptoms, assessing your individual needs
            and developing a personalised approach to care.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600">
            The aim is to support better movement, comfort and overall
            well-being through a thoughtful, assessment-led approach.
          </p>

          {/* Approach */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5">
              <span className="text-xl font-bold text-[#AE2580]">01</span>
              <p className="mt-2 text-sm font-semibold text-[#252525]">
                Understand
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <span className="text-xl font-bold text-[#AE2580]">02</span>
              <p className="mt-2 text-sm font-semibold text-[#252525]">
                Assess
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <span className="text-xl font-bold text-[#AE2580]">03</span>
              <p className="mt-2 text-sm font-semibold text-[#252525]">
                Personalise
              </p>
            </div>
          </div>

          {/* Button */}
          <a
            href="/about"
            className="mt-9 inline-flex rounded-xl bg-[#AE2580] px-7 py-3.5 font-semibold text-white transition hover:bg-[#8E1E68]"
          >
            Know More About Us
          </a>
        </div>

      </div>
    </section>
  );
};

export default DoctorSection;