import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FloatingMedicalBackground from './FloatingItems';
import TypewriterGradient from './TypeScript';
import ProffesionalSVG from '../assets/proffesional.svg';
import AllTimeSVG from '../assets/247.svg';
import PregnantSVG from '../assets/pregnantmom.svg';

const HeroComponent = () => {
  const services = [
    'Maternity Care',
    'Child Wellness',
    'Family Planning',
    'Diagnosis & Lab Tests',
    'Ambulance & Referral',
    'Emergency Care',
    'STIs and HIV/AIDS',
    'Breast Cancer Screening',
    'Cervical Cancer Screening',
    'Immunizations',
    'General Checkups',
    'In&Out Patient Services',
    'Blood Transfusion',
  ];

  const slides = [
    {
      title: 'Compassionate Maternal & Family Care',
      description:
        'From antenatal support to postnatal follow-up, our team is ready to care for every stage of your family journey.',
      image:
        'https://res.cloudinary.com/dwnhqho80/image/upload/v1772119579/WhatsApp_Image_2026-02-26_at_18.10.34_vobpyi.jpg',
      cta: 'Book Appointment',
    },
    {
      title: 'Fast Diagnosis & Emergency Support',
      description:
        'Get quick lab turnaround, emergency response, and specialist referrals with trusted clinical standards.',
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
      cta: 'Get Emergency Help',
    },
    {
      title: 'Preventive Screenings That Save Lives',
      description:
        'Stay ahead with routine screenings, immunizations, and wellness programs tailored to your health goals.',
      image:
        'https://res.cloudinary.com/dwnhqho80/image/upload/v1772119569/WhatsApp_Image_2026-02-26_at_18.10.23_nyyc7e.jpg',
      cta: 'Explore Services',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

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

              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl text-white space-y-5">
                  <span className="inline-flex rounded-full bg-blue-500/20 border border-blue-200/40 px-4 py-1 text-sm font-medium">
                    Trusted for
                    <span className="ml-2 text-sky-200">
                      <TypewriterGradient
                        texts={services}
                        speed={200}
                        delayBetweenTexts={200}
                        loop={true}
                      />
                    </span>
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg text-blue-50/95">{slide.description}</p>
                  <button className="bg-linear-to-r from-blue-600 to-sky-500 text-white px-7 py-3.5 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all font-medium text-base flex items-center gap-2">
                    {slide.cta} <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statsCards.map((card, index) => (
              <div
                key={card.title}
                className="rounded-xl p-6 text-white shadow-lg bg-linear-to-r from-blue-700 to-sky-600"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-15 h-15 bg-amber-50 flex items-center justify-center rounded-md">
                    {index === 0 ? (
                      <img src={AllTimeSVG} alt="24/7" className="w-14 h-14" />
                    ) : index === 1 ? (
                      <img src={ProffesionalSVG} alt="Experts" className="w-14 h-14" />
                    ) : (
                      <img src={PregnantSVG} alt="Experts" className="w-14 h-14" />
                    )}
                  </div>
                  <h3 className="font-semibold text-xl">{card.title}</h3>
                </div>
                <p className="text-sm text-blue-100 mb-4">{card.detail}</p>
                <button onClick={() => window.location.href = `/services${card.action}`} className="text-sm font-semibold tracking-wide inline-flex items-center gap-1 text-white hover:text-sky-100 ">
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