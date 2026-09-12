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
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AE2580]">
            Patient Experiences
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#252525] md:text-5xl">
            What Our Patients
            <br />
            <span className="text-[#AE2580]">Say About Us</span>
          </h2>

          <p className="mt-5 text-gray-500">
            Hear about the experiences of people who chose personalised care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-gray-100 bg-[#FAF7F9] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-between">
                <span className="text-5xl text-[#AE2580]/20">“</span>

                <span className="text-[#AE2580]">
                  ★ ★ ★ ★ ★
                </span>
              </div>

              <p className="mt-5 leading-8 text-gray-600">
                {testimonial.text}
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-bold text-[#252525]">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;