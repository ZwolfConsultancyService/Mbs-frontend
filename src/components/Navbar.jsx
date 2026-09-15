import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/mbslogo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="MBS Mind Body Soul"
            className="h-14 w-auto object-contain"
          />
        </Link>


        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

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

          {/* Gallery - unchanged */}
          <a
            href="/gallery"
            className="font-medium text-dark transition hover:text-brand"
          >
            Gallery
          </a>

          {/* Book Appointment */}
          <Link
            to="/appointment"
            className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Book Appointment
          </Link>

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

            <Link
              to="/"
              className="font-medium text-dark"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="font-medium text-dark"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to="/treatments"
              className="font-medium text-dark"
              onClick={() => setIsOpen(false)}
            >
              Treatments
            </Link>

            {/* Gallery - unchanged */}
            <a
              href="/gallery"
              className="font-medium text-dark"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>

            {/* Book Appointment */}
            <Link
              to="/appointment"
              className="rounded-lg bg-brand px-5 py-3 text-center font-semibold text-white"
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