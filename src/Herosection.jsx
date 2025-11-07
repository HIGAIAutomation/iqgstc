import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from './assets/iqgstc-logo.png';
import herosection from './assets/herosection.jpg';

const Herosection = ({ onCourseSelect }) => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden pt-16 pb-32">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${herosection})`}}></div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-slate-900/80"></div>

            

            {/* Professional Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>



            {/* Professional Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl">


                <motion.div
                    className="text-2xl md:text-4xl font-light text-blue-100 mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                    Empowering Global Skills with
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-8xl font-heading font-black text-white mb-8 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    IQ <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">Global Skills</span> Training Center
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl mb-12 text-blue-100 font-light max-w-5xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transform your career with internationally recognized certifications.
                    Join 1000+ successful professionals worldwide in our comprehensive skill development courses.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link to="/contact">
                        <motion.button
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enquire Now
                        </motion.button>
                    </Link>
                    <motion.button
                        onClick={() => onCourseSelect && onCourseSelect({ code: 'SAMPLE001', name: 'Sample Course', duration: '6 MONTHS', subjects: [] })}
                        className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Courses
                    </motion.button>
                </motion.div>


            </div>

            {/* Professional Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Herosection;