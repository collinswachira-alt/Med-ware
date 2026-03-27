 import { Phone, MapPin, Mail } from 'lucide-react';

 
 const LandingFooter = () => {
    const currentYear = new Date().getFullYear();

  return (
     <footer id="contact" className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="https://res.cloudinary.com/dwnhqho80/image/upload/v1772804953/images__1_-removebg-preview_gb8sqd.png" alt="Mimosa logo" className="w-full h-full object-contain" />
              </div>
                <span className="text-xl font-bold">Mimosa Cottage</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing quality Medi-Wareservices with compassion and excellence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/staff" className="hover:text-white transition-colors">Staff</a></li>
                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services/maternity-care" className="hover:text-white transition-colors">Maternal</a></li>
                <li><a href="/services/stis-hiv-aids" className="hover:text-white transition-colors">S.T.Is</a></li>
                <li><a href="/services/immunizations" className="hover:text-white transition-colors">Immunizations</a></li>
                <li><a href="/services/ambulance-referral" className="hover:text-white transition-colors">Emergency</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <a href="https://maps.google.com/?q=Thome,+Marurui+Nairobi,+Kenya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <span>Thome, Marurui Nairobi, Kenya</span>
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>+254 724 948894</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>mimosacottagehospital@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
          <div className="max-w- text-sm border-t-2 text-global-text-secondary text-center">
            <p className="text-global-text-primary mt-6 font-semibold">
              &copy; {currentYear} {"MedWare"}. All rights reserved.
            </p>
          </div>
      </footer>
    );
};

export default LandingFooter;