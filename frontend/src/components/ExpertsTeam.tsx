import { Star } from 'lucide-react';


const ExpertsTeam= () => {

  const doctors = [
    {
      name: "Dr. Jane Cooper",
      specialty: "Cardiology",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop",
      rating: 4.9
    },
    {
      name: "Dr. Cameron Wilson",
      specialty: "Pediatrics",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop",
      rating: 5.0
    },
    {
      name: "Dr. Sarah Martinez",
      specialty: "Neurology",
      experience: "18+ years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=400&fit=crop",
      rating: 4.8
    },
    {
      name: "Dr. David Lee",
      specialty: "Orthopedics",
      experience: "14+ years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=400&fit=crop",
      rating: 4.9
    }
  ];

return (
 <section id="doctors" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Board-certified physicians dedicated to your health and wellbeing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {doctors.map((doctor, idx) => (
              <div 
                key={idx}
                className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.experience} experience</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{doctor.rating}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-2.5 rounded-lg hover:shadow-lg transition-all font-medium">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ExpertsTeam;