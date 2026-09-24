
import { Link } from "react-router-dom";

import pic1 from "../assets/Treatment/pic1.jpg";
import pic2 from "../assets/Treatment/pic2.jpg";
import pic3 from "../assets/Treatment/pic3.jpg";
import pic4 from "../assets/Treatment/pic4.jpg";
import pic5 from "../assets/Treatment/pic5.jpg";
import pic6 from "../assets/Treatment/pic6.jpg";

const TreatmentsSection = () => {
  const treatments = [
    {
      number: "01",
      title: "Sciatica",
      slug: "sciatica",
      image: pic1,
      description:
        "Personalised care focused on understanding your symptoms and improving movement.",
    },
    {
      number: "02",
      title: "Slip Disc",
      slug: "slip-disc",
      image: pic2,
      description:
        "Assessment-led care based on your individual condition and treatment needs.",
    },
    {
      number: "03",
      title: "Back Pain",
      slug: "back-pain",
      image: pic3,
      description:
        "A personalised approach to managing discomfort and supporting better mobility.",
    },
    {
      number: "04",
      title: "Frozen Shoulder",
      slug: "frozen-shoulder",
      image: pic4,
      description:
        "Individualised care focused on symptoms, mobility and your specific needs.",
    },
    {
      number: "05",
      title: "Knee Pain",
      slug: "knee-pain",
      image: pic5,
      description:
        "Care designed around your condition to support comfortable movement and mobility.",
    },
    {
      number: "06",
      title: "Cervical",
      slug: "cervical",
      image: pic6,
      description:
        "Personalised assessment and care for cervical discomfort and related symptoms.",
    },
  ];

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-8">

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#AE2580]">
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
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">

          {treatments.map((treatment) => (
            <Link
              key={treatment.number}
              to={`/treatments/${treatment.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#FAF7F9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-32 w-full overflow-hidden sm:h-36">
                <img
                  src={treatment.image}
                  alt={`${treatment.title} treatment`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                {/* Number */}
                <span className="absolute left-4 bottom-3 text-xs font-semibold tracking-wider text-white/90">
                  {treatment.number}
                </span>

                {/* Arrow */}
                <div className="absolute right-4 bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-sm text-[#AE2580] shadow-sm transition-all duration-300 group-hover:bg-[#AE2580] group-hover:text-white">
                  →
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5">

                {/* Small Icon */}
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#AE2580] shadow-sm transition-all duration-300 group-hover:bg-[#AE2580] group-hover:text-white">
                  <span className="text-base">
                    ✦
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#252525] transition-colors duration-300 group-hover:text-[#AE2580]">
                  {treatment.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {treatment.description}
                </p>

                {/* Learn More */}
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#AE2580]">
                  Explore Treatment
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#AE2580] transition-all duration-500 group-hover:w-full" />

            </Link>
          ))}

        </div>

        {/* View All Treatments */}
        <div className="mt-8 text-center sm:mt-10">

          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 rounded-xl bg-[#AE2580] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8E1E68]"
          >
            View All Treatments
            <span className="text-lg">→</span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
