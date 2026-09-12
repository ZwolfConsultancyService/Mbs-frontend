import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PersonalisedCare from "./components/PersonalisedCare";
import TreatmentsSection from "./components/TreatmentsSection";
import DoctorSection from "./components/DoctorSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PersonalisedCare />
      <TreatmentsSection />
      <DoctorSection />
      <TestimonialsSection />
      <CTASection/>
      <Footer/>
    </>
  );
}

export default App;