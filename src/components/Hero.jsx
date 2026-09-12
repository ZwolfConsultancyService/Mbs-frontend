import doctorImage from "../assets/doctor/dr pawan.jpeg";

const Hero = () => {
  return (
    <section className="bg-[#FAF7F9]">
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 font-semibold uppercase tracking-widest text-[#AE2580]">
            Chiropractor & Spine Specialist
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#252525] md:text-6xl">
            Personalised Care
            <br />
            for Better Movement
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-gray-600">
            Personalised, non-surgical approaches to managing spine and knee
            pain with Dr. Pawan Srivastava.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/appointment"
              className="rounded-lg bg-[#AE2580] px-6 py-3 font-semibold text-white transition hover:bg-[#8E1E68]"
            >
              Book Appointment
            </a>

            <a
              href="/treatments"
              className="rounded-lg border-2 border-[#AE2580] px-6 py-3 font-semibold text-[#AE2580] transition hover:bg-[#AE2580] hover:text-white"
            >
              Explore Treatments
            </a>
          </div>
        </div>

        {/* Doctor Image */}
<div className="flex h-[500px] items-center justify-center overflow-hidden rounded-3xl bg-[#F5E8F0] shadow-sm">
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