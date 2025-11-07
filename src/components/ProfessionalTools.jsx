import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfessionalTools = () => {
    const [activeTool, setActiveTool] = useState(0);

    const tools = [
        {
            title: "Career Path Calculator",
            description: "Calculate your career progression based on skills and experience",
            icon: (
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            features: ["Skill gap analysis", "Salary projections", "Career timeline", "Industry trends"]
        },
        {
            title: "Certification Tracker",
            description: "Track your certification progress and upcoming renewals",
            icon: (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            features: ["Progress monitoring", "Renewal alerts", "Certificate validation", "Achievement badges"]
        },
        {
            title: "Skill Development Planner",
            description: "Create personalized learning plans for skill enhancement",
            icon: (
                <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            features: ["Custom learning paths", "Resource recommendations", "Progress tracking", "Goal setting"]
        },
        {
            title: "Industry Insights Dashboard",
            description: "Stay updated with latest industry trends and job market data",
            icon: (
                <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            features: ["Market trends", "Job market analysis", "Industry reports", "Networking opportunities"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Professional Development Tools
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Access cutting-edge tools designed to accelerate your career growth and keep you ahead in your field.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Tool Navigation */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                                    activeTool === index
                                        ? 'bg-white shadow-lg border-l-4 border-blue-500'
                                        : 'bg-white/50 hover:bg-white hover:shadow-md'
                                }`}
                                onClick={() => setActiveTool(index)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-lg ${
                                        activeTool === index ? 'bg-blue-100' : 'bg-gray-100'
                                    }`}>
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{tool.title}</h3>
                                        <p className="text-gray-600">{tool.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Tool Details */}
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        key={activeTool}
                    >
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4">
                                {tools[activeTool].icon}
                            </div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                {tools[activeTool].title}
                            </h3>
                            <p className="text-lg text-gray-600">
                                {tools[activeTool].description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h4>
                            <ul className="space-y-3">
                                {tools[activeTool].features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <motion.button
                            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Access Tool
                        </motion.button>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Career?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Join thousands of professionals who are using our tools to achieve their career goals.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                            Get Started Today
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProfessionalTools;