import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Service } from '../data/servicesData';

interface QuickNavigationProps {
  currentSlug: string;
  relatedServices: Service[];
}

export const QuickNavigation: React.FC<QuickNavigationProps> = ({ currentSlug, relatedServices }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
      <nav className="space-y-2">
        {relatedServices.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
              currentSlug === service.slug
                ? 'bg-blue-100 text-blue-900'
                : 'hover:bg-blue-50 text-gray-700'
            }`}
          >
            <span className="font-medium">{service.title}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ))}
      </nav>
    </div>
  );
};
