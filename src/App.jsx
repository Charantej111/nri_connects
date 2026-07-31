import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ServiceDetailPage from './components/ServiceDetailPage';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import AboutUsSection from './components/AboutUsSection';
import GallerySection from './components/GallerySection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import PaymentPage from './components/PaymentPage';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';
import LegalPages from './components/LegalPages';
import FaqSection from './components/FaqSection';
import { SERVICES_CATALOG } from './data/nriContent';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home'); 
  const [selectedService, setSelectedService] = useState(SERVICES_CATALOG[0]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [legalTab, setLegalTab] = useState('privacy');

  // Monitor scroll to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fail-safe scroll reveal observer that triggers on window and container scrolls
  useEffect(() => {
    document.documentElement.classList.add('js-enabled');

    const handleScrollReveal = () => {
      const elements = document.querySelectorAll('.reveal-fade-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top;
        if (elementTop < window.innerHeight * 0.9) {
          el.classList.add('revealed');
        }
      });
    };

    // Bind scroll and resize listeners in capture mode to catch scrolls inside sub-panels
    window.addEventListener('scroll', handleScrollReveal, true);
    window.addEventListener('resize', handleScrollReveal, true);
    
    // Run once immediately on navigation
    handleScrollReveal();
    const timer = setTimeout(handleScrollReveal, 350);

    return () => {
      window.removeEventListener('scroll', handleScrollReveal, true);
      window.removeEventListener('resize', handleScrollReveal, true);
      clearTimeout(timer);
    };
  }, [activePage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] font-sans antialiased text-slate-800 selection:bg-emerald-600 selection:text-white">
      
      {/* Sticky Header with Services Dropdown */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        onOpenBookingModal={() => setBookingModalOpen(true)}
        onSelectService={(svc) => setSelectedService(svc)}
      />

      {/* Main Dynamic Router Content */}
      <main className="flex-1" key={activePage}>
        <div className="animate-fadeIn">
        {activePage === 'home' && (
          <>
            {/* Landing Hero with dynamic loop slider */}
            <HeroSection 
              setActivePage={setActivePage}
              onOpenBookingModal={() => setBookingModalOpen(true)}
            />
            
            {/* Service Cards Catalog */}
            <ServicesSection 
              onSelectService={(svc) => setSelectedService(svc)}
              setActivePage={setActivePage}
              onOpenBookingModal={() => setBookingModalOpen(true)}
            />

            {/* About Us (Collage & 2x2 grid) moved to Main Page */}
            <AboutUsSection 
              setActivePage={setActivePage}
              onOpenBookingModal={() => setBookingModalOpen(true)}
            />

            {/* Gallery Section */}
            <GallerySection 
              setActivePage={setActivePage} 
              onOpenBookingModal={() => setBookingModalOpen(true)}
            />

            <TestimonialsSection />

            {/* Latest News & Articles */}
            <NewsSection 
              setActivePage={setActivePage}
              onOpenBookingModal={() => setBookingModalOpen(true)}
            />

            <ContactSection setActivePage={setActivePage} />
          </>
        )}

        {activePage === 'services' && (
          <div className="pt-24 bg-white">
            <ServicesSection 
              onSelectService={(svc) => setSelectedService(svc)}
              setActivePage={setActivePage}
              onOpenBookingModal={() => setBookingModalOpen(true)}
            />
          </div>
        )}

        {activePage === 'service-detail' && (
          <ServiceDetailPage 
            service={selectedService}
            setActivePage={setActivePage}
            onOpenBookingModal={() => setBookingModalOpen(true)}
            onSelectService={setSelectedService}
          />
        )}

        {activePage === 'about' && (
          <div className="pt-16">
            <WhyChooseUs 
              onOpenBookingModal={() => setBookingModalOpen(true)}
            />
          </div>
        )}

        {activePage === 'gallery' && (
          <GallerySection 
            setActivePage={setActivePage} 
            onOpenBookingModal={() => setBookingModalOpen(true)}
          />
        )}

        {activePage === 'news' && (
          <NewsSection 
            setActivePage={setActivePage}
            onOpenBookingModal={() => setBookingModalOpen(true)}
          />
        )}

        {activePage === 'payment' && (
          <PaymentPage setActivePage={setActivePage} />
        )}

        {activePage === 'contact' && (
          <div className="pt-16">
            <ContactSection setActivePage={setActivePage} />
          </div>
        )}

        {activePage === 'login' && (
          <LoginPage setActivePage={setActivePage} />
        )}

        {activePage === 'signup' && (
          <SignUpPage setActivePage={setActivePage} />
        )}

        {activePage === 'legal' && (
          <LegalPages key={legalTab} defaultTab={legalTab} />
        )}

        {activePage === 'faq' && (
          <div className="pt-16">
            <FaqSection />
          </div>
        )}
        </div>
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} setLegalTab={setLegalTab} />

      {/* Quick Booking & Consultation Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* STICKY FLOAT ACTIONS IN BOTTOM RIGHT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        
        {/* WhatsApp Sticky Float Chat Button */}
        <a
          href="https://wa.me/919885880017"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>

        {/* Scroll back to top Float Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-fadeIn"
            title="Go to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

    </div>
  );
}
