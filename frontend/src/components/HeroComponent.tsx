import { Clock, ChevronRight, Users } from 'lucide-react';
import FloatingMedicalBackground from './FloatingItems';


const HeroComponent = () => {
  return (
    <div className='mt-30'>
      <FloatingMedicalBackground />
      <section id="home" className="relative  overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Medical Care at{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-sky-500">
                  Your Fingertips
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                Find trusted doctors, book appointments instantly, and take control of your wellness journey with our comprehensive Medi-Wareplatform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-linear-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all font-medium text-lg flex items-center justify-center gap-2">
                  Get Started <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">24/7 Available</span>
                  </div>
                  <p className="text-sm text-gray-600">Round-the-clock care</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 text-blue-600 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Expert Doctors</span>
                  </div>
                  <p className="text-sm text-gray-600">Board-certified team</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative overflow-hidden ">
                <img 
                  src="https://res.cloudinary.com/dwnhqho80/image/upload/v1768056209/WhatsApp_Image_2026-01-10_at_17.41.00-removebg-preview_c55uui.png" 
                  alt="Medi-WareProfessional"
                  className="w-full h-100 md:h-150 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroComponent;