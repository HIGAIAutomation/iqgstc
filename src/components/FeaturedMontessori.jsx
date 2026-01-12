import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Award, GraduationCap, ArrowRight } from 'lucide-react';

const FeaturedMontessori = () => {
    const navigate = useNavigate();

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
        <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Featured Badge */}
                <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg">
                        <span className="font-bold text-sm uppercase tracking-wide">Featured Course</span>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>

                            <div className="relative z-10">
                                <motion.h3
                                    className="text-3xl md:text-4xl font-bold mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    Discover the Montessori Way
                                </motion.h3>
                                <motion.p
                                    className="text-xl text-pink-100 mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Nurturing creativity, curiosity & confidence.
                                </motion.p>
                                <motion.h4
                                    className="text-2xl md:text-3xl font-bold mb-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    BSS Diploma in Montessori and Child Education
                                </motion.h4>

                                {/* Course Info Cards */}
                                <div className="flex flex-wrap gap-4">
                                    <motion.div
                                        className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        <Clock className="w-6 h-6 text-yellow-300" />
                                        <div>
                                            <p className="text-xs text-pink-100">Duration</p>
                                            <p className="font-bold text-lg">One Year</p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.7 }}
                                    >
                                        <Award className="w-6 h-6 text-yellow-300" />
                                        <div>
                                            <p className="text-xs text-pink-100">Course Code</p>
                                            <p className="font-bold text-lg">CE004</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Column - Description */}
                                <div>
                                    <motion.p
                                        className="text-gray-700 text-lg mb-6 leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        Shape the future of young minds with Montessori excellence. Learn proven teaching techniques that spark lifelong learning — designed for educators, parents, and childcare professionals.
                                    </motion.p>

                                    {/* CTA Buttons */}
                                    <motion.div
                                        className="space-y-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <button
                                            onClick={() => navigate(`/courses/${encodeURIComponent('CATEGORY COURSES')}/${encodeURIComponent('CHILD EDUCATION')}/CE004`)}
                                            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-pink-600 hover:to-purple-700 transition duration-300 font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
                                        >
                                            <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                            <span>View Full Curriculum</span>
                                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => navigate('/contact?course=Montessori Education')}
                                            className="w-full bg-white border-2 border-purple-600 text-purple-600 py-4 px-8 rounded-xl hover:bg-purple-50 transition duration-300 font-bold text-lg flex items-center justify-center space-x-3 group"
                                        >
                                            <GraduationCap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                            <span>Enroll Now</span>
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Right Column - Course Highlights */}
                                <div>
                                    <motion.h5
                                        className="font-bold text-gray-800 text-xl mb-4 flex items-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <BookOpen className="w-6 h-6 mr-3 text-purple-600" />
                                        Course Highlights
                                    </motion.h5>
                                    <div className="space-y-3">
                                        {subjects.map((subject, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-start space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg hover:shadow-md transition-shadow duration-300"
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
                                            >
                                                <div className="w-7 h-7 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-white text-sm font-bold">{index + 1}</span>
                                                </div>
                                                <p className="text-gray-700 font-medium">{subject}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMontessori;
