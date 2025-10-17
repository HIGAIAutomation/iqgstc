import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const CertificateDetails = () => {
    const { certificateId } = useParams();

    // Mock certificate data - in real app this would come from API
    const certificateData = {
        'certified-professional-in-business-analysis': {
            title: 'Certified Professional in Business Analysis',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 4',
            duration: '6 months',
            eligibility: 'Graduates with basic computer knowledge',
            description: 'Master the art of business analysis with comprehensive training in requirements gathering, process modeling, and stakeholder management.',
            skills: [
                'Requirements Engineering',
                'Business Process Modeling',
                'Data Analysis',
                'Stakeholder Management',
                'Agile Methodologies',
                'Use Case Development'
            ],
            curriculum: [
                'Introduction to Business Analysis',
                'Requirements Gathering Techniques',
                'Process Modeling & Documentation',
                'Data Analysis Fundamentals',
                'Stakeholder Communication',
                'Agile BA Practices',
                'Tools & Software for BA'
            ],
            career: [
                'Business Analyst',
                'Requirements Analyst',
                'Process Analyst',
                'Product Analyst',
                'Systems Analyst'
            ],
            fee: '₹25,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-data-analysis': {
            title: 'Certified Professional in Data Analysis',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 4',
            duration: '4 months',
            eligibility: 'Basic mathematics and computer skills',
            description: 'Learn to analyze and interpret complex data sets using statistical methods and visualization techniques.',
            skills: [
                'Statistical Analysis',
                'Data Visualization',
                'Excel Advanced',
                'Python for Data Analysis',
                'SQL Queries',
                'Data Cleaning'
            ],
            curriculum: [
                'Statistics Fundamentals',
                'Data Collection Methods',
                'Data Cleaning & Preparation',
                'Exploratory Data Analysis',
                'Data Visualization Techniques',
                'Statistical Modeling',
                'Reporting & Presentation'
            ],
            career: [
                'Data Analyst',
                'Business Intelligence Analyst',
                'Data Scientist',
                'Analytics Consultant',
                'Research Analyst'
            ],
            fee: '₹20,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-data-cleaning': {
            title: 'Certified Professional in Data Cleaning',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 3',
            duration: '3 months',
            eligibility: 'Basic computer skills',
            description: 'Master the essential skills of data cleaning and preprocessing for accurate data analysis.',
            skills: [
                'Data Quality Assessment',
                'Missing Data Handling',
                'Duplicate Removal',
                'Data Standardization',
                'Outlier Detection',
                'Data Validation'
            ],
            curriculum: [
                'Data Quality Concepts',
                'Data Cleaning Techniques',
                'Handling Missing Values',
                'Duplicate Data Management',
                'Data Standardization Methods',
                'Quality Assurance Processes'
            ],
            career: [
                'Data Cleaning Specialist',
                'Data Quality Analyst',
                'Data Preprocessing Engineer',
                'Data Technician'
            ],
            fee: '₹15,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-data-modeling': {
            title: 'Certified Professional in Data Modeling',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 5',
            duration: '5 months',
            eligibility: 'Data analysis experience required',
            description: 'Design and implement complex data models for enterprise-level database systems.',
            skills: [
                'Entity-Relationship Diagrams',
                'Database Design',
                'Normalization Techniques',
                'Data Warehousing',
                'OLAP Modeling',
                'Performance Optimization'
            ],
            curriculum: [
                'Database Design Principles',
                'ERD & UML Modeling',
                'Normalization & Denormalization',
                'Data Warehouse Architecture',
                'OLAP Cube Design',
                'Performance Tuning'
            ],
            career: [
                'Data Modeler',
                'Database Architect',
                'Data Warehouse Engineer',
                'Business Intelligence Developer'
            ],
            fee: '₹30,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-data-warehouse': {
            title: 'Certified Professional in Data Warehouse',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 5',
            duration: '6 months',
            eligibility: 'Database knowledge required',
            description: 'Build and manage enterprise data warehouses for comprehensive business intelligence.',
            skills: [
                'ETL Processes',
                'Data Warehousing Concepts',
                'Dimensional Modeling',
                'Data Integration',
                'Performance Monitoring',
                'Security Implementation'
            ],
            curriculum: [
                'Data Warehouse Fundamentals',
                'ETL Design & Development',
                'Dimensional Modeling',
                'Data Integration Strategies',
                'Performance Optimization',
                'Security & Compliance'
            ],
            career: [
                'Data Warehouse Engineer',
                'ETL Developer',
                'Data Architect',
                'BI Solutions Architect'
            ],
            fee: '₹35,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-microsoft-power-bi': {
            title: 'Certified Professional in Microsoft Power BI',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 4',
            duration: '4 months',
            eligibility: 'Basic Excel knowledge',
            description: 'Create stunning dashboards and reports using Microsoft Power BI for data-driven insights.',
            skills: [
                'Power BI Desktop',
                'Data Modeling',
                'DAX Formulas',
                'Dashboard Design',
                'Power Query',
                'Data Visualization'
            ],
            curriculum: [
                'Power BI Introduction',
                'Data Connection & Modeling',
                'DAX Language Fundamentals',
                'Advanced Visualizations',
                'Dashboard Development',
                'Power BI Service'
            ],
            career: [
                'Power BI Developer',
                'Business Intelligence Analyst',
                'Data Visualization Specialist',
                'Reporting Analyst'
            ],
            fee: '₹22,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-sol': {
            title: 'Certified Professional in SQL',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 4',
            duration: '4 months',
            eligibility: 'Basic computer skills',
            description: 'Master SQL programming for database management and data querying.',
            skills: [
                'SQL Queries',
                'Database Design',
                'Stored Procedures',
                'Performance Tuning',
                'Data Manipulation',
                'Database Administration'
            ],
            curriculum: [
                'SQL Fundamentals',
                'Data Definition Language',
                'Data Manipulation Language',
                'Advanced Query Techniques',
                'Stored Procedures & Functions',
                'Database Performance'
            ],
            career: [
                'SQL Developer',
                'Database Administrator',
                'Data Analyst',
                'Backend Developer'
            ],
            fee: '₹20,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-statistics': {
            title: 'Certified Professional in Statistics',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 5',
            duration: '5 months',
            eligibility: 'Mathematics background preferred',
            description: 'Comprehensive statistical analysis training for data-driven decision making.',
            skills: [
                'Descriptive Statistics',
                'Inferential Statistics',
                'Hypothesis Testing',
                'Regression Analysis',
                'Time Series Analysis',
                'Statistical Software'
            ],
            curriculum: [
                'Statistical Concepts',
                'Probability Theory',
                'Sampling Methods',
                'Hypothesis Testing',
                'Regression Models',
                'Advanced Statistical Techniques'
            ],
            career: [
                'Statistician',
                'Data Scientist',
                'Quantitative Analyst',
                'Research Analyst'
            ],
            fee: '₹28,000',
            certification: 'IQGSTc & WSC Certified'
        },
        'certified-professional-in-tableau': {
            title: 'Certified Professional in Tableau',
            division: 'Business Analytics & Intelligence',
            level: 'WSQF Level 4',
            duration: '4 months',
            eligibility: 'Basic data knowledge',
            description: 'Create interactive dashboards and visualizations using Tableau for impactful data storytelling.',
            skills: [
                'Tableau Desktop',
                'Data Visualization',
                'Dashboard Design',
                'Calculated Fields',
                'Data Blending',
                'Storytelling with Data'
            ],
            curriculum: [
                'Tableau Fundamentals',
                'Data Connection Methods',
                'Visualization Best Practices',
                'Advanced Calculations',
                'Dashboard Development',
                'Data Storytelling'
            ],
            career: [
                'Tableau Developer',
                'Data Visualization Analyst',
                'Business Intelligence Analyst',
                'Data Storyteller'
            ],
            fee: '₹24,000',
            certification: 'IQGSTc & WSC Certified'
        }
    };

    const certificate = certificateData[certificateId];

    if (!certificate) {
        return (
            <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Certificate Not Found</h1>
                    <p className="text-gray-600 mb-8">The requested certificate information is not available.</p>
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

                {/* Certificate Header - Modern Layout */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-8">
                        <div className="lg:mr-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{certificate.title}</h1>
                            <p className="text-blue-600 font-semibold text-lg mb-4">{certificate.division}</p>
                            <p className="text-gray-700 text-lg leading-relaxed">{certificate.description}</p>
                        </div>
                        <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0">
                            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-full mb-4">
                                {certificate.level}
                            </span>
                            <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-lg">
                                {certificate.certification}
                            </span>
                        </div>
                    </div>

                    {/* Key Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-blue-600 font-medium">Duration</p>
                                    <p className="text-xl font-bold text-gray-900">{certificate.duration}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-green-600 font-medium">Eligibility</p>
                                    <p className="text-lg font-semibold text-gray-900">{certificate.eligibility}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                            <div className="flex items-center mb-3">
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-purple-600 font-medium">Course Fee</p>
                                    <p className="text-xl font-bold text-gray-900">{certificate.fee}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills & Curriculum - Modern Layout */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Skills You'll Learn */}
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Skills You'll Learn</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {certificate.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border-l-4 border-blue-500"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Curriculum */}
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Curriculum Overview</h2>
                        </div>
                        <div className="space-y-4">
                            {certificate.curriculum.map((module, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg border-l-4 border-green-500"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-gray-700 font-medium">{module}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Career Opportunities - Enhanced Layout */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Career Opportunities</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certificate.career.map((job, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100/50 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <span className="text-gray-700 font-semibold">{job}</span>
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
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of professionals who have transformed their careers with our certified programs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enroll Now
                        </motion.button>
                        <Link
                            to="/contact"
                            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            Get More Information
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CertificateDetails;