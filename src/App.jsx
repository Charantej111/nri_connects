import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ServiceDetailPage from './components/ServiceDetailPage';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import AboutUsSection from './components/AboutUsSection';
import AboutUsPage from './components/AboutUsPage';
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
import MobileBottomNav from './components/MobileBottomNav';

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
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] font-sans antialiased text-slate-800 selection:bg-emerald-600 selection:text-white pb-16 lg:pb-0">
      
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
            <AboutUsPage 
              setActivePage={setActivePage}
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
      <Footer 
        setActivePage={setActivePage} 
        setLegalTab={setLegalTab} 
        onSelectService={(svc) => setSelectedService(svc)}
      />

      {/* App-like Mobile Sticky Bottom Navigation */}
      <MobileBottomNav
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBookingModal={() => setBookingModalOpen(true)}
      />

      {/* Quick Booking & Consultation Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* STICKY FLOAT ACTIONS IN BOTTOM RIGHT (Desktop view) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col space-y-3">
        
        {/* WhatsApp Sticky Float Chat Button */}
        <a
          href="https://wa.me/919885880017"
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 p-3"
          title="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.776 0-3.517-.476-5.045-1.378l-.362-.214-3.75.983.999-3.657-.235-.374a9.98 9.98 0 01-1.503-5.279c0-5.516 4.487-10 10-10 2.673 0 5.186 1.041 7.076 2.93 1.89 1.889 2.93 4.403 2.93 7.076 0 5.517-4.488 10-10 10m0-18c-4.411 0-8 3.589-8 8 0 1.547.44 3.036 1.272 4.316l.169.26-.843 3.087 3.16-.828.256.152A7.962 7.962 0 0012.051 20c4.411 0 8-3.589 8-8s-3.589-8-8-8" />
          </svg>
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
