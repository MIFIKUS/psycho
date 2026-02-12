
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Relationships from './components/Relationships';
import About from './components/About';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Principles from './components/Principles';
import CounselingInfo from './components/CounselingInfo';
import FindingSpecialist from './components/FindingSpecialist';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-24 md:py-40 bg-white border-b border-stone-50">
          <About />
        </section>

        <section id="principles" className="py-24 md:py-40 bg-[#faf9f6]">
          <Principles />
        </section>

        <section id="services" className="py-24 md:py-40 bg-white overflow-hidden">
          <Services />
        </section>

        <section id="counseling" className="py-24 md:py-40 bg-[#faf9f6]">
          <CounselingInfo />
        </section>

        <section id="relationships" className="py-24 md:py-40 bg-white">
          <Relationships />
        </section>

        <section id="finding" className="py-24 md:py-40 bg-[#faf9f6]">
          <FindingSpecialist />
        </section>

        <section id="testimonials" className="py-24 md:py-40 bg-white">
          <Testimonials />
        </section>

        <section id="contact" className="py-24 md:py-40 bg-white border-t border-stone-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
