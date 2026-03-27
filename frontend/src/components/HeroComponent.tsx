import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FloatingMedicalBackground from './FloatingItems';
import ProffesionalSVG from '../assets/proffesional.svg';
import AllTimeSVG from '../assets/247.svg';
import PregnantSVG from '../assets/pregnantmom.svg';

const HeroComponent = () => {
  const slides = [
    {
      title: 'Compassionate Maternal & Family Care',
      description:
        'From antenatal support to postnatal follow-up, our team is ready to care for every stage of your family journey.',
      image:
        'https://res.cloudinary.com/dwnhqho80/image/upload/v1772119579/WhatsApp_Image_2026-02-26_at_18.10.36_1_ygh3f5.jpg',
      cta: 'Book Appointment',
    },
    {
      title: 'Fast Diagnosis & Emergency Support',
      description:
        'Get quick lab turnaround, emergency response, and specialist referrals with trusted clinical standards.',
      image:
        'https://res.cloudinary.com/dwnhqho80/image/upload/v1772119569/WhatsApp_Image_2026-02-26_at_18.10.23_nyyc7e.jpg',
      cta: 'Get Emergency Help',
    },
    {
      title: 'Preventive Screenings That Save Lives',
      description:
        'Stay ahead with routine screenings, immunizations, and wellness programs tailored to your health goals.',
      image:
        'https://res.cloudinary.com/dwnhqho80/image/upload/v1773422945/FB_IMG_1767830742744.jpg_1_kcawdr.jpg',
      cta: 'Explore Services',
    },
    {
      title: 'Quality Team, Trusted Care',
      description:
        'Our skilled professionals are dedicated to providing compassionate, personalized care for you and your family.',
      image:
        'https://res.cloudinary.com/dwnhqho80/image/upload/v1772119579/WhatsApp_Image_2026-02-26_at_18.10.34_vobpyi.jpg',
      cta: 'Meet Our Team',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showStatsCards, setShowStatsCards] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const timer = setTimeout(() => setShowStatsCards(true), 180);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const statsCards = [
    {
      title: 'Emergency Cases',
      detail: '24/7 triage and rapid response support for urgent care needs.',
      action: '/ambulance-referral',
    },
    {
      title: 'Consultation Schedule',
      detail: 'Meet our specialists in-person or virtually at your convenience.',
      action: '/general-checkups',
    },
    {
      title: 'Maternal Care',
      detail: 'SHA | Britam etc accepted for comprehensive maternity services.',
      action: '/maternity-care',
    },
  ];

  return (
    <div className="mt-24 mb-20 md:mt-28">
      <FloatingMedicalBackground />
      <section id="home" className="relative overflow-hidden">
        <div className="relative h-135 md:h-155 lg:h-165 w-full">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-950/75 via-blue-900/45 to-sky-900/30" />

              </div>
          ))}

          <button
            aria-label="Previous slide"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-blue-600/90 hover:bg-blue-700 text-white grid place-items-center transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next slide"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-blue-600/90 hover:bg-blue-700 text-white grid place-items-center transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={`dot-${slide.title}`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-sky-400' : 'w-2.5 bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative -mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {statsCards.map((card, index) => (
              <div
                key={card.title}
                className={`group relative overflow-hidden rounded-2xl p-6 text-white shadow-lg ring-1 ring-white/20 bg-linear-to-br from-blue-700 via-blue-600 to-sky-500 hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 ${
                  showStatsCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 w-36 h-36 rounded-full bg-white/15 blur-2xl group-hover:bg-white/25 transition-colors duration-500" />
                <div className="pointer-events-none absolute -left-12 -bottom-12 w-36 h-36 rounded-full bg-sky-300/20 blur-2xl group-hover:bg-sky-200/30 transition-colors duration-500" />

                <div className="relative flex items-center gap-3 mb-3">
                  <div className="w-15 h-15 bg-amber-50/95 group-hover:bg-white flex items-center justify-center rounded-lg transition-colors duration-300">
                    {index === 0 ? (
                      <img src={AllTimeSVG} alt="24/7" className="w-14 h-14 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110" />
                    ) : index === 1 ? (
                      <img src={ProffesionalSVG} alt="Experts" className="w-14 h-14 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" />
                    ) : (
                      <img src={PregnantSVG} alt="Maternal care" className="w-14 h-14 transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-110" />
                    )}
                  </div>
                  <h3 className="font-semibold text-xl leading-tight">{card.title}</h3>
                </div>

                <p className="relative text-sm text-blue-100/95 mb-4 leading-relaxed">{card.detail}</p>
                <button
                  onClick={() => window.location.href = `/services${card.action}`}
                  className="relative text-sm font-semibold tracking-wide inline-flex items-center gap-1 text-white hover:text-sky-100"
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default HeroComponent;