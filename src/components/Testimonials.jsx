import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Rahul Sharma",
            course: "Digital Marketing Specialist",
            rating: 5,
            text: "IQGSTc transformed my career! The WSC certification opened doors to international opportunities. Highly recommended!",
            image: "/placeholder-avatar.jpg",
            achievement: "Promoted to Senior Marketing Manager"
        },
        {
            name: "Priya Patel",
            course: "Web Development",
            rating: 5,
            text: "Excellent training program with industry experts. The practical approach and certification helped me land my dream job.",
            image: "/placeholder-avatar.jpg",
            achievement: "Full-Stack Developer at Tech Corp"
        },
        {
            name: "Amit Kumar",
            course: "Financial Planning",
            rating: 5,
            text: "Professional certification that employers recognize globally. The course content was comprehensive and up-to-date.",
            image: "/placeholder-avatar.jpg",
            achievement: "Certified Financial Advisor"
        },
        {
            name: "Sneha Reddy",
            course: "Graphic Design",
            rating: 5,
            text: "Creative and supportive learning environment. The skills I gained are directly applicable in my current role.",
            image: "/placeholder-avatar.jpg",
            achievement: "Lead Designer at Creative Studio"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-30 blur-2xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Success Stories
                </motion.h2>

                <motion.p
                    className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Hear from our graduates who transformed their careers with IQGSTc certifications
                </motion.p>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="glass-effect p-8 md:p-12 rounded-3xl shadow-professional-lg relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {/* Quote icon */}
                        <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                            </svg>
                        </div>

                        <div className="text-center mb-8">
                            <motion.div
                                className="relative inline-block mb-6"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-professional">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </motion.div>

                            <motion.h3
                                className="text-2xl font-bold text-gray-800 mb-2"
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {testimonials[currentIndex].name}
                            </motion.h3>

                            <motion.p
                                className="text-blue-600 font-semibold mb-2"
                                key={`course-${currentIndex}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {testimonials[currentIndex].course}
                            </motion.p>

                            <motion.p
                                className="text-sm text-gray-500 mb-4"
                                key={`achievement-${currentIndex}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {testimonials[currentIndex].achievement}
                            </motion.p>

                            <motion.div
                                className="flex justify-center mb-6"
                                key={`stars-${currentIndex}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                {renderStars(testimonials[currentIndex].rating)}
                            </motion.div>
                        </div>

                        <motion.blockquote
                            className="text-xl text-gray-600 text-center italic leading-relaxed"
                            key={`text-${currentIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            "{testimonials[currentIndex].text}"
                        </motion.blockquote>
                    </motion.div>

                    <motion.div
                        className="flex justify-center mt-8 space-x-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <motion.button
                            onClick={prevTestimonial}
                            className="group relative w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        <div className="flex space-x-3">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                        index === currentIndex
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-lg'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextTestimonial}
                            className="group relative w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;