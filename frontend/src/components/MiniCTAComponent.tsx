import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const MiniCTAComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/auth/signup');
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-sky-500 p-6 rounded-lg text-white">
      <h3 className="text-xl font-bold mb-3">Get Quality Care</h3>
      <p className="text-blue-50 mb-4 text-sm">
        Get quality care at Mimosa Cottage Hospital. Schedule your appointment today.
      </p>
      <button
        onClick={handleSignUp}
        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        Sign Up
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
