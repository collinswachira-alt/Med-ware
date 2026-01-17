import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  serviceName: string;
  serviceSlug?: string; // accepted for compatibility; not currently used
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ serviceName }) => {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <Link to="/services" className="text-blue-600 hover:text-blue-800 underline">
        Services
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-gray-600 font-medium">{serviceName}</span>
    </nav>
  );
};
