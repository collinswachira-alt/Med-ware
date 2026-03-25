import React from 'react';

interface Partner {
  name: string;
  logoUrl: string;
  alt: string;
}

const partners: Partner[] = [
  { name: 'Partner One', logoUrl: 'https://knh.or.ke/wp-content/uploads/2024/10/images.jpg', alt: 'S.H.A' },
  { name: 'Partner Two', logoUrl: 'https://p7.hiclipart.com/preview/44/11/713/britam-holdings-limited-kenya-life-insurance-business-business.jpg', alt: 'Britam Insuarance' },
  { name: 'Partner Three', logoUrl: 'https://sasadoctor.co.ke/assets/partners/10.jpeg', alt: 'MTN Insuarance' },
  { name: 'Partner Four', logoUrl: 'https://sasadoctor.co.ke/assets/partners/14.jpeg', alt: 'Pioneer Insuarance' },
  { name: 'Partner Five', logoUrl: 'https://res.cloudinary.com/dwnhqho80/image/upload/v1774448098/images_l5w9jf.png', alt: 'Definite Insuarance' },
  { name: 'Partner Six', logoUrl: 'https://images.seeklogo.com/logo-png/54/1/sanlam-logo-png_seeklogo-544393.png', alt: 'Sanlam' },
];

const Partners: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          We Accept
        </h2>
        <p className="text-gray-600 mb-12">
          We collaborate with trusted organizations to deliver quality healthcare services.
        </p>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.logoUrl}
                alt={partner.alt}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;