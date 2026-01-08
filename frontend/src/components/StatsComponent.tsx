import { CheckCircle, Users, Award, Heart } from 'lucide-react';

const HospitalStats = () => {

return (
    <div>
    <section className="bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Users, number: '200+', label: 'Expert Doctors' },
            { icon: Heart, number: '5000+', label: 'Happy Patients' },
            { icon: Award, number: '15+', label: 'Years Experience' },
            { icon: CheckCircle, number: '98%', label: 'Success Rate' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white transform hover:scale-105 transition-transform">
              <stat.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 opacity-90" />
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
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