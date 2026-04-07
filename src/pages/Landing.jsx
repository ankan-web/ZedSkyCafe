import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  StarHalf, 
  ShoppingBag, 
  Truck, 
  MapPin, 
  Clock, 
  Camera, 
  Wallet, 
  Heart, 
  Award, 
  Info, 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  Map,
  Menu,
  Flame,
  Play,
  ArrowRight
} from 'lucide-react';

const OldYardCafe = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Add animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-['Inter']">
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between bg-[#050505]/80 backdrop-blur-lg border-b border-white/5 lg:px-10 lg:py-6">
        <div className="text-lg lg:text-xl font-bold tracking-wider">
          OLD YARD <span className="text-[#d4af37]">CAFE</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-lg font-medium text-gray-300">
          <button onClick={() => scrollToSection('home')} className="hover:text-[#d4af37] transition-colors">
            Home
          </button>
          <a href="/menu" className="hover:text-[#d4af37] transition-colors">
            Menu
          </a>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-[#d4af37] transition-colors">
            Gallery
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#d4af37] transition-colors">
            Contact
          </button>
        </div>

        {/* Desktop Book Button */}
        <Link
          to="/reservations"
          className="hidden lg:inline-block bg-gradient-to-r from-[#d4af37] to-[#aa8a26] text-black px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-lg"
        >
          Book Table
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg text-white"
        >
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10 py-4 px-5 lg:hidden">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-300 hover:text-[#d4af37]">Home</button>
            <a href="/menu" className="py-2 text-gray-300 hover:text-[#d4af37]">Menu</a>
            <button onClick={() => scrollToSection('gallery')} className="text-left py-2 text-gray-300 hover:text-[#d4af37]">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-300 hover:text-[#d4af37]">Contact</button>
            <Link to="/reservations" className="mt-2 bg-gradient-to-r from-[#d4af37] to-[#aa8a26] text-black py-3 rounded-lg font-semibold text-center block">
              Book Table
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section - Mobile Optimized */}
      <section id="home" className="relative min-h-screen flex items-end justify-center pb-24 lg:pb-32 overflow-hidden pt-16 lg:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="Hero.png"
            alt="Rooftop Cafe Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-5 pt-8 lg:px-10 text-center lg:max-w-4xl lg:mx-auto lg:pt-20">
          <div className="inline-block px-3 py-1.5 border border-[#d4af37] rounded-full text-[#d4af37] text-[15px] font-semibold tracking-wider mb-4 uppercase">
            Welcoming experience every time
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
            Elevate Your Evenings at <br />
            <span className="bg-gradient-to-r from-[#d4af37] via-[#f2d06b] to-[#d4af37] bg-clip-text text-transparent">
              OLD YARD CAFE
            </span>
          </h1>

          <p className="text-base lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            The ambiance is rustic and charming, designed to make you feel at home. Whether you’re here for a quick bite, a leisurely brunch, or to soak in the vibe.
          </p>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mb-10 lg:flex-row lg:justify-center lg:gap-4">
            <Link to="/reservations" className="w-full lg:w-auto bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black py-3.5 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center">
              <Flame className="w-5 h-5 mr-2" />
              Reserve a Table
            </Link>
            <Link to="/menu" className="w-full lg:w-auto bg-white/5 backdrop-blur-lg border border-white/10 text-white py-3.5 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-white/10 transition-colors text-center">
              View Menu
            </Link>
          </div>

          {/* Stats Block - Mobile Grid */}
          <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-5 lg:flex lg:justify-center lg:gap-10">
            <div className="text-center">
              <div className="flex justify-center text-[#f2d06b] mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <StarHalf className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="font-bold text-sm text-white">4.6/5 Rating</div>
              <div className="text-xs text-gray-500">180+ Google Reviews</div>
            </div>

            <div className="text-center">
              <div className="font-bold text-sm text-white mb-1">₹200–400</div>
              <div className="text-xs text-gray-500">Cost per Person</div>
            </div>
          </div>

          {/* Delivery Apps - Mobile */}
          <div className="flex gap-3 justify-center mt-6 ">
            <a href="https://www.zomato.com/kolkata/old-yard-cafe-nagerbazar/book" target="_blank" rel="noreferrer" className="flex-1 py-2.5 bg-[#cb202d] rounded-lg font-bold text-xs text-white text-center">
              Zomato
            </a>
            <a href="https://www.swiggy.com/auth/?prevPath=https%3A%2F%2Fwww.swiggy.com%2Frestaurants%2Fold-yard-cafe-nagerbazar-kolkata-1132500%2Fdineout" target="_blank" rel="noreferrer" className="flex-1 py-2.5 bg-[#fc8019] rounded-lg font-bold text-xs text-white text-center">
              Swiggy
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Mobile Optimized */}
      <section className="py-16 px-5 lg:py-20 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Collage - Mobile Specific */}
          <div className="relative h-[340px] lg:h-[500px] rounded-xl lg:row-span-2">
            <div className="absolute top-0 left-0 w-[85%] h-[65%] z-20 border-r-2 border-b-2 border-black overflow-hidden rounded-xl">
              <img
                src="COFFEE.jpg"
                alt="Coffee"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[85%] h-[65%] z-10 overflow-hidden rounded-xl">
              <img
                src="ambience.jpg"
                alt="Ambience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center shadow-2xl">
              <Play className="w-6 h-6 text-black ml-1" />
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="text-[#d4af37] font-semibold text-2xl mb-3 tracking-wider">
              ABOUT <b>OLD YARD CAFE</b>
            </div>
            <h2 className="text-xl lg:text-4xl font-bold mb-5 text-white">
              Premium Experience
            </h2>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed mb-8">
              Welcome to Old Yard Cafe, your cozy corner in Kolkata where great food, warm hospitality, and memorable moments come together. Located at 37/a, Jessore Road, Nager Bazar More, Kolkata, our cafe is a perfect spot to relax, catch up with friends, or enjoy a quiet coffee break.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="min-w-[40px] h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">Our Location</div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    37/A, Jessore Rd, B L D Bagan, Nagerbazar, More, Kolkata, West Bengal 700074
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="min-w-[40px] h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm mb-1">Opening Hours</div>
                  <div className="text-xs text-gray-500">
                    Open daily from 	10:00 AM - 10:15 PM
                  </div>
                </div>
              </div>
            </div>

            <a href="https://maps.google.com/?q=Old+Yard+Cafe+Kolkata" target="_blank" rel="noreferrer" className="w-full lg:w-auto bg-white/5 backdrop-blur-lg border border-[#d4af37] text-[#d4af37] py-3.5 px-6 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Featured Experience - Mobile Optimized */}
      <section id="gallery" className="py-16 px-5 lg:py-20 lg:px-10 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-white">Experience the Extraordinary</h2>
            <p className="text-sm text-gray-400">Curated flavors and vibes.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                img: "COFFEE.jpg",
                title: "Signature Coffee",
                desc: "coffee that blends sourced from premium estates."
              },
              {
                img: "pizza.jpg",
                title: "Gourmet Snacks",
                desc: "From wood-fired pizzas to exotic appetizers, satisfying your cravings."
              },
              {
                img: "ambience.jpg",
                title: "Ambience",
                desc: "Relax with soft music and warm lighting."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="h-44 lg:h-48 rounded-lg overflow-hidden mb-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                {item.title.includes('Coffee') ? (
                  <Link to="/menu#beverages" className="flex items-center text-[#d4af37] text-xs font-semibold">
                    View Beverages
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                ) : item.title.includes('Snacks') ? (
                  <Link to="/menu" className="flex items-center text-[#d4af37] text-xs font-semibold">
                    View Food Menu
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                ) : (
                  <Link to="/gallery" className="flex items-center text-[#d4af37] text-xs font-semibold">
                    View Gallery
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="py-16 px-5 lg:py-20 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Why People Love Us</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {[
              { icon: Camera, title: "Instagram-Worthy", desc: "Perfect for your shots." },
              { icon: Wallet, title: "Affordable Luxury", desc: "₹200–400 per person." },
              { icon: Heart, title: "Ideal for Dates", desc: "Romantic vibes." },
              { icon: Award, title: "Top Rated", desc: "4.3/5 from 200+ users." }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-[#d4af37]/20 rounded-xl p-5 text-center">
                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center bg-[#d4af37]/10 rounded-full text-[#d4af37]">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                <p className="text-[10px] lg:text-xs text-gray-400 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Banner - Mobile Optimized */}
      <section 
        className="py-20 px-5 text-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("sitting.png")'
        }}
      >
        <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-white leading-tight">
          Reserve Your Spot at Old Yard Cafe
        </h2>
        <p className="text-base lg:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Don't miss out on the best experience in Kolkata. Book today.
        </p>
        <Link to="/reservations" className="w-full lg:w-auto bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black py-4 lg:px-10 lg:py-5 rounded-full font-bold text-lg shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          Reserve a Table Now
        </Link>
        <p className="mt-5 text-xs text-gray-400">
          Reservations also via <span className="text-white font-semibold">Zomato & Swiggy</span>
        </p>
      </section>

      {/* Footer - Mobile Optimized */}
      <footer id="contact" className="bg-black border-t border-[#222] py-16 px-5 lg:py-20 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-4 tracking-wider">
              OLD YARD <span className="text-[#d4af37]">CAFE</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              A premium cafe in Kolkata offering an unforgettable blend of ambiance, taste, and aesthetic views.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.instagram.com/old_yard_cafe" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/people/OLD-Yard-Cafe/61573261092942/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#222] rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-16">
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Explore</h4>
              <div className="flex flex-col gap-3">
                <Link to="/" onClick={() => scrollToSection('home')} className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors">Home</Link>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 text-sm text-left hover:text-[#d4af37] transition-colors">About Us</button>
                <Link to="/menu" className="text-gray-400 text-sm hover:text-[#d4af37] transition-colors">Menu</Link>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-400 text-sm text-left hover:text-[#d4af37] transition-colors">Gallery</button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Contact</h4>
              <div className="flex flex-col gap-3">
                <div className="text-gray-400 text-sm">+91 9851976120</div>
                <div className="text-gray-400 text-sm">hello@oldyard.com</div>
                <div className="text-gray-400 text-sm">10 AM - 10:15 PM</div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          {/* Map Placeholder */}
          <div className="w-full h-40 bg-[#222] rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8383974242574!2d88.41177717530195!3d22.622509079456265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f0064e077cb%3A0x5ac0e93704194557!2sOld%20Yard%20Cafe!5e0!3m2!1sen!2sin!4v1775467756530!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=old+yard+cafe+kolkata"
                target="_blank"
                rel="noreferrer"
                className="bg-[#050505] px-4 py-2 rounded text-xs font-semibold text-white"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#222] mt-10 pt-6 text-center text-gray-600 text-xs">
          © 2024 Ankan Studios. All rights reserved.
        </div>
      </footer>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 30px rgba(212, 175, 55, 0.4); }
          50% { box-shadow: 0 4px 50px rgba(212, 175, 55, 0.7); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.3));
        }
      `}</style>
    </div>
  );
};

export default OldYardCafe;