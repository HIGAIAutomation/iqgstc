import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusinessDivisions = () => {
    const divisions = [
        {
            name: 'Business Analytics & Intelligence',
            description: 'Master data-driven decision making and business intelligence tools',
            icon: '📊',
            courses: [
                'Certified Professional in Business Analysis',
                'Certified Professional in Data Analysis',
                'Certified Professional in Data Cleaning',
                'Certified Professional in Data Modeling',
                'Certified Professional in Data Warehouse',
                'Certified Professional in Microsoft Power BI',
                'Certified Professional in SOL',
                'Certified Professional in Statistics',
                'Certified Professional in Tableau'
            ]
        },
        {
            name: 'Business Law',
            description: 'Understanding legal frameworks and compliance in business operations',
            icon: '⚖️',
            courses: ['Corporate Law', 'Contract Management', 'Legal Compliance']
        },
        {
            name: 'Business Strategy',
            description: 'Strategic planning and competitive advantage development',
            icon: '🎯',
            courses: ['Strategic Management', 'Competitive Analysis', 'Business Planning']
        },
        {
            name: 'Communication',
            description: 'Effective business communication and presentation skills',
            icon: '💬',
            courses: ['Business Communication', 'Public Speaking', 'Presentation Skills']
        },
        {
            name: 'E-Commerce',
            description: 'Digital commerce strategies and online business models',
            icon: '🛒',
            courses: ['E-Commerce Fundamentals', 'Digital Marketing', 'Online Sales']
        },
        {
            name: 'Entrepreneurship',
            description: 'Starting and managing successful business ventures',
            icon: '🚀',
            courses: ['Business Startup', 'Entrepreneurship', 'Innovation Management']
        },
        {
            name: 'Human Resources',
            description: 'HR management and organizational development',
            icon: '👥',
            courses: ['HR Management', 'Talent Acquisition', 'Employee Relations']
        },
        {
            name: 'Industry',
            description: 'Industry-specific knowledge and sector expertise',
            icon: '🏭',
            courses: ['Industry Analysis', 'Sector Knowledge', 'Market Trends']
        },
        {
            name: 'Management',
            description: 'Leadership and organizational management skills',
            icon: '👔',
            courses: ['Leadership Skills', 'Team Management', 'Organizational Behavior']
        },
        {
            name: 'Media',
            description: 'Media production and content creation for business',
            icon: '📺',
            courses: ['Digital Media', 'Content Creation', 'Media Strategy']
        },
        {
            name: 'Operations',
            description: 'Business operations and process optimization',
            icon: '⚙️',
            courses: ['Operations Management', 'Process Optimization', 'Supply Chain']
        },
        {
            name: 'Project Management',
            description: 'Project planning, execution and delivery management',
            icon: '📋',
            courses: ['Project Planning', 'Agile Methodology', 'Risk Management']
        },
        {
            name: 'Real Estate',
            description: 'Real estate investment and property management',
            icon: '🏢',
            courses: ['Real Estate Investment', 'Property Management', 'Market Analysis']
        },
        {
            name: 'Sales',
            description: 'Sales techniques and customer relationship management',
            icon: '📈',
            courses: ['Sales Techniques', 'CRM', 'Customer Service']
        },
        {
            name: 'Other Business',
            description: 'Specialized business skills and emerging trends',
            icon: '💼',
            courses: ['Business Ethics', 'Corporate Governance', 'Emerging Trends']
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Business Skill Divisions</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our comprehensive range of business skill divisions designed to enhance your professional capabilities
                    </p>
                </motion.div>

                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link
                        to="/courses"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to All Courses
                    </Link>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {divisions.map((division, index) => (
                        <motion.div
                            key={division.name}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-professional hover:shadow-professional-lg transition-all duration-300 card-3d group"
                            whileHover={{ scale: 1.03, y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {division.icon}
                                </div>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                                    Division
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                {division.name}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {division.description}
                            </p>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-800 mb-2">Popular Courses:</h4>
                                <div className="space-y-2">
                                    {division.courses.map((course, courseIndex) => (
                                        <Link
                                            key={courseIndex}
                                            to={`/certificate/${course.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                            className="block px-3 py-2 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-sm rounded-lg transition-colors duration-300 border-l-2 border-transparent hover:border-blue-500"
                                        >
                                            {course}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to={`/certificate/${division.name.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-blue-700 group-hover:to-blue-800 text-center block"
                            >
                                Explore Division
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BusinessDivisions;