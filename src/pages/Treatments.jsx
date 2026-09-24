
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import pic1 from "../assets/Treatment/pic1.jpg";
import pic2 from "../assets/Treatment/pic2.jpg";
import pic3 from "../assets/Treatment/pic3.jpg";
import pic4 from "../assets/Treatment/pic4.jpg";
import pic5 from "../assets/Treatment/pic5.jpg";
import pic6 from "../assets/Treatment/pic6.jpg";
import pic7 from "../assets/Treatment/pic7.jpg";
import pic8 from "../assets/Treatment/pic8.jpg";
import pic9 from "../assets/Treatment/pic9.jpg";
import pic10 from "../assets/Treatment/pic10.jpg";

const Treatments = () => {
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
    {
      number: "07",
      title: "Navel Alignment",
      slug: "navel-alignment",
      image: pic7,
      description:
        "An individualised, assessment-based approach according to your concerns.",
    },
    {
      number: "08",
      title: "Migraine Pain",
      slug: "migraine-pain",
      image: pic8,
      description:
        "Understanding your symptoms first, followed by a personalised care approach.",
    },
    {
      number: "09",
      title: "Headache",
      slug: "headache",
      image: pic9,
      description:
        "Care tailored around your symptoms and individual treatment requirements.",
    },
    {
      number: "10",
      title: "TMJ Alignment",
      slug: "tmj-alignment",
      image: pic10,
      description:
        "Personalised care focused on jaw discomfort, movement and individual treatment needs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Treatments | Chiropractic & Holistic Care | MBS Health Solutions
        </title>

        <meta
          name="description"
          content="Explore personalised chiropractic and holistic treatment options for sciatica, slip disc, back pain, knee pain, cervical problems and more at MBS Health Solutions."
        />
      </Helmet>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#AE2580] sm:text-sm">
              Our Treatments
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-[#252525] sm:text-4xl md:mt-4 md:text-5xl">
              Treatment For Your
              <br />
              <span className="text-[#AE2580]">
                Movement & Comfort
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7">
              Every condition is different. Our approach begins with
              understanding your symptoms and individual needs.
            </p>

          </div>

          {/* Treatment Cards */}
          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">

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
                  <span className="absolute bottom-3 left-4 text-xs font-semibold tracking-wider text-white/95">
                    {treatment.number}
                  </span>

                  {/* Arrow */}
                  <div className="absolute bottom-3 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-sm text-[#AE2580] shadow-sm transition-all duration-300 group-hover:bg-[#AE2580] group-hover:text-white">
                    →
                  </div>

                </div>

                {/* Content */}
                <div className="relative p-5">

                  {/* Icon */}
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#AE2580] shadow-sm transition-all duration-300 group-hover:bg-[#AE2580] group-hover:text-white">
                    <span className="text-base">
                      ✦
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-[#252525] transition-colors duration-300 group-hover:text-[#AE2580]">
                    {treatment.title}
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {treatment.description}
                  </p>

                  {/* Explore */}
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#AE2580]">
                    Explore Treatment
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#AE2580] transition-all duration-500 group-hover:w-full" />

                </div>

              </Link>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-12 overflow-hidden rounded-2xl bg-[#252525] px-6 py-8 sm:mt-14 sm:px-8 sm:py-9 md:rounded-[28px] md:px-10">

            <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#AE2580]">
                  Need Guidance?
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Let's understand your condition first.
                </h3>

              </div>

              <Link
                to="/appointment"
                className="rounded-xl bg-[#AE2580] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8E1E68]"
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Treatments;
