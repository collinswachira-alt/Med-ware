 import { useState} from 'react';
 import { Menu, X, Phone, LocateIcon } from 'lucide-react';
 
 const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
 return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 w-full">
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm md:text-base">
        <a href="tel:+254703884999" className="inline-flex items-center hover:opacity-90 transition-opacity">
          <Phone className="inline w-4 h-4 mr-2" />
          Emergency Hotline: <span className="font-bold">+254 700 000 000</span> - Available 24/7
        </a>
      </div>
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm md:text-base">
        <a href="https://maps.google.com/?q=Thome,+Marurui+Nairobi,+Kenya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-90 transition-opacity">
          <LocateIcon className="inline w-4 h-4 mr-2" />
          Location: <span className="font-bold">Thome, Marurui Nairobi(KE)</span>
        </a>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="https://res.cloudinary.com/dwnhqho80/image/upload/v1772804953/images__1_-removebg-preview_gb8sqd.png" alt="Mimosa logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-blue-800">Mimosa Cottage</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="/staff" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Staff</a>
              <a href="/about-us" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              {/* <button className="bg-linear-to-r from-blue-600 to-sky-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium">
                Sign In
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 animate-in slide-in-from-top">
              <a href="/" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="services" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="/staff" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Staff</a>
              <a href="/about-us" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              {/* <button className="w-full bg-linear-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
                Sign In
              </button> */}
            </div>
          )}
        </div>
      </nav>
    </div>
    );
};

export default NavBar;