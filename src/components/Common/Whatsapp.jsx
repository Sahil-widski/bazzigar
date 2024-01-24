// components/WhatsAppButton.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Implement your logic to open the WhatsApp chat
    // e.g., window.open('your WhatsApp chat link', '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp size={30} />
    </div>
  );
};

export default WhatsAppButton;
