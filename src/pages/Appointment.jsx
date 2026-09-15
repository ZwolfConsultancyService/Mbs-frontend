import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello Dr. Pawan Srivastava,

I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Treatment: ${formData.treatment}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}
Problem / Message: ${formData.message}
    `;

    const whatsappNumber = "918076569626";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>
          Book Appointment | Dr. Pawan Srivastava | MBS Health Solutions
        </title>

        <meta
          name="description"
          content="Book an appointment with Dr. Pawan Srivastava at MBS Health Solutions & Chiropractic. Discuss your health concerns with a personalised approach to care."
        />
      </Helmet>

      <section className="bg-[#FAF7F9] px-6 py-16 md:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Page Header */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AE2580]">
              Book Appointment
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#252525] md:text-6xl">
              Take the First Step Towards
              <span className="block text-[#AE2580]">
                Better Health
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              Schedule an appointment with Dr. Pawan Srivastava and discuss
              your health concerns with a personalised approach to care.
            </p>

          </div>


          {/* Main Appointment Area */}
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_380px]">

            {/* Appointment Form */}
            <div className="rounded-[32px] bg-white p-7 shadow-sm md:p-10">

              <div className="mb-8">

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#AE2580]">
                  Appointment Request
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#252525] md:text-3xl">
                  Tell Us About Yourself
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  Fill in the details below and we will help you with your
                  appointment request.
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                {/* Name + Phone */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#252525]">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF7F9] px-4 py-3.5 text-sm text-[#252525] outline-none transition focus:border-[#AE2580] focus:ring-2 focus:ring-[#AE2580]/10"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#252525]">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF7F9] px-4 py-3.5 text-sm text-[#252525] outline-none transition focus:border-[#AE2580] focus:ring-2 focus:ring-[#AE2580]/10"
                    />
                  </div>

                </div>


                {/* Email + Treatment */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#252525]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF7F9] px-4 py-3.5 text-sm text-[#252525] outline-none transition focus:border-[#AE2580] focus:ring-2 focus:ring-[#AE2580]/10"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#252525]">
                      Select Treatment *
                    </label>

                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF7F9] px-4 py-3.5 text-sm text-[#252525] outline-none transition focus:border-[#AE2580] focus:ring-2 focus:ring-[#AE2580]/10"
                    >
                      <option value="">
                        Select a treatment
                      </option>

                      <option value="Sciatica">
                        Sciatica
                      </option>

                      <option value="Slip Disc">
                        Slip Disc
                      </option>

                      <option value="Back Pain">
                        Back Pain
                      </option>

                      <option value="Frozen Shoulder">
                        Frozen Shoulder
                      </option>

                      <option value="Knee Pain">
                        Knee Pain
                      </option>

                      <option value="Cervical">
                        Cervical
                      </option>

                      <option value="Navel Alignment">
                        Navel Alignment
                      </option>

                      <option value="Migraine Pain">
                        Migraine Pain
                      </option>

                      <option value="Headache">
                        Headache
                      </option>

                      <option value="TMJ Alignment">
                        TMJ Alignment
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>
                  </div>

                </div>


                {/* Date + Time */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#252525]">
                      Preferred Date *
                    </label>

                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF7F9] px-4 py-3.5 text-sm text-[#252525] outline-none transition focus:border-[#AE2580] focus:ring-2 focus:ring-[#AE2580]/10"
                    />
                  </div>


                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#252525]">
                      Preferred Time *
                    </label>

                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#FAF7F9] px-4 py-3.5 text-sm text-[#252525] outline-none transition focus:border-[#AE2580] focus:ring-2 focus:ring-[#AE2580]/10"
                    >
                      <option value="">
                        Select preferred time
                      </option>

                      <option value="10:00 AM">
                        10:00 AM
                      </option>

                      <option value="11:00 AM">
                        11:00 AM
                      </option>

                      <option value="12:00 PM">
                        12:00 PM
                      </option>

                      <option value="1:00 PM">
                        1:00 PM
                      </option>

                      <option value="2:00 PM">
                        2:00 PM
                      </option>

                      <option value="3:00 PM">
                        3:00 PM
                      </option>

                      <option value="4:00 PM">
                        4:00 PM
                      </option>

                      <option value="5:00 PM">
                        5:00 PM
                      </option>

                      <option value="6:00 PM">
                        6:00 PM
                      </option>

                      <option value="7:00 PM">
                        7:00 PM
                      </option>

                    </select>
                  </div>

                </div>


                {/* Message */}
                <div className="mt-5">

                  <label className="mb-2 block text-sm font-semibold text-[#252525]">
                    Tell Us About Your Problem
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Briefly describe your problem or symptoms..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#FAF7F9] px-4 py-3.5 text-sm text-[#252525] outline-none transition focus:border-[#AE2580] focus:ring-2 focus:ring-[#AE2580]/10"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#AE2580] px-6 py-4 font-semibold text-white transition hover:bg-[#8E1E68]"
                >
                  Request Appointment
                  <span className="text-lg">
                    →
                  </span>
                </button>


                <p className="mt-4 text-center text-xs leading-6 text-gray-400">
                  Your appointment request will be sent to our team through
                  WhatsApp for confirmation.
                </p>

              </form>

            </div>


            {/* Right Side Information */}
            <div className="space-y-6">

              {/* Doctor Card */}
              <div className="overflow-hidden rounded-[32px] bg-[#252525]">

                <div className="p-7 md:p-8">

                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#AE2580]">
                    Your Doctor
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    Dr. Pawan
                    <span className="block text-[#AE2580]">
                      Srivastava
                    </span>
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    MD. Chiro. | MD. Acu. (Therapist)
                    <br />
                    Diabetes Educator | PLR Therapist
                  </p>

                  <div className="mt-6 h-px bg-white/10" />

                  <div className="mt-6">

                    <p className="text-2xl font-bold text-white">
                      32 Years
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      Experience in Holistic Health & Therapy
                    </p>

                  </div>

                </div>

              </div>


              {/* Contact Card */}
              <div className="rounded-[32px] bg-white p-7 shadow-sm md:p-8">

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#AE2580]">
                  Need Help?
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#252525]">
                  Contact Our Team
                </h3>

                <div className="mt-6 space-y-5">

                  {/* Phone */}
                  <a
                    href="tel:8076569626"
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#AE2580]/10 text-[#AE2580]">
                      ☎
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Call Us
                      </p>

                      <p className="mt-1 font-semibold text-[#252525]">
                        +91 80765 69626
                      </p>
                    </div>

                  </a>


                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918076569626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#AE2580]/10 text-[#AE2580]">
                      💬
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        WhatsApp
                      </p>

                      <p className="mt-1 font-semibold text-[#252525]">
                        Chat With Us
                      </p>
                    </div>

                  </a>


                  {/* Email */}
                  <a
                    href="mailto:abyssindia.edu@gmail.com"
                    className="flex items-start gap-4"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#AE2580]/10 text-[#AE2580]">
                      ✉
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Email
                      </p>

                      <p className="mt-1 break-all font-semibold text-[#252525]">
                        abyssindia.edu@gmail.com
                      </p>
                    </div>

                  </a>

                </div>

              </div>


              {/* Clinic Address */}
              <div className="rounded-[32px] bg-[#AE2580] p-7 md:p-8">

                <p className="text-sm font-bold uppercase tracking-[0.15em] text-white/70">
                  Visit Us
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  MBS Mind Body Soul
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/80">
                  389/215, A-1, Shop No-4,
                  <br />
                  Paryavaran Complex,
                  <br />
                  IGNOU Road, Saidulajab,
                  <br />
                  New Delhi - 282001
                </p>

              </div>

            </div>

          </div>


          {/* Bottom CTA */}
          <div className="mt-10 rounded-[32px] bg-[#252525] px-7 py-9 text-center md:px-12">

            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#AE2580]">
              Have Questions?
            </p>

            <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
              Speak with our team before booking your appointment.
            </h2>

            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="tel:8076569626"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Call Us
              </a>

              <a
                href="https://wa.me/918076569626"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#AE2580] px-6 py-3.5 font-semibold text-white transition hover:bg-[#8E1E68]"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Appointment;