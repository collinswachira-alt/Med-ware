import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import NavBar from '../components/NavBar';
import LandingFooter from '../components/LandingFooter';
import FloatingMedicalBackground from '../components/FloatingItems';
import { Breadcrumb } from '../components/Breadcrumb';

const ITEMS_PER_PAGE = 9;

export const ServicesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  const currentServices = useMemo(() => {
    return services.slice(startIndex, endIndex);
  }, [startIndex, endIndex]);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <FloatingMedicalBackground />

      <div className="max-w-8xl mt-25 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Page Header */}
        <div className="mb-12">
          <Breadcrumb serviceName='null' />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our comprehensive range of healthcare services designed to support your wellness journey. From preventive care to specialized treatments, Mimosa Cottage Hospital is committed to your health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={{
                title: service.title,
                slug: service.slug,
                excerpt: service.summary,
                coverImage: {
                  url: service.featuredImage,
                  alt: service.title,
                },
                featured: false,
              }}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {/* Previous Button */}
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageClick(page)}
                  disabled={page === '...'}
                  className={`px-3 py-2 rounded-lg font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      : page === '...'
                      ? 'text-gray-600 cursor-default'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-label={typeof page === 'number' ? `Go to page ${page}` : 'More pages'}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Results Info */}
        <div className="text-center mt-8 text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, services.length)} of {services.length} services
        </div>
      </div>

      <LandingFooter />
    </div>
  );
};

export default ServicesPage;
