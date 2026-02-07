import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceItems {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: { url: string; alt: string };
  featured: boolean;
}

export const MEDICAL_SERVICES: ServiceItems[] = [
  {
    title: 'Maternal & Child Health',
    slug: 'maternity-care',
    excerpt: 'Complete heart care with advanced diagnostics',
    coverImage: { url: 'https://maternityandmidwifery.co.uk/wp-content/uploads/2025/09/Lesley-Turner-September-2025.png', alt: 'Maternal & Child Health' },
    featured: false
  },
  {
    title: 'Family Planning',
    slug: 'family-planning',
    excerpt: 'Specialized care for infants and children',
    coverImage: { url: 'https://media.istockphoto.com/id/1092392644/photo/doctor-consulting-with-young-couple-patients.jpg?s=612x612&w=0&k=20&c=Jg1U-oTQyBOkuQ9rr3DpuUCRFPEmiJEU8ya2wfLjsec=', alt: 'Family Planning' },
    featured: false
  },
  {
    title: 'S.T.Is and related services',
    slug: 'stis-related-services',
    excerpt: 'Expert treatment for neurological conditions',
    coverImage: { url: 'https://familymedicineaustin.com/wp-content/uploads/2022/04/9.jpg', alt: 'S.T.Is and related services' },
    featured: false
  },
  {
    title: 'Breast Cancer Screening',
    slug: 'breast-cancer-screening',
    excerpt: 'Bone and joint care with modern techniques',
    coverImage: { url: 'https://emoryhospital.co.ke/wp-content/uploads/2024/03/medic-holding-radiography-examination-with-patient-coronavirus-pandemic-doctor-explaining-x-ray-scan-results-diagnosis-woman-wearing-face-masks-protection-1.jpg', alt: 'Breast Cancer Screening' },
    featured: false
  },
  {
    title: 'Diagnosis & Laboratory Tests',
    slug: 'diagnosis-laboratory-tests',
    excerpt: 'Comprehensive skin health solutions',
    coverImage: { url: 'https://mariestopes.or.ke/wp-content/uploads/sites/10/2025/03/shutterstock_2451951657-scaled.jpg.webp', alt: 'Diagnosis & Laboratory Tests' },
    featured: false
  },
  {
    title: 'Emergency Care',
    slug: 'emergency-care',
    excerpt: '24/7 emergency medical services',
    coverImage: { url: 'https://static.vecteezy.com/system/resources/previews/002/723/677/large_2x/emergency-doctor-checking-patient-to-pick-hospital-illustration-emergency-ambulance-service-concept-free-vector.jpg', alt: 'Emergency Care' },
    featured: false
  }
];

interface ServiceCardProps {
  service: ServiceItems;
  onClick?: (slug: string) => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(service.slug);
    } else {
      navigate(`/services/${service.slug}`);
    }
  };

  return (
    <article
      className="group flex flex-col h-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 sm:border sm:border-cyan-900"
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden h-48 sm:h-56">
        {service.coverImage?.url ? (
          <img
            src={service.coverImage.url}
            alt={service.coverImage.alt || service.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center ">
            <div className="text-4xl">📰</div>
          </div>
        )}

        {/* Overlay for badges */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Featured Badge */}
        {service.featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 dark:bg-yellow-600 text-yellow-900 dark:text-yellow-100 px-3 py-1 rounded-full text-xs font-semibold">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-5 sm:p-6">

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
          {service.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed mb-4 grow line-clamp-3">
          {service.excerpt}
        </p>


        {/* Footer: Date and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700 mt-auto">

          <button
            className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold text-sm hover:gap-2 transition-all duration-200"
            aria-label={`Read more: ${service.title}`}
          >
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
