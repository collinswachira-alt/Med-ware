import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Mail, ChevronRight, Star, Play, CheckCircle, Users, Award, Heart, Calendar } from 'lucide-react';
import HeroComponent from './HeroComponent';
import HospitalStats from './StatsComponent';
import HowItWorks from './HowItWorks';
import NavBar from './NavBar';
import MedicalServices from './MedicalServices';
import ExpertsTeam from './ExpertsTeam';
import LandingFooter from './LandingFooter';
import Footer from './Footer';

const HospitalLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    console.log("isVideoModalOpen:", isVideoModalOpen );
    return () => clearTimeout(timer);
  }, []);

  // Loader Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-800 via-blue-600 to-sky-500 flex items-center justify-center z-50">
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
      <HowItWorks />
      <MedicalServices />
      <ExpertsTeam />
      <LandingFooter />
      <Footer />

    </div>
  );
};

export default HospitalLandingPage;