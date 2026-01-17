import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import HeroComponent from './HeroComponent';
import HospitalStats from './StatsComponent';
import NavBar from './NavBar';
import ExpertsTeam from './ExpertsTeam';
import LandingFooter from './LandingFooter';
import Footer from './Footer';
import FAQ from './FAQs';
import { ServiceCard, MEDICAL_SERVICES } from './ServiceCard';

const HospitalLandingPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Loader Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-linear-to-br from-blue-800 via-blue-600 to-sky-500 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-blue-600 animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Medi-WarePlus</h2>
          <p className="text-white/80 text-sm">Loading your health companion...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white">

      <NavBar />
      <HeroComponent />
      <HospitalStats />
      
      {/* Medical Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEDICAL_SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
              />
            ))}
          </div>

          {/* View All Services Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      
      <ExpertsTeam />
      <FAQ />
      <LandingFooter />
      <Footer />

    </div>
  );
};

export default HospitalLandingPage;