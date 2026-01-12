import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen, ArrowRight, GraduationCap, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MontessoriOfferPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000); // Show popup after 5 seconds (reduced for more prominence)

      // Auto-hide after 15 seconds
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
        onClose();
      }, 20000); // Total 20 seconds (5 + 15)

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !showPopup) return null;

  const subjects = [
    "Communicative English & Computer Fundamentals",
    "Child Psychology & Early Childhood Care",
    "Montessori Method of Teaching Arts & Crafts",
    "Pre-School & Personal Management",
    "Health, Nutrition & Physical Education",
    "General Knowledge & Moral Science",
    "6 Practical Sessions"
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          setShowPopup(false);
          onClose();
        }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.4, type: "spring" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white p-6 rounded-t-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                  <span className="bg-yellow-300 text-purple-900 px-3 py-1 rounded-full text-xs font-bold">FEATURED COURSE</span>
                </div>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    onClose();
                  }}
                  className="text-white hover:text-gray-200 text-3xl font-light leading-none"
                >
                  ×
                </button>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-2">Discover the Montessori Way</h2>
              <p className="text-pink-100 text-lg">Nurturing creativity, curiosity & confidence.</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Course Title */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">BSS Diploma in Montessori and Child Education</h3>

              {/* Course Info */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-xs text-gray-600">Duration</p>
                    <p className="font-semibold text-gray-800">One Year</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="text-xs text-gray-600">Course Code</p>
                    <p className="font-semibold text-gray-800">CE004</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Shape the future of young minds with Montessori excellence. Learn proven teaching techniques that spark lifelong learning — designed for educators, parents, and childcare professionals.
              </p>
            </div>

            {/* Subjects */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                Course Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2 bg-gray-50 p-2 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700">{subject}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  navigate(`/courses/${encodeURIComponent('CATEGORY COURSES')}/${encodeURIComponent('CHILD EDUCATION')}/CE004`);
                  setShowPopup(false);
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-purple-700 transition duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>View Full Curriculum</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  navigate('/contact?course=Montessori Education');
                  setShowPopup(false);
                  onClose();
                }}
                className="w-full bg-white border-2 border-purple-600 text-purple-600 py-3 px-6 rounded-lg hover:bg-purple-50 transition duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Enroll Now</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MontessoriOfferPopup;
