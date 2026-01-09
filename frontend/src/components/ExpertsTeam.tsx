// import { Star } from 'lucide-react';


// const ExpertsTeam= () => {

//   const doctors = [
//     {
//       name: "Dr. Jane Cooper",
//       specialty: "Cardiology",
//       experience: "15+ years",
//       image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop",
//       rating: 4.9
//     },
//     {
//       name: "Dr. Cameron Wilson",
//       specialty: "Pediatrics",
//       experience: "12+ years",
//       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop",
//       rating: 5.0
//     },
//     {
//       name: "Dr. Sarah Martinez",
//       specialty: "Neurology",
//       experience: "18+ years",
//       image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=400&fit=crop",
//       rating: 4.8
//     },
//     {
//       name: "Dr. David Lee",
//       specialty: c
//       experience: "14+ years",
//       image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=400&fit=crop",
//       rating: 4.9
//     }
//   ];

// return (
//  <section id="doctors" className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Meet Our Expert Team
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//               Board-certified physicians dedicated to your health and wellbeing
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {doctors.map((doctor, idx) => (
//               <div 
//                 key={idx}
//                 className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
//               >
//                 <div className="relative h-64 md:h-80 overflow-hidden">
//                   <img 
//                     src={doctor.image}
//                     alt={doctor.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
//                   <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
//                   <p className="text-gray-600 text-sm mb-3">{doctor.experience} experience</p>
//                   <div className="flex items-center gap-1 mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
//                     ))}
//                     <span className="ml-2 text-sm text-gray-600">{doctor.rating}</span>
//                   </div>
//                   <button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 text-white py-2.5 rounded-lg hover:shadow-lg transition-all font-medium">
//                     Book Appointment
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
// };

// export default ExpertsTeam;

import { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin, faXTwitter, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import TypewriterGradient from './TypeScript';


interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    email?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

export const ExpertsTeam = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const founders: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Jane Cooper',
      role: 'Cardiology Specialist',
      bio: '15+ years of experience in cardiovascular health and patient care.',
      image: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1766835313/IMG-20250812-WA0001_ni3ava.jpg',
      social: {
        email: 'collinswachira@lupp.live',
        instagram: 'https://instagram.com/he_is_wachira',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com/collinswachira-alt',
      }
    },
    {
      id: 2,
      name: 'Dr Michael Rodriguez',
      role: 'Pediatrics',
      bio: "Certified pediatrician dedicated to children's health and wellness.",
      image: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1766836690/images_fqwivo.jpg',
      social: {
        email: 'michael@lupp.live',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      }
    },
    {
      id: 3,
      name: "Dr. Sarah Martinez",
      role: "Neurology",
      bio: "Experienced neurologist specializing in brain and nervous system disorders.",
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
      social: {
        email: 'emily@lupp.live',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      }
    },
    {
      id: 4,
      name: 'Dr. David Lee',
      role: "Orthopedics",
      bio: "Renowned orthopedic surgeon focused on musculoskeletal health.",
      image: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1766835688/She_zwcz8d.jpg',
      social: {
        email: 'sarah@lupp.live',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 5,
      name: 'David Kiruga',
      role: 'Developer',
      bio: 'Extensive experience in building scalable web applications and services.',
      image: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1766835313/IMG-20250812-WA0001_ni3ava.jpg',
      social: {
        email: 'kirugadavid9@gmail.com',
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com/kirugadavid9-oss',
      }
    },
    {
      id: 6,
      name: 'Dr. Amanda Chen',
      role: 'Dermatology',
      bio: 'Expert in skin health and cosmetic dermatology with 10+ years experience.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop',
      social: {
        email: 'amanda@lupp.live',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 7,
      name: 'Dr. James Wilson',
      role: 'Oncology',
      bio: 'Dedicated cancer specialist with breakthrough treatment approaches.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop',
      social: {
        email: 'james@lupp.live',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 8,
      name: 'Dr. Maria Garcia',
      role: 'Obstetrics & Gynecology',
      bio: "Women's health expert providing comprehensive care and support.",
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=400&fit=crop',
      social: {
        email: 'maria@lupp.live',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 9,
      name: 'Dr. Robert Kim',
      role: 'Psychiatry',
      bio: 'Mental health advocate specializing in anxiety and depression treatment.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=400&fit=crop',
      social: {
        email: 'robert@lupp.live',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 10,
      name: 'Dr. Lisa Thompson',
      role: 'Endocrinology',
      bio: 'Hormone and diabetes specialist with patient-centered care approach.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop',
      social: {
        email: 'lisa@lupp.live',
        linkedin: 'https://linkedin.com',
        instagram: 'https://instagram.com',
        github: 'https://github.com'
      }
    }
  ];

  const team = [
    "Team",
    "Specialists",
    "Experts",
    "Professionals"
  ]

const getSocialIcon = (type: string) => {
    switch (type) {
        case 'email':
            return Mail;
        case 'linkedin':
            return () => <FontAwesomeIcon icon={faLinkedin} />;
        case 'instagram':
            return () => <FontAwesomeIcon icon={faInstagram} />;
        case 'twitter':
            return () => <FontAwesomeIcon icon={faXTwitter} />;
        case 'github':
            return () => <FontAwesomeIcon icon={faGithub} />;
        case 'website':
            return ExternalLink;
        default:
            return ExternalLink;
    }
};

  const getSocialColor = (type: string) => {
    switch (type) {
      case 'email':
        return 'hover:text-red-500 dark:hover:text-red-400';
      case 'linkedin':
        return 'hover:text-blue-600 dark:hover:text-blue-400';
      case 'twitter':
        return 'hover:text-cyan-500 dark:hover:text-cyan-400';
      case 'github':
        return 'hover:text-slate-900 dark:hover:text-white';
      case 'website':
        return 'hover:text-purple-500 dark:hover:text-purple-400';
      default:
        return 'hover:text-cyan-500 dark:hover:text-cyan-400';
    }
  };

  const handleSocialClick = (url: string | undefined, type: string) => {
    if (!url) return;
    if (type === 'email') {
        
      window.location.href = `mailto:${url}`;
      console.info(`hoverId: ${hoveredId}`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section className="px-4 md:px-6 lg:px-8 py-16 md:py-24">
      {/* Decorative elements */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-8xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-global-text-primary">
            Meet Our <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <TypewriterGradient
                texts={team}
                speed={500}
                delayBetweenTexts={1200}
                loop={true}
              />
            </span>
          </h2>
          <p className="text-lg text-global-text-secondary">
            Our dedicated team of medical professionals is here to provide you with exceptional care and expertise.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 md:gap-8 animate-scroll">
            {/* First set of items */}
            {founders.map((founder) => (
              <div
                key={`first-${founder.id}`}
                onMouseEnter={() => setHoveredId(founder.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex-shrink-0 w-[280px] md:w-[320px]"
              >
                {/* Card Container */}
                <div className="relative bg-whitebg-global-bg-primary rounded-2xl border border-cyan-900 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-cyan-500/10">
                  
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-cyan-500/0 via-transparent to-slate-900/10 dark:to-slate-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Image Container */}
                  <div className="relative h-80 md:h-72 overflow-hidden bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 space-y-4">
                    {/* Name & Role */}
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-global-text-primary group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all">
                        {founder.name}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        {founder.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-global-text-secondary leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-all">
                      {founder.bio}
                    </p>

                    {/* Accent Line */}
                    <div className="h-0.5 w-8 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-16 transition-all duration-500" />

                    {/* Social Links */}
                    <div className="flex gap-3 pt-2">
                      {Object.entries(founder.social).map(([type, url]) => {
                        if (!url) return null;
                        const Icon = getSocialIcon(type);
                        return (
                          <button
                            key={type}
                            onClick={() => handleSocialClick(url, type)}
                            title={type.charAt(0).toUpperCase() + type.slice(1)}
                            className={`p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 ${getSocialColor(
                              type
                            )} hover:scale-110 transform`}
                          >
                            <Icon className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hover Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-20 border-b-20 border-l-transparent border-b-cyan-500/0 group-hover:border-b-cyan-500/30 transition-all duration-500" />
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite loop */}
            {founders.map((founder) => (
              <div
                key={`second-${founder.id}`}
                onMouseEnter={() => setHoveredId(founder.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex-shrink-0 w-[280px] md:w-[320px]"
              >
                {/* Card Container */}
                <div className="relative bg-whitebg-global-bg-primary rounded-2xl border border-cyan-900 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-cyan-500/10">
                  
                  {/* Background Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-cyan-500/0 via-transparent to-slate-900/10 dark:to-slate-900/50 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Image Container */}
                  <div className="relative h-80 md:h-72 overflow-hidden bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 space-y-4">
                    {/* Name & Role */}
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-global-text-primary group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all">
                        {founder.name}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        {founder.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-global-text-secondary leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-all">
                      {founder.bio}
                    </p>

                    {/* Accent Line */}
                    <div className="h-0.5 w-8 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-16 transition-all duration-500" />

                    {/* Social Links */}
                    <div className="flex gap-3 pt-2">
                      {Object.entries(founder.social).map(([type, url]) => {
                        if (!url) return null;
                        const Icon = getSocialIcon(type);
                        return (
                          <button
                            key={type}
                            onClick={() => handleSocialClick(url, type)}
                            title={type.charAt(0).toUpperCase() + type.slice(1)}
                            className={`p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 ${getSocialColor(
                              type
                            )} hover:scale-110 transform`}
                          >
                            <Icon className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Hover Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-20 border-b-20 border-l-transparent border-b-cyan-500/0 group-hover:border-b-cyan-500/30 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-8 md:pt-12">
          <p className="text-slate-600 dark:text-slate-400">
            We Guarantee Quality Care, Love and Professionalism in Every Interaction.
          </p>
        </div>
      </div>

      <style>{`

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default ExpertsTeam;