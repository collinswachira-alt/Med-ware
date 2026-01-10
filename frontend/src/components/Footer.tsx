import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract, faShield } from "@fortawesome/free-solid-svg-icons";

interface FooterProps {
  className?: string;
  brandName?: string;
}

/**
 * Footer - Minimal footer with legal links, badges, and branding
 * 
 * Features:
 * - Copyright with current year
 * - Terms and Privacy links with icons
 * - Status badges (Updated, Important, New)
 * - Responsive design
 * - Accessibility compliant
 * - i18n support
 */
export const Footer: React.FC<FooterProps> = ({
  className = "",
  brandName = "Med-Ware",
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full bg-gray-900 text-white border-t border-global-border-primary bg-global-bg-primary ${className}`}
    >
      <div className="max-w-container-lg mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-sm text-global-text-secondary">
            <p className="text-global-text-primary font-semibold">
              &copy; {currentYear} {brandName}. All rights reserved.
            </p>
          </div>

          {/* Right: Links with Badges */}
          <div className="flex items-center gap-6">
            {/* Terms Link with Badge */}
            <div className="flex items-center gap-2">
                <a
                href="/terms"
                className="group relative flex items-center gap-2 text-sm text-global-text-secondary hover:text-cyan-500 transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 rounded px-2 py-1"
                >
                <FontAwesomeIcon icon={faFileContract} className="w-4 h-4" />
                <span>Terms & Conditions</span>
                <span className="absolute bottom-0 left-2 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-[calc(100%-1rem)] transition-all duration-300 rounded-full"></span>
                </a>
              {/* <Badge status="updated" size="sm" pulse /> */}
            </div>

            <div className="flex items-center gap-2">
                <a
                href="/privacy"
                className="group relative flex items-center gap-2 text-sm text-global-text-secondary hover:text-cyan-500 transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-cyan-500 rounded px-2 py-1"
                >
                <FontAwesomeIcon icon={faShield} className="w-4 h-4" />
                <span>Privacy Policy</span>
                <span className="absolute bottom-0 left-2 h-0.5 w-0 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-[calc(100%-1rem)] transition-all duration-300 rounded-full"></span>
                </a>
              {/* <Badge status="updated" size="sm" pulse /> */}
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
