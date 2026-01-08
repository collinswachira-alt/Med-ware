 import { Phone, MapPin, Mail, Heart } from 'lucide-react';

 
 const LandingFooter = () => {

  return (
     <footer id="contact" className="bg-gray-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" fill="white" />
                </div>
                <span className="text-xl font-bold">MedWare Plus</span>
              </div>
              <p className="text-gray-400 mb-4">
                Providing quality Medi-Wareservices with compassion and excellence.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#doctors" className="hover:text-white transition-colors">Doctors</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Neurology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>123 Medical Center Drive, Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+254 700 000 000</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@Mimosaplus.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default LandingFooter;