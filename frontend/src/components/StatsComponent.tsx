import { useState, useEffect, useRef } from 'react';
import ProffesionalSVG from '../assets/whiteProf.svg';
import HappyPatientsSVG from '../assets/happy-patients.svg';
import RisingRateSVG from '../assets/rising-rate.svg';
import StarSVG from '../assets/star.svg';

interface StatType {
  icon: any;
  number: string;
  label: string;
}

const HospitalStats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatType[] = [
    { icon: ProffesionalSVG, number: '21+', label: 'Expert Doctors' },
    { icon: HappyPatientsSVG, number: '1500+', label: 'Happy Patients' },
    { icon: RisingRateSVG, number: '95+', label: '% Success Rate' },
    { icon: StarSVG, number: '10+', label: 'Years Of Service' },
  ];

  // Parse number from string (e.g., "5000+" -> 5000, "95%" -> 95)
  const parseNumber = (str: string): number => {
    return parseInt(str.replace(/[^0-9]/g, ''));
  };

  // Format number with suffix
  const formatNumber = (num: number, originalStr: string): string => {
    let formatted = num.toString();
    
    // Add K for thousands
    if (num >= 1000) {
      formatted = (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K';
    }
    
    // Add M for millions
    if (num >= 1000000) {
      formatted = (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1) + 'M';
    }
    
    // Add suffix from original string (+ or %)
    if (originalStr.includes('+')) {
      formatted += '+';
    } else if (originalStr.includes('%')) {
      formatted = num + '%';
    }
    
    return formatted;
  };

  // Count-up animation
  useEffect(() => {
    if (!hasAnimated) return;

    const targets = stats.map(stat => parseNumber(stat.number));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCounts(targets.map(target => Math.floor(target * easeOut)));

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div>
      <section ref={sectionRef} className="bg-linear-to-r from-blue-800 via-blue-600 to-sky-500 cursor-pointer py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white transform hover:scale-105 transition-transform">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 opacity-90"> 
                  <img src={stat.icon} alt="" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {formatNumber(counts[idx], stat.number)}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalStats;