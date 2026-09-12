import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo / Brand */}
        <a href="/" className="flex items-center">
          <div>
            <div className="text-2xl font-bold text-brand">MBS</div>
            <div className="text-xs tracking-widest text-gray-500">
              MIND BODY SOUL
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="font-medium text-dark transition hover:text-brand"
          >
            Home
          </a>

          <a
            href="/about"
            className="font-medium text-dark transition hover:text-brand"
          >
            About
          </a>

          <a
            href="/treatments"
            className="font-medium text-dark transition hover:text-brand"
          >
            Treatments
          </a>

          <a
            href="/contact"
            className="font-medium text-dark transition hover:text-brand"
          >
            Contact
          </a>

          <a
            href="/appointment"
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-brand md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="/" className="font-medium text-dark">
              Home
            </a>

            <a href="/about" className="font-medium text-dark">
              About
            </a>

            <a href="/treatments" className="font-medium text-dark">
              Treatments
            </a>

            <a href="/contact" className="font-medium text-dark">
              Contact
            </a>

            <a
              href="/appointment"
              className="rounded-lg bg-brand px-5 py-3 text-center font-semibold text-white"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;