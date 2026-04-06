import React, { useState, useRef } from 'react';
import { 
  Calendar,
  Clock,
  Users,
  MapPin,
  Sparkles,
  ChevronDown,
  Phone,
  User,
  MessageCircle,
  Star,
  Flame,
  CheckCircle,
  XCircle
} from 'lucide-react';

const ZedSkyReservation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Ref for auto-scrolling
  const formTopRef = useRef(null);

  // Generate time slots (11 AM to 10 PM)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour <= 22; hour++) {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      const timeStr = `${displayHour}:00 ${period}`;
      slots.push(timeStr);
      
      // Add half-hour slots for premium feel
      if (hour !== 22) {
        slots.push(`${displayHour}:30 ${period}`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Generate next 30 days for date picker
  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const formatted = date.toISOString().split('T')[0];
      const display = date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
      dates.push({ value: formatted, label: display });
    }
    return dates;
  };

  const dateOptions = generateDateOptions();

  // Validation
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[0-9]{10}$/.test(value.trim())) return 'Enter valid 10-digit number';
        return '';
      case 'date':
        if (!value) return 'Please select a date';
        return '';
      case 'time':
        if (!value) return 'Please select a time';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const scrollToFormTop = () => {
    if (formTopRef.current) {
      // Small offset so the header isn't right at the very top edge of the screen
      const yOffset = -20; 
      const y = formTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // UPDATED SUBMIT FUNCTION WITH YOUR GOOGLE SCRIPT URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'specialRequests') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      phone: true,
      date: true,
      time: true
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Convert React state data into standard Form Data
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      
      try {
        // Send data directly to Google Sheets using your web app URL
        await fetch("https://script.google.com/macros/s/AKfycby3wWpQzf-1cnoPunZwQqmdHOF037HyEjutV6hkSmYdCafNXDQy8RugryspDKbp1ICN/exec", {
          method: "POST",
          body: submitData,
          mode: "no-cors" // Crucial for bypassing Google's strict CORS rules from the frontend
        });

        // Because of no-cors, we assume success if the network request didn't throw an error
        setIsSubmitting(false);
        setShowSuccess(true);
        
        // Clear the form
        setFormData({
          fullName: '', phone: '', guests: '2', date: '', 
          time: '', specialRequests: ''
        });
        setTouched({});
        
        // Auto-scroll up to show success notification
        setTimeout(scrollToFormTop, 100);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);

      } catch {
        setIsSubmitting(false);
        alert("Network error. Please check your connection and try again.");
      }

    } else {
      // Scroll to top of form to show validation errors to mobile users
      scrollToFormTop();
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-['Inter'] relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Expanded Hero Banner for Mobile */}
      <div className="relative min-h-[300px] lg:min-h-[350px] overflow-hidden flex flex-col justify-center pb-12">
        <img
          src="https://storage.googleapis.com/banani-generated-images/generated-images/82a57292-0062-404b-9f72-3423c7aa88cd.jpg"
          alt="Rooftop Background"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#050505]"></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 pt-8">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs font-semibold tracking-wider">PREMIUM EXPERIENCE</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-3">Reserve Your Table<br className="lg:hidden" /> at Old Yard</h1>
          <p className="text-sm lg:text-base text-gray-300 max-w-xl mx-auto px-2">Secure your spot and enjoy an elevated cafe experience in the heart of Howrah</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 lg:px-10 -mt-16 lg:-mt-20 relative z-10 pb-28 lg:pb-16" ref={formTopRef}>
        <div className="max-w-3xl mx-auto">
          {/* Glassmorphism Form Card */}
          <div className="backdrop-blur-xl bg-[#0a0a0a]/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative Header */}
            <div className="h-1.5 bg-gradient-to-r from-[#d4af37] via-[#f2d06b] to-[#d4af37]"></div>
            
            <div className="p-6 lg:p-8">
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-2xl p-4 flex items-start gap-3 animate-slideDown">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-green-400 font-semibold text-sm mb-1">Reservation Sent!</h4>
                    <p className="text-xs text-gray-300">Your request has been received. We'll confirm your table shortly via SMS.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <User className="w-4 h-4 text-[#d4af37]" />
                    Full Name <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={() => handleBlur('fullName')}
                      placeholder="John Doe"
                      className={`w-full bg-white/5 border ${
                        touched.fullName && errors.fullName 
                          ? 'border-red-500/50 focus:border-red-500' 
                          : 'border-white/10 focus:border-[#d4af37]'
                      } rounded-xl py-4 px-4 text-white placeholder-gray-500 outline-none transition-all group-hover:bg-white/10`}
                    />
                  </div>
                  {/* Error Message Moved Out of Absolute Positioning */}
                  {touched.fullName && errors.fullName && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    Phone Number <span className="text-[#d4af37]">*</span>
                  </label>
                  <div className="relative group">
                    <div className="flex">
                      <span className="inline-flex items-center px-4 bg-white/5 border border-r-0 border-white/10 rounded-l-xl text-gray-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={() => handleBlur('phone')}
                        placeholder="98765 43210"
                        maxLength="10"
                        className={`flex-1 w-full bg-white/5 border ${
                          touched.phone && errors.phone 
                            ? 'border-red-500/50 focus:border-red-500' 
                            : 'border-white/10 focus:border-[#d4af37]'
                        } rounded-r-xl py-4 px-4 text-white placeholder-gray-500 outline-none transition-all group-hover:bg-white/10`}
                      />
                    </div>
                  </div>
                  {touched.phone && errors.phone && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <XCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Number of Guests & Date */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Guests Dropdown */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Users className="w-4 h-4 text-[#d4af37]" />
                      Number of Guests
                    </label>
                    <div className="relative group">
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white appearance-none outline-none transition-all group-hover:bg-white/10 cursor-pointer"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num} className="bg-[#0a0a0a]">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="11" className="bg-[#0a0a0a]">10+ Guests</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Calendar className="w-4 h-4 text-[#d4af37]" />
                      Select Date <span className="text-[#d4af37]">*</span>
                    </label>
                    <div className="relative group">
                      <select
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={() => handleBlur('date')}
                        className={`w-full bg-white/5 border ${
                          touched.date && errors.date 
                            ? 'border-red-500/50 focus:border-red-500' 
                            : 'border-white/10 focus:border-[#d4af37]'
                        } rounded-xl py-4 px-4 text-white appearance-none outline-none transition-all group-hover:bg-white/10 cursor-pointer`}
                      >
                        <option value="" className="bg-[#0a0a0a]">Choose a date</option>
                        {dateOptions.map(option => (
                          <option key={option.value} value={option.value} className="bg-[#0a0a0a]">
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {touched.date && errors.date && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        {errors.date}
                      </p>
                    )}
                  </div>
                </div>

                {/* Time Slot */}
                <div className="space-y-2">
                  {/* Time Slot */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                      <Clock className="w-4 h-4 text-[#d4af37]" />
                      Select Time <span className="text-[#d4af37]">*</span>
                    </label>
                    <div className="relative group">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        onBlur={() => handleBlur('time')}
                        className={`w-full bg-white/5 border ${
                          touched.time && errors.time 
                            ? 'border-red-500/50 focus:border-red-500' 
                            : 'border-white/10 focus:border-[#d4af37]'
                        } rounded-xl py-4 px-4 text-white appearance-none outline-none transition-all group-hover:bg-white/10 cursor-pointer`}
                      >
                        <option value="" className="bg-[#0a0a0a]">Choose time</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot} className="bg-[#0a0a0a]">{slot}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {touched.time && errors.time && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <XCircle className="w-3 h-3" />
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <MessageCircle className="w-4 h-4 text-[#d4af37]" />
                    Special Requests <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any specific requirements? (e.g., anniversary, dietary restrictions)"
                    rows="3"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white placeholder-gray-500 outline-none focus:border-[#d4af37] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-4 pb-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Flame className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Reserve My Table
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4 font-medium tracking-wide uppercase">
                    Subject to availability upon confirmation
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Info Footer */}
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>10:00 AM - 10:15 PM</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>Dum Dum Nagerbazar</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#d4af37]" />
              <span>4.6/5 (180+ reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Reserve Button (Only visible when scrolled far down past form) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none z-50">
        <button 
          onClick={scrollToFormTop}
          className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black py-4 rounded-xl font-bold shadow-2xl flex items-center justify-center gap-2 pointer-events-auto"
        >
          <Flame className="w-5 h-5" />
          Book Table Now
        </button>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ZedSkyReservation;