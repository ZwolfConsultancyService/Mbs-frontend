import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">

        <div className="grid gap-9 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">

            <div className="inline-block">
              <h2 className="text-3xl font-black tracking-tight text-[#AE2580] sm:text-4xl">
                MBS
              </h2>

              <p className="mt-0.5 text-[10px] font-semibold tracking-[0.25em] text-white/60 sm:text-xs">
                MIND BODY SOUL
              </p>

              <p className="mt-1 text-[9px] tracking-[0.15em] text-white/40 sm:text-[10px]">
                ALTERNATIVE MEDICINE HEALTH SOLUTIONS
              </p>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55 sm:mt-6 sm:leading-7">
              Personalised care focused on understanding your condition,
              supporting better movement and improving your overall well-being.
            </p>

            {/* Brand Line */}
            <div className="mt-5 h-1 w-12 rounded-full bg-[#AE2580] sm:mt-7 sm:w-14" />

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.2em]">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:gap-4">

              <Link
                to="/"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                About Us
              </Link>

              <Link
                to="/treatments"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Treatments
              </Link>

              <Link
                to="/gallery"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Gallery
              </Link>

              <Link
                to="/appointment"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Book Appointment
              </Link>

            </div>
          </div>

          {/* Treatments */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.2em]">
              Treatments
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:mt-6 sm:gap-x-5 sm:gap-y-4">

              <Link
                to="/treatments/sciatica"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Sciatica
              </Link>

              <Link
                to="/treatments/slip-disc"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Slip Disc
              </Link>

              <Link
                to="/treatments/back-pain"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Back Pain
              </Link>

              <Link
                to="/treatments/knee-pain"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Knee Pain
              </Link>

              <Link
                to="/treatments/cervical"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Cervical
              </Link>

              <Link
                to="/treatments/frozen-shoulder"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Frozen Shoulder
              </Link>

              <Link
                to="/treatments/migraine-pain"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Migraine Pain
              </Link>

              <Link
                to="/treatments/headache"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Headache
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.2em]">
              Get In Touch
            </h3>

            <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5">

              {/* Address */}
              <div className="flex gap-3 sm:gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#AE2580]/15 text-sm text-[#AE2580] sm:h-10 sm:w-10 sm:rounded-xl">
                  📍
                </div>

                <p className="text-sm leading-5 text-white/55 sm:leading-6">
                  389/215, A-1, Shop No-4,
                  <br />
                  Paryavaran Complex,
                  <br />
                  IGNOU Road, Saidulajab,
                  <br />
                  New Delhi - 282001
                </p>

              </div>

              {/* Phone */}
              <a
                href="tel:8076569626"
                className="group flex gap-3 sm:gap-4"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#AE2580]/15 text-sm text-[#AE2580] transition group-hover:bg-[#AE2580] group-hover:text-white sm:h-10 sm:w-10 sm:rounded-xl">
                  ☎
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/30 sm:text-xs">
                    Phone
                  </p>

                  <p className="mt-0.5 text-sm text-white/60 transition group-hover:text-[#AE2580]">
                    +91 80765 69626
                  </p>
                </div>

              </a>

              {/* Email */}
              <a
                href="mailto:abyssindia.edu@gmail.com"
                className="group flex gap-3 sm:gap-4"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#AE2580]/15 text-sm text-[#AE2580] transition group-hover:bg-[#AE2580] group-hover:text-white sm:h-10 sm:w-10 sm:rounded-xl">
                  ✉
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-white/30 sm:text-xs">
                    Email
                  </p>

                  <p className="mt-0.5 break-all text-sm text-white/60 transition group-hover:text-[#AE2580]">
                    abyssindia.edu@gmail.com
                  </p>
                </div>

              </a>

            </div>
          </div>

        </div>

        {/* Appointment Banner */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:mt-12 sm:rounded-[28px] sm:p-7 md:mt-16 md:flex-row md:items-center md:justify-between md:px-9">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#AE2580] sm:text-sm sm:tracking-[0.15em]">
              Ready to Get Started?
            </p>

            <h3 className="mt-1.5 text-lg font-bold leading-tight text-white sm:mt-2 sm:text-xl md:text-2xl">
              Take the first step towards better movement.
            </h3>

          </div>

          <Link
            to="/appointment"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#AE2580] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8E1E68] sm:w-auto sm:py-3.5 sm:text-base"
          >
            Book Appointment
            <span className="text-lg">→</span>
          </Link>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-4 text-[11px] text-white/40 sm:px-6 sm:py-5 sm:text-sm md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} MBS Mind Body Soul. All rights reserved.
          </p>

          <p>
            Chiropractor & Spine Specialist
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;