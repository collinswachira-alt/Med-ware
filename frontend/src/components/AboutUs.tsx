import React from 'react';
import FloatingMedicalBackground from './FloatingItems';

const AboutUs: React.FC = () => {



  return (
    <div className="font-sans text-slate-800 bg-white">
        <FloatingMedicalBackground />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 sm:pt-20 sm:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16">
            <div>
              <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-blue-700 mb-3">
                Mimosa Cottage Hospital
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight mb-5">
              Quality, Compassionate, Affordable Healthcare
              </h1>
              <p className="text-base sm:text-lg text-slate-700 max-w-xl">
                Mimosa Cottage Hospital provides quality, affordable, and compassionate healthcare in Nairobi,
                with a focus on maternal, child, and general medical services.
              </p>
            </div>

            <div>
              <img
                src="https://res.cloudinary.com/dwnhqho80/image/upload/v1772119579/WhatsApp_Image_2026-02-26_at_18.10.34_vobpyi.jpg"
                alt="Mimosa Cottage Hospital building"
                className="w-full h-65 sm:h-80 lg:h-95 object-cover rounded-1xl shadow-xl ring-1 ring-blue-100"
              />
            </div>
          </div>
        </div>

        {/* SVG Wave */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-0">
          <svg className="relative block h-16 sm:h-20 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Overview / Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-14">
          <div>
            <img
              src="https://res.cloudinary.com/dwnhqho80/image/upload/v1773422850/ERC_7041.jpg_1_hmgk4h.jpg"
              alt="Medical team supporting a patient during consultation"
              className="w-full h-65 sm:h-80 lg:h-90 object-cover rounded-1xl shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Overview / Mission</h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Mimosa Cottage Hospital provides quality, affordable, and compassionate healthcare in Nairobi,
              with a focus on maternal, child, and general medical services.
            </p>
          </div>
        </div>
      </section>


      {/* Who We Serve */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dwnhqho80/image/upload/v1772119635/WhatsApp_Image_2026-02-26_at_18.10.38_2_bccht1.jpg"
          alt="Healthcare professionals caring for diverse patients"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/55"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-6 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Who We Serve</h2>
            <p className="text-blue-50 text-base sm:text-lg leading-relaxed">
              We serve patients of all ages in Nairobi and surrounding communities. Our focus is on maternal
              care, preventive screenings, emergency treatment,
              and general medical services delivered with compassion and cultural sensitivity.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;