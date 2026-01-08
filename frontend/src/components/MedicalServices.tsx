 import { ChevronRight } from 'lucide-react';

 const MedicalServices = () => {

 return (

   <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Medi-Waresolutions for you and your family
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Cardiology', icon: '❤️', desc: 'Complete heart care with advanced diagnostics' },
              { title: 'Pediatrics', icon: '👶', desc: 'Specialized care for infants and children' },
              { title: 'Neurology', icon: '🧠', desc: 'Expert treatment for neurological conditions' },
              { title: 'Orthopedics', icon: '🦴', desc: 'Bone and joint care with modern techniques' },
              { title: 'Dermatology', icon: '✨', desc: 'Comprehensive skin health solutions' },
              { title: 'Emergency Care', icon: '🚑', desc: '24/7 emergency medical services' }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default MedicalServices;