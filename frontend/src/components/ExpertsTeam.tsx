import { useState } from 'react';
import { Mail, ExternalLink, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
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

  const team = ['Our Experts', 'Our Developers', 'Our Doctors', 'Our Team', 'Our Founders'];

  const founders: TeamMember[] = [
    {
      id: 1,
      name: 'Collins Wachira',
      role: 'Senior Developer',
      bio: 'Adequate knowledge in building web applications and services.',
      image: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1766835313/IMG-20250812-WA0001_ni3ava.jpg',
      social: {
        email: 'collinswachira@lupp.live',
        instagram: 'https://instagram.com/he_is_wachira',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
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
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=400&fit=crop',
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
      image: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1768054621/WhatsApp_Image_2026-01-10_at_17.03.23_tozikb.jpg',
      social: {
        email: 'kirugadavid9@gmail.com',
        instagram: 'https://instagram.com/',
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
      }
    }
  ];

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'email':
        return Mail;
      case 'linkedin':
        return Linkedin;
      case 'instagram':
        return Instagram;
      case 'twitter':
        return Twitter;
      case 'github':
        return Github;
      case 'website':
        return ExternalLink;
      default:
        return ExternalLink;
    }
  };

  const getSocialColor = (type: string) => {
    switch (type) {
      case 'email':
        return 'hover:text-red-500';
      case 'linkedin':
        return 'hover:text-blue-600';
      case 'twitter':
        return 'hover:text-sky-500';
      case 'github':
        return 'hover:text-gray-900';
      case 'instagram':
        return 'hover:text-pink-500';
      case 'website':
        return 'hover:text-purple-500';
      default:
        return 'hover:text-blue-500';
    }
  };

  const handleSocialClick = (url: string | undefined, type: string) => {
    if (!url) return;
    if (type === 'email') {
      window.location.href = `mailto:${url}`;
    } else {
      window.open(url, '_blank');
    }
  };

  // Create triple set for seamless infinite scroll
  const allMembers = [...founders, ...founders, ...founders];

  return (
    <section style={{
      padding: '64px 16px',
      position: 'relative',
      backgroundColor: '#fff',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '40px',
          width: '384px',
          height: '384px',
          background: 'rgba(6, 182, 212, 0.05)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '40px',
          width: '384px',
          height: '384px',
          background: 'rgba(147, 51, 234, 0.05)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
      </div>

      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px',
          maxWidth: '672px',
          margin: '0 auto 64px'
        }}>
          <h2 className="text-4xl md:text-5xl font-bold text-global-text-primary">
            Meet <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <TypewriterGradient
                texts={team}
                speed={200}
                delayBetweenTexts={200}
                loop={true}
              />
            </span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            lineHeight: '1.6'
          }}>
            Our dedicated team of medical professionals is here to provide you with exceptional care and expertise.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}>
          <div style={{
            display: 'flex',
            gap: '24px',
            animation: 'scroll 90s linear infinite',
            width: 'fit-content'
          }} 
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}>
            {allMembers.map((founder, index) => (
              <div
                key={`${founder.id}-${index}`}
                onMouseEnter={() => setHoveredId(founder.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  flexShrink: 0,
                  width: '280px',
                  position: 'relative'
                }}
              >
                {/* Card Container */}
                <div style={{
                  position: 'relative',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: hoveredId === founder.id 
                    ? '0 20px 50px rgba(6, 182, 212, 0.15)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transform: hoveredId === founder.id ? 'translateY(-8px)' : 'translateY(0)',
                  borderColor: hoveredId === founder.id ? 'rgba(6, 182, 212, 0.5)' : '#e2e8f0'
                }}>
                  
                  {/* Background Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent, rgba(15, 23, 42, 0.1))',
                    opacity: hoveredId === founder.id ? 1 : 0,
                    transition: 'opacity 0.5s'
                  }} />

                  {/* Image Container */}
                  <div style={{
                    position: 'relative',
                    height: '320px',
                    overflow: 'hidden',
                    background: 'linear-gradient(to bottom right, #e2e8f0, #cbd5e1)'
                  }}>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s',
                        transform: hoveredId === founder.id ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Image Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)',
                      opacity: hoveredId === founder.id ? 1 : 0,
                      transition: 'opacity 0.5s'
                    }} />
                  </div>

                  {/* Content Section */}
                  <div style={{
                    position: 'relative',
                    padding: '24px'
                  }}>
                    {/* Name & Role */}
                    <div style={{ marginBottom: '12px' }}>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#0f172a',
                        marginBottom: '6px',
                        transition: 'all 0.3s'
                      }}>
                        {founder.name}
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#06b6d4'
                      }}>
                        {founder.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <p style={{
                      fontSize: '14px',
                      color: '#64748b',
                      lineHeight: '1.6',
                      marginBottom: '16px'
                    }}>
                      {founder.bio}
                    </p>

                    {/* Accent Line */}
                    <div style={{
                      height: '2px',
                      width: hoveredId === founder.id ? '64px' : '32px',
                      background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                      marginBottom: '16px',
                      transition: 'width 0.5s'
                    }} />

                    {/* Social Links */}
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      {Object.entries(founder.social).map(([type, url]) => {
                        if (!url) return null;
                        const Icon = getSocialIcon(type);
                        const colorClass = getSocialColor(type);
                        return (
                          <button
                            key={type}
                            onClick={() => handleSocialClick(url, type)}
                            title={type.charAt(0).toUpperCase() + type.slice(1)}
                            style={{
                              padding: '10px',
                              borderRadius: '8px',
                              backgroundColor: '#f1f5f9',
                              color: '#64748b',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.3s',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                            className={`social-btn ${colorClass}`}
                            onMouseEnter={e => {
                              e.currentTarget.style.backgroundColor = '#e2e8f0';
                              e.currentTarget.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.backgroundColor = '#f1f5f9';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            <Icon style={{ width: '18px', height: '18px' }} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          marginTop: '64px',
          maxWidth: '672px',
          margin: '64px auto 0'
        }}>
          <p style={{
            color: '#64748b',
            fontSize: '16px'
          }}>
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
            transform: translateX(calc(-280px * ${founders.length} - 24px * ${founders.length}));
          }
        }

        @media (max-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * ${founders.length} - 24px * ${founders.length}));
            }
          }
        }

        .social-btn.hover\\:text-red-500:hover {
          color: #ef4444 !important;
        }
        .social-btn.hover\\:text-blue-600:hover {
          color: #2563eb !important;
        }
        .social-btn.hover\\:text-sky-500:hover {
          color: #0ea5e9 !important;
        }
        .social-btn.hover\\:text-gray-900:hover {
          color: #111827 !important;
        }
        .social-btn.hover\\:text-pink-500:hover {
          color: #ec4899 !important;
        }
        .social-btn.hover\\:text-purple-500:hover {
          color: #a855f7 !important;
        }
      `}</style>
    </section>
  );
};

export default ExpertsTeam;