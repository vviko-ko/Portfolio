"use client";
import React, { useState } from "react";
import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

const DownloadCVSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="cv"
      className="w-full px-4 py-24  text-center  shadow-inner "
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          📄 Download My CV
        </h2>
        <p className="mb-8 text-gray-600 text-lg">
          Get a quick look at my experience and skills. You can either download the PDF or preview it right here.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/victor-cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>

          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-50 transition shadow"
          >
            <Eye className="w-5 h-5" />
            Preview CV
          </button>
        </div>

        {/* PDF Preview Modal */}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-5xl w-full p-6 relative">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">CV Preview</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              </div>
              <iframe
                src="/victor-cv.pdf"
                className="w-full h-[80vh] rounded-lg border border-gray-200 dark:border-gray-700"
                title="CV Preview"
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      </motion.div>
    </section>
  );
};

export default DownloadCVSection;