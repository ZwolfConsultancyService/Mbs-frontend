import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

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
import TreatmentDetail from "./pages/TreatmentDetail";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import GalleryPage from "./pages/GalleryPage";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function Home() {
  return (
    <>
      <Helmet>
        <title>
          MBS Health Solutions & Chiropractic | Holistic Health Care
        </title>

        <meta
          name="description"
          content="MBS Health Solutions & Chiropractic provides personalised holistic health and therapy care with Dr. Pawan Srivastava."
        />
      </Helmet>

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

      <ScrollToTop />

      <Routes>

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================= ALL TREATMENTS ================= */}

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


        {/* ================= TREATMENT DETAIL ================= */}

        <Route
          path="/treatments/:slug"
          element={
            <>
              <Navbar />
              <TreatmentDetail />
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


        {/* ================= GALLERY ================= */}

        <Route
          path="/gallery"
          element={
            <>
              <Navbar />
              <GalleryPage />
              <Footer />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;