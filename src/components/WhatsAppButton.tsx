// src/components/WhatsAppButton.tsx
import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923001234567" // 🔹 Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white 
                 rounded-full shadow-lg flex items-center justify-center w-14 h-14 z-50"
      title="Need any help? Chat with us on WhatsApp"
    >
      <img src="/src/assets/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
