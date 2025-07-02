import React, { useState, useEffect } from 'react';
import { Instagram, Mail, Facebook, Youtube, Globe, ArrowRight } from 'lucide-react';
import Logo from './assets/images/logo/logo.png'
import FooterLogo from './assets/images/logo/footer-logo.png'
import andrews from './assets/images/brands/andrews.jpg';
import ashar from './assets/images/brands/ashar.jpg';
import boutique from './assets/images/brands/boutique.jpg';
import dal from './assets/images/brands/dark-and-lovely.jpg';
import happy from './assets/images/brands/happy-poppers.jpg';
import kashrite from './assets/images/brands/kashrite.jpg';
import ihp from './assets/images/brands/ihp.jpg';
import kfc from './assets/images/brands/kfc.jpg';
import kitchen from './assets/images/brands/kitchen.jpg';
import Image from './assets/images/Image.jpg';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');

  const images = [andrews, ashar, boutique, dal, happy, kashrite, ihp, kfc, kitchen];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppRedirect = () => {
    // Replace this with your actual WhatsApp number
    const whatsappNumber = '+2347087782222';
    const message = 'Hello! I\'m interested in working with BildUp.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      title: "Strategic Brand Consulting",
      description: "Comprehensive brand strategy development and consulting services to elevate your market presence."
    },
    {
      title: "Digital Marketing",
      description: "Data-driven digital marketing solutions that drive engagement and conversion."
    },
    {
      title: "Creative Services",
      description: "Innovative design and content creation that brings your brand story to life."
    },
    {
      title: "Political Frontier & Marketing",
      description: "Specialized marketing strategies for political campaigns and public initiatives."
    }
  ];

  const clientReviews = [
    {
      name: "Nike Oyedeji",
      company: "CEO Of KITCHEN234",
      review: "My overall experience working with you was excellent. You demonstrated a clear understanding of my brand and target audience, consistently delivering creative and well-aligned strategies. Your professionalism, attention to detail, and innovative approach were instrumental in strengthening my business's online presence."
    },
    {
      name: "Mr Chucs Ahiakwo",
      company: "KashRite",
      review: "Joke contributed much value to my organisation, helping us stay in the customer's face and to do business with us. Co-founder of KashRite"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#181818] to-[#ff6b00]/10 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <img src={Logo} alt="BildUp Logo" className="h-24 md:h-32 transition-all" />
          <div className="flex items-center gap-8">
            <a
              href="#services"
              className={`font-medium transition-colors hidden md:inline ${
                isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`font-medium transition-colors hidden md:inline ${
                isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'
              }`}
            >
              About
            </a>
            <a
              href="#clients"
              className={`font-medium transition-colors hidden md:inline ${
                isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'
              }`}
            >
              Clients
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors hidden md:inline ${
                isScrolled ? 'text-gray-900 hover:text-orange-500' : 'text-white hover:text-orange-400'
              }`}
            >
              Contact
            </a>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-full shadow-lg font-semibold transition-all"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none">
          {/* Modern SVG background */}
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="radial" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#radial)" />
            <circle cx="1200" cy="200" r="180" fill="#ff6b00" fillOpacity="0.07" />
            <circle cx="300" cy="700" r="120" fill="#ff6b00" fillOpacity="0.04" />
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Elevate Your Digital Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
            I craft magnetic brands, viral content, and digital experiences that set you apart in a noisy world.
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-10 py-4 rounded-full text-lg font-bold shadow-xl text-white flex items-center justify-center mx-auto gap-2 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 tracking-tight">
            What I Do Best
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform group">
                <h3 className="text-2xl font-bold mb-4 text-orange-600 group-hover:text-pink-600 transition-colors">{service.title}</h3>
                <p className="text-gray-700 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white via-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 flex justify-center">
            <img src={Image} alt="Founder" className="w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-orange-100" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">Meet Joke</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi, I'm Joke — a digital content expert, brand storyteller, and creative strategist. I help brands, creators, and organizations build magnetic digital identities, craft viral campaigns, and connect with audiences in ways that matter.
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
              <li>• 10+ years in digital content, branding, and marketing</li>
              <li>• Award-winning campaigns for global and local brands</li>
              <li>• Passionate about innovation, culture, and results</li>
            </ul>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all"
            >
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section id="clients" className="py-28 bg-gradient-to-br from-white via-orange-50 to-pink-50 relative overflow-hidden">
        {/* Animated background shapes for visual interest */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-900 tracking-tight">
            Trusted by Leading Brands
          </h2>
          <p className="text-center text-lg md:text-xl text-gray-600 mb-14 max-w-2xl mx-auto">
            I’ve partnered with innovative brands and organizations to create digital experiences that inspire, engage, and deliver results. Here are just a few:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            {images.map((img, i) => (
              <div
                key={i}
                className="group bg-white/80 rounded-xl shadow-lg p-4 flex items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-orange-100"
              >
                <img
                  src={img}
                  alt={`Client ${i + 1}`}
                  className="h-20 w-auto object-contain grayscale group-hover:grayscale-0 group-hover:opacity-100 opacity-80 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6">
            <span className="text-gray-700 text-lg">Want to join this list?</span>
            <button
              onClick={handleWhatsAppRedirect}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-900">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {clientReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-orange-400">
                <p className="text-lg text-gray-700 italic mb-6">“{review.review}”</p>
                <div className="flex items-center gap-4">
                  {/* <img
                    src="https://www.svgrepo.com/show/382106/avatar-boy.svg"
                    //alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-orange-200 bg-white object-cover"
                  /> */}
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 bg-[#0a0a0a] text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Ready to Make Your Mark?
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Let's create something unforgettable. Reach out for a free consultation or just say hi!
          </p>
          <button
            onClick={handleWhatsAppRedirect}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-10 py-4 rounded-full text-lg font-bold shadow-xl text-white flex items-center justify-center mx-auto gap-2 group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <img src={FooterLogo} alt="BildUp Logo" className="h-16 md:h-20" />
          <div className="flex gap-6">
            <a href="https://www.instagram.com/bildupng?igsh=MWx6ZTdxczA3YXUzbw==" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 text-orange-500 hover:text-pink-500 transition-colors" />
            </a>
            <a href="mailto:Info@bildup.net">
              <Mail className="w-6 h-6 text-orange-500 hover:text-pink-500 transition-colors" />
            </a>
            {/* <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-orange-500 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 text-orange-500 hover:text-pink-500 transition-colors" />
            </a> */}
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} BildUp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;