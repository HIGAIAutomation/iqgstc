import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: (
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Internationally Recognized Certifications",
            description: "WSC certifications are globally accepted and recognized by employers worldwide, giving you a competitive edge in the job market."
        },
        {
            icon: (
                <svg className="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Expert Faculty & Mentors",
            description: "Learn from certified WSC educators and industry experts with decades of experience in skill training and career development."
        },
        {
            icon: (
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Practical & Industry-Focused",
            description: "Our courses are designed with industry input, ensuring you learn skills that are immediately applicable in real-world scenarios."
        },
        {
            icon: (
                <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
            ),
            title: "Affordable & Flexible",
            description: "Quality education at competitive prices with flexible learning options including online, offline, and hybrid modes."
        },
        {
            icon: (
                <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Career Support & Placement",
            description: "Comprehensive career guidance, resume building, interview preparation, and placement assistance to help you succeed."
        },
        {
            icon: (
                <svg className="w-16 h-16 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Lifetime Support",
            description: "Access to our alumni network, continuous learning resources, and ongoing support throughout your career journey."
        }
    ];

    return (
        <section className="py-24 section-bg-accent relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
                        Why Choose IQGSTc?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Discover what makes IQGSTc the preferred choice for skill development and career advancement
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="premium-card text-center group"
                            whileHover={{
                                scale: 1.08,
                                rotateY: 5,
                                boxShadow: "var(--shadow-glow)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                                    {reason.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="premium-card max-w-5xl mx-auto relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25"></div>
                        <div className="relative">
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                                Ready to Transform Your Career?
                            </h3>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                                Join thousands of successful professionals who have chosen IQGSTc for their skill development journey.
                                Start your path to international certification today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <motion.button
                                    className="btn-primary text-lg px-10 py-4"
                                    whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Your Journey Today
                                </motion.button>
                                <motion.button
                                    className="btn-secondary text-lg px-10 py-4"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download Brochure
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;