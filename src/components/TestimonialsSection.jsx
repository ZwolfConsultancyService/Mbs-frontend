const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Vernica Salot",
      treatment: "Headache",
      text: "I have had headache from 7-8 years. It gradually increased and from the last 2 years it used to stay for days and months. I had homeopathic and ayurvedic treatment but there was no relief. Then I found Dr. Pawan's chiropractic clinic and consulted him. He provided me with a treatment for 45 days and a few herbal medicines. Now I am completely fine and grateful to Dr. Pawan for his care.",
    },
    {
      name: "Anurag Yadav",
      treatment: "Dizziness &c Vomiting",
      text: "I was suffering from dizziness and vomiting for the last 4 months. I changed 3 Chiropractors in Delhi but got relief only for 2-3 days. Dr. Pawan Srivastava's technique is unmatched. He diagnosed my problem and gave me relief within a week through natural methods. I am 101% satisfied. Thank you very much Doctor.",
    },
    {
      name: "Nemat Khan",
      treatment: "Pain Management",
      text: "From the very first visit, I felt listened to and understood. The treatment plan was clearly explained, and every session was handled with great care and expertise. Over time, my pain significantly reduced, and my mobility improved. The clinic has a welcoming atmosphere, and the doctor is friendly and supportive.",
    },
    {
      name: "Rinchen Wangmo",
      treatment: "Chiropractic Care",
      text: "I had an excellent experience at MBS Health Solutions and Chiropractic Center. The treatment was highly effective, and I experienced significant pain relief after the sessions. The doctor was very professional, attentive, and truly deserves a 5-star rating for the care and expertise provided. I highly recommend this clinic.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
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
            Hear directly from our patients about their experiences with
            personalised chiropractic care.
          </p>
        </div>

        {/* Horizontal Reviews */}
        <div
          className="
            mt-14
            flex
            gap-6
            overflow-x-auto
            pb-6
            snap-x
            snap-mandatory
            scrollbar-hide
          "
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                min-w-[85%]
                snap-center
                rounded-[28px]
                border
                border-gray-100
                bg-[#FAF7F9]
                p-8
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                md:min-w-[48%]
                lg:min-w-[32%]
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="text-5xl leading-none text-[#AE2580]/20">
                  “
                </span>

                <span className="text-lg tracking-wide text-[#AE2580]">
                  ★ ★ ★ ★ ★
                </span>
              </div>

              {/* Review */}
              <p className="mt-5 text-[15px] leading-7 text-gray-600">
                {testimonial.text}
              </p>

              {/* Patient */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="font-bold text-[#252525]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <a
            href="https://share.google/FZx7hEQbbIWQfgXOL"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#AE2580]
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-[#921E6C]
              hover:shadow-lg
            "
          >
            View More Reviews
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;