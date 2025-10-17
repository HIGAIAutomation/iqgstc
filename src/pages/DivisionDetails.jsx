import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const DivisionDetails = () => {
    const { divisionId } = useParams();

    const divisions = [
        {
            id: 'business-analytics-intelligence',
            name: 'Business Analytics & Intelligence',
            description: 'Master data-driven decision making and business intelligence tools',
            icon: 'bi bi-graph-up',
            courses: [
                'Certified Professional in Business Analysis',
                'Certified Professional in Data Analysis',
                'Certified Professional in Data Cleaning',
                'Certified Professional in Data Modeling',
                'Certified Professional in Data Warehouse',
                'Certified Professional in Microsoft Power BI',
                'Certified Professional in SQL',
                'Certified Professional in Statistics',
                'Certified Professional in Tableau'
            ]
        },
        {
            id: 'business-law-division',
            name: 'Business Law Division',
            description: 'Understanding legal frameworks and compliance in business operations',
            icon: 'bi bi-scale',
            courses: [
                'Certified Professional in Contract Law',
                'Certified Professional in Contract Management',
                'Certified Professional in Data Protection',
                'Certified Professional in GDPR',
                'Certified Professional in Healthcare IT',
                'Certified Professional in Law',
                'Certified Professional in Legal English',
                'Certified Professional in Medical Device Development'
            ]
        },
        {
            id: 'business-strategy-division',
            name: 'Business Strategy Division',
            description: 'Strategic planning and competitive advantage development',
            icon: 'bi bi-bullseye',
            courses: [
                'Certified Professional in Business Development',
                'Certified Professional in Digital Marketing',
                'Certified Professional in Digital Transformation',
                'Certified Professional in ESG (Environmental, Social and Governance)',
                'Certified Professional in Management Consulting',
                'Certified Professional in Strategic Planning',
                'Certified Professional in TOGAF 9 Certified',
                'Certified Professional in TOGAF 9 Foundation'
            ]
        },
        {
            id: 'communication-division',
            name: 'Communication Division',
            description: 'Effective business communication and presentation skills',
            icon: 'bi bi-chat-dots',
            courses: [
                'Certified Professional in Business Communication',
                'Certified Professional in Business Writing',
                'Certified Professional in Communication Skills',
                'Certified Professional in Email Writing and Etiquette',
                'Certified Professional in Fiction Writing',
                'Certified Professional in Presentation Skills',
                'Certified Professional in Public Speaking',
                'Certified Professional in Storytelling',
                'Certified Professional in Writing'
            ]
        },
        {
            id: 'e-commerce-division',
            name: 'E-Commerce Division',
            description: 'Digital commerce strategies and online business models',
            icon: 'bi bi-cart',
            courses: [
                'Certified Professional in Amazon FBA',
                'Certified Professional in Dropshipping',
                'Certified Professional in Etsy',
                'Certified Professional in Online Business',
                'Certified Professional in Passive Income',
                'Certified Professional in Selling on Amazon',
                'Certified Professional in Shopify',
                'Certified Professional in Shopify Dropshipping'
            ]
        },
        {
            id: 'entrepreneurship-division',
            name: 'Entrepreneurship Division',
            description: 'Starting and managing successful business ventures',
            icon: 'bi bi-rocket',
            courses: [
                'Certified Professional in Business Plan',
                'Certified Professional in Blogging',
                'Certified Professional in Business Fundamentals',
                'Certified Professional in Business Strategy',
                'Certified Professional in Entrepreneurship Fundamentals',
                'Certified Professional in Freelancing',
                'Certified Professional in Home Business',
                'Certified Professional in Online Business',
                'Certified Professional in Startup'
            ]
        },
        {
            id: 'human-resources-division',
            name: 'Human Resources Division',
            description: 'HR management and organizational development',
            icon: 'bi bi-people',
            courses: [
                'Certified Professional in Corporate Learning and Development (L&D)',
                'Certified Professional in Diversity and Inclusion',
                'Certified Professional in Emotional Intelligence',
                'Certified Professional in Employment Law',
                'Certified Professional in Hiring',
                'Certified Professional in HR Analytics',
                'Certified Professional in Instructional Design',
                'Certified Professional in Recruiting'
            ]
        },
        {
            id: 'industry-division',
            name: 'Industry Division',
            description: 'Industry-specific knowledge and sector expertise',
            icon: 'bi bi-building',
            courses: [
                'Certified Professional in Chemical Engineering',
                'Certified Professional in Electrical Engineering',
                'Certified Professional in EPLAN Electric P8',
                'Certified Professional in Life Coach Training',
                'Certified Professional in Oil and Gas Industry',
                'Certified Professional in Piping',
                'Certified Professional in Solar Energy',
                'Certified Professional in Trucking',
                'Certified Professional in Workplace Health and Safety'
            ]
        },
        {
            id: 'management-division',
            name: 'Management Division',
            description: 'Leadership and organizational management skills',
            icon: 'bi bi-person-badge',
            courses: [
                'Certified Professional in Leadership',
                'Certified Professional in Business Strategy',
                'Certified Professional in ISO 9001',
                'Certified Professional in Management Skills',
                'Certified Professional in Manager Training',
                'Certified Professional in PMP',
                'Certified Professional in Product Management',
                'Certified Professional in Project Management',
                'Certified Professional in Quality Management'
            ]
        },
        {
            id: 'media-division',
            name: 'Media Division',
            description: 'Media production and content creation for business',
            icon: 'bi bi-tv',
            courses: [
                'Certified Professional in Amazon Kindle Direct Publishing (KDP)',
                'Certified Professional in Content Creation',
                'Certified Professional in Journalism',
                'Certified Professional in Podcasting',
                'Certified Professional in Screenwriting and Scriptwriting Writing',
                'Certified Professional in SEO',
                'Certified Professional in YouTube Audience Growth S'
            ]
        },
        {
            id: 'operations-division',
            name: 'Operations Division',
            description: 'Business operations and process optimization',
            icon: 'bi bi-gear',
            courses: [
                'Certified Professional in Quality Management',
                'Certified Professional in Lean',
                'Certified Professional in Logistics Management',
                'Certified Professional in Six Sigma',
                'Certified Professional in Six Sigma Black Belt',
                'Certified Professional in Six Sigma Green Belt',
                'Certified Professional in Six Sigma Yellow Belt',
                'Certified Professional in Supply Chain',
                'Certified Professional in Virtual Assistant'
            ]
        },
        {
            id: 'project-management-division',
            name: 'Project Management Division',
            description: 'Project planning, execution and delivery management',
            icon: 'bi bi-clipboard-check',
            courses: [
                'Certified Professional in Agile',
                'Certified Professional in CAPM Certified Associate in Project Management',
                'Certified Professional in PMI PMBOK',
                'Certified Professional in PMI-ACP',
                'Certified Professional in PMP',
                'Certified Professional in Product Owner',
                'Certified Professional in Professional Scrum Master (PSM)',
                'Certified Professional in Scrum'
            ]
        },
        {
            id: 'real-estate-division',
            name: 'Real Estate Division',
            description: 'Real estate investment and property management',
            icon: 'bi bi-building-fill',
            courses: [
                'Certified Professional in Airbnb Hosting',
                'Certified Professional in Construction',
                'Certified Professional in Financial Modeling',
                'Certified Professional in Mortgage',
                'Certified Professional in Notary Business',
                'Certified Professional in Real Estate Flipping',
                'Certified Professional in Real Estate Investing',
                'Certified Professional in Real Estate Marketing'
            ]
        },
        {
            id: 'sales-division',
            name: 'Sales Division',
            description: 'Sales techniques and customer relationship management',
            icon: 'bi bi-graph-up-arrow',
            courses: [
                'Certified Professional in B2B Sales',
                'Certified Professional in Cold Email',
                'Certified Professional in Customer Service',
                'Certified Professional in Customer Success Management',
                'Certified Professional in Lead Generation',
                'Certified Professional in LinkedIn',
                'Certified Professional in Persuasion',
                'Certified Professional in Presentation Skills',
                'Certified Professional in Sales Skills'
            ]
        },
        {
            id: 'other-business-division',
            name: 'Other Business Division',
            description: 'Specialized business skills and emerging trends',
            icon: 'bi bi-briefcase',
            courses: [
                'Certified Professional in Data Entry Skills',
                'Certified Professional in Freelance Writing',
                'Certified Professional in Fundraising Electronics',
                'Certified Professional in Grant Writing',
                'Certified Professional in Home business',
                'Certified Professional in QuickBooks Online',
                'Certified Professional in Sports Betting',
                'Certified Professional in Transcription'
            ]
        }
    ];

    const division = divisions.find(div => div.id === divisionId);

    if (!division) {
        return (
            <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Division Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested division information is not available.</p>
                    <Link to="/business-divisions" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                        Back to Divisions
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        to="/business-divisions"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 mb-4"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Business Divisions
                    </Link>
                </motion.div>

                {/* Division Header */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                                <i className={`${division.icon} text-white`}></i>
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{division.name}</h1>
                                <p className="text-gray-600">{division.description}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                                {division.courses.length} Courses Available
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* All Courses - Professional List Layout */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Courses</h2>

                    <div className="space-y-4">
                        {division.courses.map((course, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                                            <i className={`${division.icon} text-white`}></i>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {course}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Duration: 3-6 months
                                                </div>
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Eligibility: Beginners to Advanced
                                                </div>
                                                <div className="flex items-center">
                                                    <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                    WSQF Certified
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                                        <Link
                                            to={`/certificate/${course.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center whitespace-nowrap"
                                        >
                                            View Details
                                        </Link>
                                        <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap">
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Learning Journey?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Choose from our comprehensive range of {division.name} courses and take the first step towards professional excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Get Course Information
                        </Link>
                        <Link
                            to="/business-divisions"
                            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            Explore Other Divisions
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DivisionDetails;