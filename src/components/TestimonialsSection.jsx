const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Patient Review",
      treatment: "Back Pain",
      text: "The overall approach was professional and focused on understanding the problem before suggesting a care plan.",
    },
    {
      name: "Patient Review",
      treatment: "Knee Pain",
      text: "I appreciated the personalised attention and the time taken to understand my symptoms and concerns.",
    },
    {
      name: "Patient Review",
      treatment: "Spine Care",
      text: "The consultation was detailed and helped me better understand my condition and available care options.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#AE2580] sm:text-sm sm:tracking-[0.2em]">
            Patient Experiences
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#252525] sm:mt-4 sm:text-4xl md:mt-5 md:text-5xl">
            What Our Patients
            <br />
            <span className="text-[#AE2580]">Say About Us</span>
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:mt-4">
            Hear about the experiences of people who chose personalised care.
          </p>

        </div>

        {/* Testimonials */}
        <div
          className="
            mt-7
            flex
            gap-3
            overflow-x-auto
            snap-x
            snap-mandatory
            pb-3
            scrollbar-hide

            sm:mt-9
            sm:gap-4

            md:mt-14
            md:grid
            md:grid-cols-3
            md:gap-6
            md:overflow-visible
            md:pb-0
          "
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                w-[88%]
                min-w-[88%]
                snap-center
                rounded-2xl
                border
                border-gray-100
                bg-[#FAF7F9]
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                sm:w-[70%]
                sm:min-w-[70%]
                sm:rounded-[24px]
                sm:p-6

                md:w-auto
                md:min-w-0
                md:rounded-[28px]
                md:p-8
              "
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                <span className="text-4xl leading-none text-[#AE2580]/20 sm:text-5xl">
                  “
                </span>

                <span className="text-xs tracking-wider text-[#AE2580] sm:text-sm">
                  ★ ★ ★ ★ ★
                </span>

              </div>

              {/* Review */}
              <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-5 sm:leading-7 md:text-base md:leading-8">
                {testimonial.text}
              </p>

              {/* Patient */}
              <div className="mt-5 border-t border-gray-200 pt-4 sm:mt-7 sm:pt-5 md:mt-8 md:pt-6">

                <h3 className="text-sm font-bold text-[#252525] sm:text-base">
                  {testimonial.name}
                </h3>

                <p className="mt-0.5 text-xs text-gray-500 sm:mt-1 sm:text-sm">
                  {testimonial.treatment}
                </p>

              </div>

            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-1 flex items-center justify-center gap-1.5 md:hidden">

          <span className="h-1.5 w-5 rounded-full bg-[#AE2580]" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />

          <span className="ml-1.5 text-[10px] text-gray-400">
            Swipe to explore
          </span>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;