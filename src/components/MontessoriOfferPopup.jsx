import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MontessoriOfferPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000); // Show popup after 10 seconds

      // Auto-hide after 8 seconds
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
        onClose();
      }, 18000); // Total 18 seconds (10 + 8)

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !showPopup) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 max-w-sm w-full sm:w-auto"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold">Discover the Montessori Way</h3>
              <p className="text-sm text-pink-100">Nurturing creativity, curiosity & confidence.</p>
            </div>
            <button
              onClick={() => {
                setShowPopup(false);
                onClose();
              }}
              className="text-white hover:text-gray-200 text-xl font-bold ml-2"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-700 text-sm mb-4">
            Shape the future of young minds with Montessori excellence. Learn proven teaching techniques that spark lifelong learning — designed for educators, parents, and childcare professionals.
          </p>

          <div className="space-y-2">
            <button
              onClick={() => {
                navigate(`/courses/${encodeURIComponent('CATEGORY COURSES')}/${encodeURIComponent('CHILD EDUCATION')}/CE004`);
                setShowPopup(false);
                onClose();
              }}
              className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300 text-sm font-medium"
            >
              Explore Curriculum
            </button>
            <button
              onClick={() => {
                navigate('/contact?course=Montessori Education');
                setShowPopup(false);
                onClose();
              }}
              className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300 text-sm font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MontessoriOfferPopup;
