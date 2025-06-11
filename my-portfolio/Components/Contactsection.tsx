"use client";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppChatbox = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "2347043331177"; // 
  const preFilledMessage = encodeURIComponent("Hi Victor, I visited your portfolio and would like to chat!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${preFilledMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-500  text-white p-4 rounded-full shadow-xl transition focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-72 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-4"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Hey👋,Thank you for checking out my portfolio</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Click below to chat with me directly on WhatsApp.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500  text-white px-4 py-2 rounded-lg text-sm inline-block text-center w-full"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppChatbox;
