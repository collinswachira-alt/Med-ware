import React, { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

interface ShareComponentProps {
  serviceTitle: string;
  serviceSlug: string;
}

export const ShareComponent: React.FC<ShareComponentProps> = ({ serviceTitle, serviceSlug }) => {
  const [copied, setCopied] = useState(false);

  const shareUrl = `${window.location.origin}/services/${serviceSlug}`;
  const shareText = `Check out ${serviceTitle} at Mimosa Cottage Hospital`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareTwitter = () => {
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const handleShareInstagram = () => {
    // Instagram doesn't support direct sharing via link, but we can copy to clipboard and suggest
    handleCopyLink();
    alert('Link copied! You can share it on Instagram by pasting in your caption or bio.');
  };

  return (
      <div className=" p-6">
        <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </h3>
        <div className="flex gap-3">
          <button onClick={handleShareTwitter} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-600 border border-cyan-900 rounded-lg transition-colors">
            <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4" />
          </button>
          <button onClick={handleShareInstagram} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-600 border border-cyan-900 rounded-lg transition-colors">
            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
          </button>
          <button onClick={handleShareFacebook} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-600 border border-cyan-900 rounded-lg transition-colors">
            <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopyLink}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-600 border border-cyan-900 rounded-lg transition-colors relative"
          >
            <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                copied!
              </span>
            )}
          </button>
        </div>
      </div>
  );
};
