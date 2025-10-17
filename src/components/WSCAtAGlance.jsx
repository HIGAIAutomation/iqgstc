import React from 'react';
import { motion } from 'framer-motion';

const WSCAtAGlance = () => {
    const features = [
        {
            icon: (
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
            ),
            title: "Global Presence",
            description: "Worldwide network of certified educators and skill masters"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Skill Mastery",
            description: "Internationally recognized certification standards"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            title: "Government Recognition",
            description: "Approved by Indian Parliament and Planning Commission"
        }
    ];

    return (
        <section className="py-24 section-bg-luxury relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient-primary mb-6">
                        WSC at a Glance
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        World Skill Council - The International Standard for Skill Training, Assessment, and Career Development
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <motion.div
                                className="professional-card"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <h3 className="text-2xl font-display font-semibold text-gradient-primary mb-4">
                                    International Excellence
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    World Skill Council is the International Standard Skill Training, Skill Assessment, and Career Development Certification body of World Skill Corporation, constituted in London, UK. It has a worldwide presence of Educators & Skill Masters who train thousands of skill aspirants globally.
                                </p>
                            </motion.div>

                            <motion.div
                                className="professional-card"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-display font-semibold text-gradient-primary mb-4">
                                    Strategic Partnership
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    IQGSTc is partnered with WSC to provide certified courses, skill assessments, and career development programs. WSC is associated with Central Bharat Sevak Samaj, National Development Agency established in 1952 by Planning Commission, Government of India. The constitution and functioning of Bharat Sevak Samaj is approved unanimously by the Indian Parliament. Over the past seven decades, Central BSS has trained youth for better employment worldwide.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid gap-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="professional-card text-center group"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "var(--shadow-professional-lg)"
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {[
                        { number: "70+", label: "Years of Excellence" },
                        { number: "1000+", label: "Certified Educators" },
                        { number: "50+", label: "Countries Served" },
                        { number: "100K+", label: "Students Trained" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center professional-card"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-4xl md:text-5xl font-display font-bold text-gradient-accent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WSCAtAGlance;