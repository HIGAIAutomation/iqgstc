import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MontessoriOfferPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden border border-indigo-100"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-center py-6">
          <div className="flex justify-center mb-2">
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
          <h2 className="text-2xl font-bold">Discover the Montessori Way</h2>
          <p className="text-sm opacity-90 mt-1">
            Nurturing creativity, curiosity & confidence.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <BookOpen className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-700 text-lg font-medium mb-2">
            Shape the future of young minds with Montessori excellence.
          </p>
          <p className="text-gray-500 mb-6">
            Learn proven teaching techniques that spark lifelong learning —
            designed for educators, parents, and childcare professionals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate(`/courses/${encodeURIComponent('CATEGORY COURSES')}/${encodeURIComponent('CHILD EDUCATION')}/CE004`);
                onClose();
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all font-semibold flex items-center justify-center gap-2"
            >
              Explore Curriculum <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                navigate('/contact');
                onClose();
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-3xl font-light"
        >
          ×
        </button>
      </motion.div>
    </div>
  );
};

export default MontessoriOfferPopup;
