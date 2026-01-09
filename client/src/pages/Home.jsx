import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import TrustedSection from "../components/TrustedSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import Pricing from "../pricing/Pricing.jsx";
import ContactForm from "../Contact/ContactForm.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Pricing />
      <ContactForm />
    </>
  );
}
