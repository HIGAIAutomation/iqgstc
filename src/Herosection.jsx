import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Herosection = () => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-slate-50 to-gray-100 text-gray-900 relative overflow-hidden">
            {/* Professional Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>


            {/* Professional Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200">
                        World-Class Skill Development Platform
                    </span>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-7xl font-heading font-black text-gray-900 mb-8 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Welcome to
                    <br />
                    <span className="text-gradient-primary">IQGSTc</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl mb-12 text-gray-700 font-light max-w-4xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Your Gateway to Global Skill Excellence & Professional Certification.
                    Join thousands of successful professionals who have transformed their careers with our world-class training programs.
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
                        <span className="relative z-10">Apply Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Link>

                    <Link
                        to="/courses"
                        className="btn-secondary text-lg px-12 py-4"
                    >
                        Explore Courses
                    </Link>

                    <Link
                        to="/contact"
                        className="text-gray-700 hover:text-blue-600 font-medium px-8 py-4 transition-colors duration-300"
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
                        { number: "70+", label: "Years Experience" },
                        { number: "100%", label: "Success Rate" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        >
                            <div className="text-2xl md:text-3xl font-heading font-bold text-blue-600 mb-1">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
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