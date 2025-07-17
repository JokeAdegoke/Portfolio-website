import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ReactTyped } from "react-typed";
import { Instagram, Mail, Facebook, Youtube, Globe, ArrowRight, PhoneIcon } from 'lucide-react';
import Logo from './assets/images/logo/logo.png';
import FooterLogo from './assets/images/logo/footer-logo.png';
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
import './App.css';

const SECTIONS = ['services', 'about', 'clients', 'reviews', 'contact'];

const App = () => {
  const [current, setCurrent] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = id => {
    setMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setCurrent(id);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappNumber = '+2347087782222';
    const message = 'Hello! I\'m interested in working with BildUp.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { title: "Strategic Brand Consulting", description: "Comprehensive brand strategy development and consulting services to elevate your market presence." },
    { title: "Digital Marketing", description: "Data-driven digital marketing solutions that drive engagement and conversion." },
    { title: "Creative Services", description: "Innovative design and content creation that brings your brand story to life." },
    { title: "Political Frontier & Marketing", description: "Specialized marketing strategies for political campaigns and public initiatives." }
  ];

  const clientReviews = [
    { name: "Nike Oyedeji", company: "CEO Of KITCHEN234", review: "My overall experience working with BildUp was excellent. You demonstrated a clear understanding of my brand and target audience, consistently delivering creative and well-aligned strategies. Your professionalism, attention to detail, and innovative approach were instrumental in strengthening my business's online presence." },
    { name: "Mr Chucs Ahiakwo", company: "KashRite", review: "Joke contributed much value to my organization, helping us stay in the customer's face and to do business with us. Co-founder of KashRite" }
  ];

  const images = [andrews, ashar, boutique, dal, happy, kashrite, ihp, kfc, kitchen];

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="h-16 w-16 border-4 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <ParallaxProvider>
      <div className="App font-sans text-gray-900">
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
          <img
          src={Logo}
          alt="Logo"
          className="h-20 md:h-24 lg:h-28 w-auto max-w-[240px] transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        />
          <div className="nav-links">
            {SECTIONS.map(id => (
              <button key={id}
                className={`nav-link ${current===id?'active':''}`}
                onClick={() => scrollTo(id)}>
                {id}
              </button>
            ))}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="w-6"/> : <Bars3Icon className="w-6"/>}
          </button>
        </nav>

        {menuOpen && (
          <motion.div className="mobile-menu"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
            {SECTIONS.map(id => (
              <button key={id} className="mobile-link" onClick={() => scrollTo(id)}>
                {id}
              </button>
            ))}
          </motion.div>
        )}

        <main>
          {/* Hero */}
          <section id="hero" className="section hero">
            <div className="hero-content">
              <h1 className="hero-title">We build <br/>
                <ReactTyped strings={['digital products.', 'brands.', 'experiences.']} typeSpeed={60} backSpeed={30} loop />
              </h1>
              <div className="underline"></div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="section services-modern">
            <motion.h2 
              className="section-title" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.6 }}>
              Our Capabilities
            </motion.h2>

            <div className="services-list">
              {services.map((s, i) => (
                <motion.div 
                  key={i} 
                  className="service-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="service-index">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="service-details">
                    <h3 className="service-title">{s.title}</h3>
                    <p className="service-desc">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="about" className="about-section">
          <div className="about-container">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="about-title">Who We Are</h2>
              <p className="about-description">
                At <span className="glow-text">BildUp</span>, we don't just build brands — we engineer digital experiences that pulse with innovation and intelligence.
                From immersive web platforms to data-driven content, our team merges creativity with cutting-edge tech to give your business a bold digital voice.
              </p>
              <p className="about-description">
                Every pixel, every word, every interaction is crafted with intention. We believe in <span className="highlight">powerful design</span>, 
                <span className="highlight">measurable growth</span>, and <span className="highlight">lasting impact</span>.
              </p>
            </motion.div>

            <motion.div 
              className="about-image-wrapper"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-image-placeholder">
                <img src={Image} />
              </div>
            </motion.div>
          </div>
        </section>

          {/* Clients */}
          <section id="clients" className="section clients">
            <motion.h2 className="section-title" initial={{ opacity:0 }} whileInView={{ opacity:1 }}>Clients</motion.h2>
            <div className="grid client-grid">
              {images.map((img,i)=>(
                <motion.img key={i} src={img} alt="" className="client-logo"
                  initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} transition={{delay: i*0.1}}/>
              ))}
            </div>
          </section>

          <section id="reviews" className="reviews-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>

          <div className="reviews-wrapper">
            {clientReviews.map((review, i) => (
              <motion.div 
                key={i}
                className="review-tile"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="quote-mark">“</div>
                <p className="review-text"> {review.review} </p>
                <div className="review-meta">
                  <span className="review-name">{review.name}</span> — <span className="review-company">{review.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

         <section id="contact" className="contact-section">
          <div className="contact-container">
            {/* Contact Text */}
            <motion.div
              className="contact-text"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="contact-title">Let's Build the Future</h2>
              <p className="contact-description">
                Have a project in mind? Whether it's branding, web design, or launching something revolutionary,
                we're excited to bring your ideas to life. Reach out and let's make magic together.
              </p>

              {/* CTA Button Group */}
              <div className="cta-buttons">
                <a
                  href="mailto:Info@bildup.net"
                  className="cta-button glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="cta-icon" />
                  Email Us
                </a>
                <a
                  href="https://www.instagram.com/bildupng?igsh=MWx6ZTdxczA3YXUzbw=="
                  className="cta-button glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="cta-icon" />
                  DM on Instagram
                </a>
                <a
                  onClick={handleWhatsAppRedirect}
                  className="cta-button glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon className="cta-icon" />
                  DM on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Visual Placeholder */}
            <motion.div
              className="contact-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-image-placeholder">
                <div className="neon-circle-animation">
                  <span className="pulse-text">📡 Let's Talk</span>
              </div>
              </div>
            </motion.div>
          </div>
        </section>

        </main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
