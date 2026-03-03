import React, { useState, useEffect, useCallback } from 'react';
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Instagram
} from 'lucide-react';

const ZedSkyGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle body overflow when lightbox opens/closes
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  // Simplified static gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerrgjLa1xpHazRkrpLaY4sptBT1OSGs_3soBxJxlCk1th0T5dTV2BwD9zhVuVOcdipRcOHiiRgNtXey5B9epzdfIX9mHC8akve_kP1JigmHPSqid7njgpsAi3sEp4YkMYogSKMb0A=s680-w680-h510",
      title: 'Main Lounge Area',
      description: 'Elegant indoor seating with warm ambient lighting'
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerlquydFBKbFAXf0yA4P8GFafw5jxOtkViSPAfmHEenmo8g_VR2upEDZJiQCLNlPjKTlZM9AZxlbz6YNkeTe6OdVgZ1Bf_RVIq__PljRBIXcXRyE5w_rh51V0RAEYC-3K7B605VzQ=s680-w680-h510",
      title: 'Cozy Corners',
      description: 'Perfect spots for intimate conversations'
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoQB5oB4rEYMde7Qx9uEXqi2fG9baXQfmLhgS2lKj_5IhcsF2_EhLfa7YJb__P9_gLsAZUVQ52rho3RxysiwvEnXCZPQG3em-kwIC67IbCV4TXLTdr1LF1JDl9p0FndgxKF_F4FTReQXel2=s680-w680-h510",
      title: 'Modern Interior Design',
      description: 'Contemporary decor with golden accents'
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepg9ecZP77Zi1C_CdXg51Vf8zxf9bs6g81adNXDOOIMXvLiANr3525DknNGCe4fjkipeWL_OqdmcX_c0EpuvigX9EGIJjTHka5oQS7nuYd9ypbFUBmGWFm8MVjnsLH5rKuZXXnJxw=s680-w680-h510",
      title: 'Grab Custard',
      description: 'Breathtaking Howrah cityscape at night'
    },
    {
      id: 5,
      src: "https://b.zmtcdn.com/data/reviews_photos/f29/8eb3dcd9a0f4d39ee643543e10feff29_1720855175.jpg",
      title: 'Rooftop Seating',
      description: 'Open-air seating under the stars'
    },
    {
      id: 6,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer0OwcIfGioGuOzt-1lCpmqcvsdwIdsv-SlxF8Qjf-NFGBgOh3kaftlT8poma7U0e6xcEEziEBJh_Vi4SBlywDL2zZiJLeSm4TY97gn5GBdbyottdO5Yvq8s4O0XCB43FDgcTM=s680-w680-h510",
      title: 'Night Ambience',
      description: 'Magical evenings with city lights'
    },
    {
      id: 7,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq1B_3RUC6rjNhikaDmI2HTcEjsuxV6wZ8uV8DHL-x_GLr0AN5y3suGpZUrPAPtDXPFiJ9nfMbWWAQck9DQrdvSj1pej2GBi2ji_vXmRtWYTN1H0DBoDhqLnwG5miQlmeChST_q=s680-w680-h510",
      title: 'Sizzling Brownie',
      description: 'Artisanal coffee with perfect latte art'
    },
    {
      id: 8,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweor8mxzFbFUJDFYbFAB6T2GBYa6fOTXhp0_rbZr7YekUClTCec8tAtcGOrVGKjVnkscRdMid3byjxze8Kz81utN0eX48USsrg3tk8pJ6bne3-31ABCLRFRdp2UnsTvLVipxQ8WVRA=s680-w680-h510",
      title: 'Gourmet Pizza',
      description: 'Wood-fired thin crust pizzas'
    },
    {
      id: 9,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwer9iL33SK3bmu0ncKQVvMh8GSHdIEMntZbxYTMFSRhYm-L5OztbxsT4GAMb3AYOAeKFvU-y87LjIXmx-zstuLc8myLlbmRE_F652KMONtyFuxKLTBLm_bUwTG4dFrYHk_xZAbE=s680-w680-h510",
      title: 'holly yess',
      description: 'Assorted delicacies for sharing'
    },
    {
      id: 10,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerHTnp-CqRUKHRaqf7RP93ah_9bZkxx1nbfYKEIZ4qetAof8lxDy4Vcf53mrAg_IkkFFurzjx-D2NWnixcL3YGYI6RvE6-kX1hGwEnjb_pQwnK2vAmcCTk-WUQAykK9OeHAqtbPRA=s680-w680-h510",
      title: 'Cold Brew Collection',
      description: 'Refreshing cold coffee varieties'
    },
    {
      id: 11,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqvwS3RTYUkZ5lwp9_neNZXrT3R1e8EUGG4iP09BEx1-LzmcZzf3ZJXUQNGHDc4y3sZhF1sPctSxemHqBEZXIT2yEn3OX-YdykQ79JSOBw6n8VirqFkcWnvFqdvgxabFk4Na2S7=s680-w680-h510",
      title: 'Mouth Watering',
      description: 'Spectacular sunset views from rooftop'
    },
    {
      id: 12,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqFwAwF81TKryaLUucXtArQOpJ40IK73PkzhCko9jwWojQxn0Yj9aYf1VSMwxu8k_9D10dsBez5S1xCFTUKa6Ut48Iqb9A64gdini8o8CVAqnVU4lUvjTtLDMMLaGcRngNbkcVh9Q=s680-w680-h510",
      title: 'Evening Glow',
      description: 'City lights beginning to twinkle'
    },
    {
      id: 13,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepB6Tre7vpcTJan90kzFoJC6mEU5cPegIU5pB_mFOalTcHKIVT1DM5TC8Zjpplmc4fHVyb9GqMX6ddPlqMNaEKr-L3CDBjtugg4IZ9JbnCuyIAbUP_KnFWZd6R5doXbDEa9THQruYMQEJ8=s680-w680-h510",
      title: 'Ordering Zone',
      description: 'Acoustic performances every weekend'
    },
    {
      id: 14,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep5670pWfwRKvm3Zk46FYMDtV7ZlgjObWir1TUNyYIRqN1f-77rsUzWqq2PYz8U81fvoplTPsorjp4oyOc2QLghg3uuCBLhWFnCf1cgy-CZumnmcM2AWq5VokOfRYDYGSBn5ZKK=s680-w680-h510",
      title: '8 ball pool',
      description: 'Celebrations with a view'
    },
    {
      id: 15,
      src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweq4i4mg41Tkq_A95fOoUSF0ehwxFBv7JptN6nrbmcQp1j6C6-dzfxjI39MNzqpRFCn3TIFZBL1oQ2R1NhMwPhtN4mJK0CUt6i4omW6P5AhYuIWdxyF5AdJr3sOzxZKgwCKej_RPLxGJgkLn=s680-w680-h510",
      title: 'Decorative Details',
      description: 'Every corner tells a story'
    }
  ];

  // Handle image click
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsFullscreen(false);
  };

  const navigateImage = useCallback((direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < galleryImages.length) {
      setCurrentIndex(newIndex);
      setSelectedImage(galleryImages[newIndex]);
    }
  }, [currentIndex, galleryImages]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImage(-1);
      } else if (e.key === 'ArrowRight') {
        navigateImage(1);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, navigateImage]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-['Inter']">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src="https://storage.googleapis.com/banani-generated-images/generated-images/61f12286-ba35-4cd5-adeb-2efe3945e243.jpg"
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]"></div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-5">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 backdrop-blur-sm border border-[#d4af37]/30 px-4 py-1.5 rounded-full mb-4">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs font-semibold tracking-wider">VISUAL STORY</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">Moments at Zed Sky</h1>
          <p className="text-sm lg:text-base text-gray-300 max-w-2xl">
            Capture the essence of our rooftop paradise • Every frame tells a story
          </p>
        </div>
      </div>

      {/* Clean Gallery Grid */}
      <div className="py-12 lg:py-16 px-5 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image, index)}
                className="group cursor-pointer relative"
              >
                <div className="relative rounded-xl overflow-hidden aspect-square bg-white/5">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <h3 className="text-white font-semibold text-sm truncate">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center ${
            isFullscreen ? 'p-0' : 'p-4 lg:p-8'
          }`}
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black transition-colors disabled:opacity-0 disabled:cursor-not-allowed z-50"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black transition-colors disabled:opacity-0 disabled:cursor-not-allowed z-50"
            disabled={currentIndex === galleryImages.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
            className="absolute top-4 left-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>

          {/* Image Container */}
          <div 
            className={`relative flex items-center justify-center ${isFullscreen ? 'w-full h-full' : 'max-w-5xl max-h-[85vh] w-full h-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className={`max-w-full max-h-full object-contain ${isFullscreen ? 'w-full h-full' : 'rounded-xl shadow-2xl'}`}
            />

            {/* Simple Image Info */}
            {!isFullscreen && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-xl">
                <h3 className="text-white text-xl font-semibold mb-1">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm">{selectedImage.description}</p>
              </div>
            )}
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm text-white font-medium z-50">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* Instagram Feed Link */}
      <div className="px-5 lg:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 rounded-xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Follow us on Instagram</h3>
                  <p className="text-gray-400 text-sm">@zedskylounge • Share your moments with #ZedSkyVibes</p>
                </div>
              </div>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full lg:w-auto bg-[#d4af37] text-black px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#b38f2e] transition-colors shrink-0"
              >
                <Instagram className="w-4 h-4" />
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZedSkyGallery;