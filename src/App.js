import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Instagram, Twitter, Linkedin, Palette, Megaphone, PenTool, BookOpen, ChevronDown, ArrowUpRight, Star } from 'lucide-react';

// Floating shapes for hero section background
const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`absolute animate-float-${i} opacity-20 rounded-full bg-gradient-to-br
          ${i % 2 === 0 ? 'from-pink-400 to-purple-500' : 'from-cyan-400 to-blue-500'}
          ${i % 3 === 0 ? 'w-32 h-32' : 'w-48 h-48'}`}
        style={{
          left: `${(i * 20) % 80}%`,
          top: `${(i * 15) % 70}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${8 + i * 2}s`
        }}
      />
    ))}
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentYear = new Date().getFullYear();

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Content Strategy",
      description: "Strategic content planning that drives engagement and conversions.",
      icon: <BookOpen className="w-8 h-8 text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Social Media Management",
      description: "Building your brand presence across all social platforms.",
      icon: <Megaphone className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Creative Copywriting",
      description: "Words that tell your story and inspire action.",
      icon: <PenTool className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Brand Voice Development",
      description: "Crafting your unique brand personality and tone.",
      icon: <Palette className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />,
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const portfolio = [
    {
      title: "Tech Startup Rebranding",
      category: "Content Strategy",
      description: "Complete content overhaul and brand voice development for an emerging tech startup.",
      metrics: ["400% engagement increase", "2M+ reach", "85% positive feedback"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Social Growth Campaign",
      category: "Social Media",
      description: "Strategic social media campaign for a sustainable fashion brand.",
      metrics: ["200K new followers", "1.5M impressions", "32% conversion rate"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce Copy Update",
      category: "Copywriting",
      description: "Website copy optimization for a leading e-commerce platform.",
      metrics: ["150% conversion boost", "45% bounce rate reduction", "3x sales"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const testimonials = [
    {
      text: "Sarah's approach to content strategy transformed our brand's digital presence. The results exceeded our expectations.",
      author: "Emma Thompson",
      role: "Marketing Director, TechVision",
      rating: 5
    },
    {
      text: "Working with Sarah was a game-changer for our social media presence. Her strategic insights and creative direction were invaluable.",
      author: "Michael Chen",
      role: "CEO, GrowthLabs",
      rating: 5
    },
    {
      text: "The quality of content and attention to detail is outstanding. Our engagement metrics have never been better.",
      author: "Jessica Williams",
      role: "Brand Manager, EcoStyle",
      rating: 5
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Adejoke Adegoke
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/90 backdrop-blur-md shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Portfolio
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center" data-animate id="hero">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 animate-gradient-x">
                Transforming Ideas
              </span>
              <br />
              <span className="text-gray-800">
                Into Digital Impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Content strategist & social media expert helping brands create meaningful connections in the digital space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white text-gray-800 font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border border-gray-200"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-animate
                id={`service-${index}`}
                className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                  isVisible[`service-${index}`] ? 'animate-fade-in' : 'opacity-0'
                }`}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className={`h-1 w-20 mt-6 rounded-full bg-gradient-to-r ${service.gradient} transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
  <section id="portfolio" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Featured Work
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {portfolio.map((project, index) => (
          <div
            key={index}
            data-animate
            id={`portfolio-${index}`}
            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
              isVisible[`portfolio-${index}`] ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="space-y-2">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1 h-1 rounded-full bg-gray-300 mr-2" />
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section id="testimonials" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Client Reviews
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            data-animate
            id={`testimonial-${index}`}
            className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl ${
              isVisible[`testimonial-${index}`] ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">{testimonial.text}</p>
            <div className="border-t pt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-10" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Let's Create Something Amazing
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Ready to transform your digital presence? Let's discuss how we can help your brand stand out and connect with your audience.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Get in Touch
          </button>
          <button className="px-8 py-4 bg-white text-gray-800 font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-lg border border-gray-200 flex items-center justify-center gap-2">
            <ArrowRight className="w-5 h-5" />
            <a href="#services">View Services</a>
          </button>
        </div>
        <div className="flex justify-center space-x-6">
          {[
            { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: 'https://x.com' },
            { icon: <Instagram className="w-6 h-6" />, label: 'Instagram', url: 'https://x.com'},
            { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: 'https://x.com' },
            { icon: <Mail className="w-6 h-6" />, label: 'Email', url: 'https://x.com' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-8 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 mb-4 md:mb-0">
          © {currentYear} Adejoke Adegoke. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
      
      {/* Add custom animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 4s ease infinite;
        }

        @keyframes float-0 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(20px, -20px); } }
        @keyframes float-1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-20px, 20px); } }
        @keyframes float-2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(15px, 15px); } }
        @keyframes float-3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-15px, -15px); } }
        @keyframes float-4 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(10px, -10px); } }
        @keyframes float-5 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-10px, 10px); } }

        .animate-float-0 { animation: float-0 infinite ease-in-out; }
        .animate-float-1 { animation: float-1 infinite ease-in-out; }
        .animate-float-2 { animation: float-2 infinite ease-in-out; }
        .animate-float-3 { animation: float-3 infinite ease-in-out; }
        .animate-float-4 { animation: float-4 infinite ease-in-out; }
        .animate-float-5 { animation: float-5 infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;