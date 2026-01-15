import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getServiceBySlug, getRelatedServices } from '../data/servicesData';
import { Breadcrumb } from '../components/Breadcrumb';
import { ContentRenderer } from '../components/ContentRenderer';
import { QuickNavigation } from '../components/QuickNavigation';
import { ShareComponent } from '../components/ShareComponent';
import { MiniCTAComponent } from '../components/MiniCTAComponent';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LandingFooter from '../components/LandingFooter';
import FloatingMedicalBackground from '../components/FloatingItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const ServicePage: React.FC = () => {
  const { serviceSlug = '' } = useParams<{ serviceSlug: string }>();
  const navigate = useNavigate();
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const relatedServices = service ? getRelatedServices(serviceSlug) : [];

  useEffect(() => {
    // Scroll to top on component mount or when service changes
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar />
        <FloatingMedicalBackground />
        <div className="max-w-7xl mt-70 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">
              The service you're looking for doesn't exist. Please check the URL or browse our services.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Return to Home <FontAwesomeIcon icon={faHome} />
            </button>
          </div>

        </div>
         <div className='mt-50'>
         <LandingFooter />
         <Footer />
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
        <NavBar />
        <FloatingMedicalBackground />

      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">

        {/* Breadcrumb */}
        <Breadcrumb serviceName={service.title} />

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={service.featuredImage}
            alt={service.title}
            className="w-full h-96 object-cover"
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
              target.style.display = 'none';
            }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Takes 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {service.summary}
            </p>

            {/* Content Renderer */}
            <div className="prose prose-lg max-w-none">
              <ContentRenderer content={service.markdownContent} />
            </div>
          </div>

          {/* Side Panel - Right on desktop, below on mobile */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <ShareComponent serviceTitle={service.title} serviceSlug={service.slug} />
              <QuickNavigation currentSlug={service.slug} relatedServices={relatedServices} />
              <MiniCTAComponent />
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
      <Footer />
    </div>
  );
};

export default ServicePage;
