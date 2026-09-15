
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/mbslogo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MBS Mind Body Soul"
            className="h-11 w-auto object-contain sm:h-14"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">

          <Link
            to="/"
            className="font-medium text-dark transition hover:text-brand"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-medium text-dark transition hover:text-brand"
          >
            About
          </Link>

          <Link
            to="/treatments"
            className="font-medium text-dark transition hover:text-brand"
          >
            Treatments
          </Link>

          {/* Gallery */}
          <Link
            to="/gallery"
            className="font-medium text-dark transition hover:text-brand"
          >
            Gallery
          </Link>

          <Link
            to="/appointment"
            className="rounded-lg bg-brand px-4 py-2.5 font-semibold text-white transition hover:bg-brand-dark lg:px-5 lg:py-3"
          >
            Book Appointment
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-brand md:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 shadow-sm md:hidden">

          <div className="flex flex-col gap-1">

            <Link
              to="/"
              className="rounded-lg px-3 py-2.5 font-medium text-dark transition hover:bg-[#FAF7F9] hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="rounded-lg px-3 py-2.5 font-medium text-dark transition hover:bg-[#FAF7F9] hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/treatments"
              className="rounded-lg px-3 py-2.5 font-medium text-dark transition hover:bg-[#FAF7F9] hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              Treatments
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className="rounded-lg px-3 py-2.5 font-medium text-dark transition hover:bg-[#FAF7F9] hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>

            <Link
              to="/appointment"
              className="mt-2 rounded-lg bg-brand px-4 py-2.5 text-center font-semibold text-white transition hover:bg-brand-dark"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
