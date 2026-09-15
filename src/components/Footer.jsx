const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="inline-block">
              <h2 className="text-4xl font-black tracking-tight text-[#AE2580]">
                MBS
              </h2>

              <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-white/60">
                MIND BODY SOUL
              </p>

              <p className="mt-1 text-[10px] tracking-[0.2em] text-white/40">
                ALTERNATIVE MEDICINE HEALTH SOLUTIONS
              </p>
            </div>

            <p className="mt-7 max-w-xs text-sm leading-7 text-white/55">
              Personalised care focused on understanding your condition,
              supporting better movement and improving your overall well-being.
            </p>

            {/* Brand Line */}
            <div className="mt-7 h-1 w-14 rounded-full bg-[#AE2580]" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="/"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Home
              </a>

              <a
                href="/about"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                About Us
              </a>

              <a
                href="/treatments"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Treatments
              </a>

              <a
                href="/gallery"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Gallery
              </a>

              <a
                href="/appointment"
                className="text-sm text-white/55 transition hover:translate-x-1 hover:text-[#AE2580]"
              >
                Book Appointment
              </a>

            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Treatments
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">

              <a
                href="/treatments/sciatica"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Sciatica
              </a>

              <a
                href="/treatments/slip-disc"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Slip Disc
              </a>

              <a
                href="/treatments/back-pain"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Back Pain
              </a>

              <a
                href="/treatments/knee-pain"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Knee Pain
              </a>

              <a
                href="/treatments/cervical"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Cervical
              </a>

              <a
                href="/treatments/frozen-shoulder"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Frozen Shoulder
              </a>

              <a
                href="/treatments/migraine"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Migraine
              </a>

              <a
                href="/treatments/headache"
                className="text-sm text-white/55 transition hover:text-[#AE2580]"
              >
                Headache
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5">

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#AE2580]/15 text-[#AE2580]">
                  📍
                </div>

                <p className="text-sm leading-6 text-white/55">
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
                className="flex gap-4 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#AE2580]/15 text-[#AE2580] transition group-hover:bg-[#AE2580] group-hover:text-white">
                  ☎
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white/60 transition group-hover:text-[#AE2580]">
                    +91 80765 69626
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:abyssindia.edu@gmail.com"
                className="flex gap-4 group"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#AE2580]/15 text-[#AE2580] transition group-hover:bg-[#AE2580] group-hover:text-white">
                  ✉
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-white/30">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-white/60 transition group-hover:text-[#AE2580]">
                    abyssindia.edu@gmail.com
                  </p>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Appointment Banner */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-7 md:flex-row md:items-center md:px-9">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#AE2580]">
              Ready to Get Started?
            </p>

            <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
              Take the first step towards better movement.
            </h3>
          </div>

          <a
            href="/appointment"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#AE2580] px-6 py-3.5 font-semibold text-white transition hover:bg-[#8E1E68]"
          >
            Book Appointment
            <span className="text-lg">→</span>
          </a>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">

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