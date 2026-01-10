 import { useState} from 'react';
 import { Menu, X, Phone, Heart, LocateIcon  } from 'lucide-react';
 
 const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
 return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 w-full">
      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm md:text-base">
        <Phone className="inline w-4 h-4 mr-2" />
        Emergency Hotline: <span className="font-bold">+254 700 000 000</span> - Available 24/7
      </div>
      <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm md:text-base">
        <LocateIcon className="inline w-4 h-4 mr-2" />
        Location: <span className="font-bold">Thome, Marurui Nairobi(KE)</span>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-sky-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-blue-800">Medi-WarePlus</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Doctors</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="bg-linear-to-r from-blue-600 to-sky-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium">
                Sign In
              </button>
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
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#doctors" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Doctors</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
              <button className="w-full bg-linear-to-r from-blue-600 to-sky-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
                Sign In
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
    );
};

export default NavBar;