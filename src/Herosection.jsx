import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from './assets/iqgstc-logo.png';
import herosection from './assets/herosection.jpg';

const Herosection = () => {
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
                

                <motion.h1
                    className="text-4xl md:text-8xl font-heading font-black text-white mb-8 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Empowering
                    <br />
                    <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">Global Skills</span>
                    <br />
                    <span className="text-amber-100">IQGSTc</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl mb-12 text-blue-100 font-light max-w-5xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transform your career with internationally recognized certifications.
                    Join 1000+ successful professionals worldwide in our comprehensive skill development programs.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        to="/courses"
                        className="group relative btn-primary text-lg px-12 py-4 overflow-hidden"
                    >
                        <span className="relative text-gray-900 z-10">Apply <span className="text-white">Now</span></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>

                    <Link
                        to="/courses"
                        className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-12 py-4 rounded-lg font-semibold transition-colors duration-300"
                    >
                        Explore Courses
                    </Link>

                    <Link
                        to="/contact"
                        className="text-white hover:text-blue-200 font-medium px-8 py-4 transition-colors duration-300"
                    >
                        Contact Us →
                    </Link>
                </motion.div>

                {/* Professional Stats */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {[
                        { number: "1000+", label: "Students Trained" },
                        { number: "50+", label: "Countries Served" },
                        { number: "250+", label: "Courses" },
                        { number: "100%", label: "Success Rate" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        >
                            <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-blue-200 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
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