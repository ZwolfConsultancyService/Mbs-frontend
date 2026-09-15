import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PersonalisedCare from "./components/PersonalisedCare";
import TreatmentsSection from "./components/TreatmentsSection";
import DoctorSection from "./components/DoctorSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import YoutubeSection from "./components/YoutubeSection";
import Gallery from "./components/Gallery";

import Treatments from "./pages/Treatments";
import About from "./pages/About";
import Appointment from "./pages/Appointment";


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <PersonalisedCare />

      <TreatmentsSection />

      <DoctorSection />

      <TestimonialsSection />

      <YoutubeSection />

      <CTASection />

      <Gallery />

      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= TREATMENTS ================= */}
        <Route
          path="/treatments"
          element={
            <>
              <Navbar />
              <Treatments />
              <Footer />
            </>
          }
        />


        {/* ================= ABOUT ================= */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />


        {/* ================= APPOINTMENT ================= */}
        <Route
          path="/appointment"
          element={
            <>
              <Navbar />
              <Appointment />
              <Footer />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;