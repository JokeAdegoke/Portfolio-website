import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ReactTyped } from "react-typed";
import { Instagram, Mail, PhoneIcon } from 'lucide-react';
import Logo from './assets/images/logo/logo.png';
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
import Cert from './assets/images/Cert.jpg';
import './App.css';
import { initHeroBackground } from './js/hero-bg';

const SECTIONS = ['services', 'about', 'clients', 'reviews', 'contact'];

const App = () => {
  const [current, setCurrent] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const interval = setInterval(() => {
    const container = document.getElementById("hero-bg");
    if (container) {
      initHeroBackground("hero-bg");
      clearInterval(interval);
    }
  }, 100); // Check every 100ms

  return () => clearInterval(interval); // Clean up if component unmounts
}, []);
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
  {
    title: "SOCIAL MEDIA MARKETING",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?cs=srgb&dl=pexels-tracy-le-blanc-67789-607812.jpg&fm=jpg (Pexels)",
    description: `We help your brand grow with personalized social media strategies. Here's how we help:
    
    • Custom Strategy: Tailored plans for organic growth.

    • Influencer Marketing: Connecting with the right influencers to expand your reach.

    • Marketing Consultation: Expert advice to optimize your social presence.

    • Ads Targeting: Precise and detailed ads that convert.

    • Graphic Design: Eye-catching visuals that elevate your brand.

    • Analytics: Insights to refine and optimize performance.

    With us, it's not just about posting; it's about creating real, measurable growth for your brand.`
  },
  {
    title: "CONTENT CREATION",
    image: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?cs=srgb&dl=pexels-cowomen-1058097-2041396.jpg&fm=jpg (Pexels)",
    description: "At BILDUP, we don't just create content; we create conversations. Our Content Creation Service is designed to spark interest, foster engagement, and make your brand unforgettable. From killer visuals that stop the scroll to compelling captions that drive action, we craft every piece with your audience in mind. We make sure your content is not just seen, but felt—creating a real connection that moves the needle. Ready to turn your social media into a powerful tool? Let us handle the creation"
  },
  {
    title: "UGC & INFLUENCER MARKETING MANAGEMENT",
    image: "https://images.pexels.com/photos/6954135/pexels-photo-6954135.jpeg?cs=srgb&dl=pexels-george-milton-6954135.jpg&fm=jpg (Pexels)",
    description: "At BILDUP, we make influencers your brand's secret weapon. We identify the right creators, manage authentic collaborations, and ensure every partnership drives real results. It's influencer marketing done right—simple, strategic, and effective."
  },
  {
    title: "PAID ADS & PERFORMANCE MARKETING",
    image: "https://images.pexels.com/photos/15096572/pexels-photo-15096572.jpeg?cs=srgb&dl=pexels-srijonism-15096572.jpg&fm=jpg (Pexels)",
    description: "Maximize your ROI with expertly managed paid ad campaigns on platforms like Google, Meta, and beyond. We turn clicks into conversions."
  },
  {
    title: "DATA ANALYTICS & AUDIENCE INSIGHTS",
    image: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?cs=srgb&dl=pexels-negativespace-97080.jpg&fm=jpg (Pexels)",
    description: "Harness the power of data to understand your audience and refine your strategies for optimal performance and measurable results while you enjoy the results."
  },
  {
    title: "ONLINE REPUTATION MANAGEMENT",
    image: "https://images.pexels.com/photos/11894045/pexels-photo-11894045.jpeg?cs=srgb&dl=pexels-towfiqu-barbhuiya-3440682-11894045.jpg&fm=jpg (Pexels)",
    description: "afeguard your brand's image with proactive reputation management, ensuring trust and credibility in the digital landscape."
  },
  {
    title: "PERSONAL BRANDING & MANAGEMENT",
    image: "https://images.pexels.com/photos/13375849/pexels-photo-13375849.jpeg?cs=srgb&dl=pexels-sandro-tavares-260503371-13375849.jpg&fm=jpg (Pexels)",
    description: "Empower leaders, public figures, celebrities and professionals with strong, authentic personal brands that stand out in their industries."
  },
  {
    title: "BRAND DEVELOPMENT & STRATEGY",
    image: "https://images.pexels.com/photos/3727511/pexels-photo-3727511.jpeg?cs=srgb&dl=pexels-shvetsa-3727511.jpg&fm=jpg (Pexels)",
    description: "Build a brand that stands the test of time with comprehensive strategy, identity design, and market positioning services."
  },
  {
    title: "MARKETING & CONTENT STRATEGY",
    image: "https://images.pexels.com/photos/7710055/pexels-photo-7710055.jpeg?cs=srgb&dl=pexels-a-darmel-7710055.jpg&fm=jpg (Pexels)",
    description: "Develop a roadmap to success with strategies that align your brand's goals with actionable, impactful campaigns."
  },
  {
    title: "TRAINING & WORKSHOPS",
    image: "https://images.pexels.com/photos/8761351/pexels-photo-8761351.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8761351.jpg&fm=jpg (Pexels)",
    description: "We empower social media managers, business owners, and their teams with their skills and strategies needed to master social media. From creating impactful content to building  engagement, our customized sessions are practical, results-driven. and tailored to meet your goals."
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION (SEO)",
    image: "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?cs=srgb&dl=pexels-caio-67112.jpg&fm=jpg (Pexels)",
    description: "Boost your online visibility and rank higher on search engines with our precision-driven SEO strategies, ensuring your brand stands out."
  },
  {
    title: "EXPERIENCE IDEATION & DESIGN",
    image: "https://images.pexels.com/photos/6648439/pexels-photo-6648439.jpeg?cs=srgb&dl=pexels-cottonbro-6648439.jpg&fm=jpg (Pexels)",
    description: "Bring your brand to life with experiential concepts and designs that leave lasting impressions. From virtual to real-world activations, we craft experiences that captivate."
  },
  {
    title: "BRAND NARRATIVE & STORYTELLING",
    image: "https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?cs=srgb&dl=pexels-divinetechygirl-1181311.jpg&fm=jpg",
    description: "Craft compelling stories that connect emotionally with your audience. From brand messaging to content strategy, we help you tell your story in a way that resonates."
  },
];




  const clientReviews = [
    { name: "Nike Oyedeji", company: "CEO Of KITCHEN234", review: "My overall experience working with BildUp was excellent. You demonstrated a clear understanding of my brand and target audience, consistently delivering creative and well-aligned strategies. Your professionalism, attention to detail, and innovative approach were instrumental in strengthening my business's online presence." },
    { name: "Mr Chucs Ahiakwo", company: "KashRite", review: "Joke contributed much value to my organization, helping us stay in the customer's face and to do business with us. Co-founder of KashRite" },
    { name: "Mr Oghenetega Michael Onodarho", company: "Founder & CEO, Integrated Healthcare Professionals Ltd", review: "She consistently delivers excellent marketing and social media results for my UK customers." }
  ];

  const images = [kfc, dal, andrews, ashar, boutique, happy, kashrite, ihp, kitchen];

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
          className="h-20 md:h-24 lg:h-28 w-auto max-w-[240px] transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_10px_#feb3eb]"
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
          {/* <section id="hero" className="section hero">
            <div className="hero-content">
              <h1 className="hero-title">Welcome to Bildup Marketing Agency! <br/>
              </h1>
              <h1 className="hero-sub-title-1">8 years of delivering: <br/></h1>

              <h3 className="hero-sub-title">Data-Driven Disruption</h3>
              <h3 className="hero-sub-title">Compelling Stories</h3>
              <h3 className="hero-sub-title">Tailored Strategies</h3>
              <h3 className="hero-sub-title">Measurable Success</h3>
              <h3 className="hero-sub-title">Comprehensive Planning</h3>
              <h3 className="hero-sub-title">Strategic Insight</h3>
              <h3 className="hero-sub-title">Digital Transformation</h3>
              <h3 className="hero-sub-title">Expert Management</h3>
              <h3 className="hero-sub-title">Innovative Campaigns</h3>
            </div>
          </section> */}

          <section id="hero" className="hero-section">
            <div id="hero-bg" className="hero-webgl-bg"></div>
            <div className="hero-content">
              <h1 className="hero-title">
                Welcome to <span>Bildup Marketing Agency</span>
              </h1>
              <h2 className="hero-tagline">8 Years of Delivering:</h2>
              
              <ul className="hero-bullets">
                <li>Data-Driven Disruption</li>
                <li>Compelling Stories</li>
                <li>Tailored Strategies</li>
                <li>Measurable Success</li>
                <li>Comprehensive Planning</li>
                <li>Strategic Insight</li>
                <li>Digital Transformation</li>
                <li>Expert Management</li>
                <li>Innovative Campaigns</li>
              </ul>

            </div>
          </section>

          {/* Services */}
          <section id="services" className="section services-modern">
            <motion.h2 
              className="section-title" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h2>

            <div className="services-list">
              {services.map((s, i) =>
                (
                <motion.div 
                  key={i} 
                  className="service-row"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="service-img-wrapper">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="service-img" 
                    />
                  </div>
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
                <h2 className="about-title">Why BildUp</h2>
                <p className="about-description">
                  <span className="glow-text">Tailored Strategies. Proven Impact. </span>
                  We craft solutions tailored to your brand's unique goals, ensuring every move delivers measurable impact.
                </p>
                
                <p className="about-description">
                  <span className="glow-text">Results, Not Hype. </span>
                  We focus on what works, cutting through the noise to deliver real outcomes that matter to your growth.
                </p>

                <p className="about-description">
                  <span className="glow-text">ROI-Driven Pricing. </span>
                  No hidden costs—our pricing is designed to maximize your ROI, ensuring value at every step.
                </p>

                <p className="about-description">
                  <span className="glow-text">Built for Visionaries & Innovators. </span>
                  We partner with forward-thinking brands ready to challenge norms and lead in their industries.
                </p>

                <p className="about-description">
                  <span className="glow-text">Global Expertise. </span>
                  With a presence across the UK, USA, Canada, Dubai, Gambia, Zambia, and Nigeria, we bring international insights and a world-class perspective to every project.
                </p>

                <p className="about-description">
                  <span className="glow-text">Data-Driven Growth. </span>
                  We leverage analytics and insights to drive smarter decisions, helping your brand grow sustainably and profitably.
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

          <section id="about-cim" className="about-cim-section">
            <div className="about-container">
              <motion.div 
                className="about-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="about-cim-description">
                  <h2 className="about-cim-title"> We are CIM (The Chartered Institute of Marketing) Certified! </h2>
                  As CIM-certified professionals, we deliver unparalleled marketing expertise. What does this mean for your business? It means strategies that drive real growth, Bildup your brand, campaigns that resonate, and a clear path to achieving your goals.
                </p>
              </motion.div>

              <motion.div 
                className="about-image-wrapper"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="about-cim-image-placeholder">
                  <img src={Cert} />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Clients */}
          <section id="clients" className="section clients">
            <motion.h2 className="section-title" initial={{ opacity:0 }} whileInView={{ opacity:1 }}>Our Clients</motion.h2>
            <div className="grid client-grid">
              {images.map((img,i)=>(
                <motion.img key={i} src={img} alt="" className="client-logo"
                  initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} transition={{delay: i*0.1}}/>
              ))}
            </div>
          </section>

          <section id="reviews" className="reviews-section">
          <motion.h2 
            className="section-title-1"
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
            {/* Visual Placeholder */}
            <motion.div
              className="contact-visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="contact-image-placeholder">
                <div className="neon-circle-animation">
                  <span className="pulse-text">📡</span>
              </div>
              </div>
            </motion.div>

            {/* Contact Text */}
            <motion.div
              className="contact-text"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="contact-title">Let's Build the Future</h2>
              <p className="contact-description">
                Have a project in mind?
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
          </div>
        </section>

        </main>
      </div>
    </ParallaxProvider>
  );
}

export default App;
