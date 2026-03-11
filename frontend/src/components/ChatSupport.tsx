import { FaWhatsapp } from 'react-icons/fa';

export const FloatingChatWidget = () => {
  const WHATSAPP_NUMBER = '+254724948894'; 
  const WHATSAPP_MESSAGE = 'Hello Mimosa, I need assistance.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group hover:-translate-y-1"
      aria-label="Open WhatsApp chat"
    >
      <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </button>
  );
};

export default FloatingChatWidget;
