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

                {/* Certificate Header */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{certificate.title}</h1>
                            <p className="text-blue-600 font-medium">{certificate.division}</p>
                        </div>
                        <div className="text-right">
                            <span className="px-4 py-2 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                                {certificate.level}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{certificate.description}</p>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-600">Duration</p>
                            <p className="font-semibold text-gray-900">{certificate.duration}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-600">Eligibility</p>
                            <p className="font-semibold text-gray-900 text-sm">{certificate.eligibility}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-600">Fee</p>
                            <p className="font-semibold text-gray-900">{certificate.fee}</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-600">Certification</p>
                            <p className="font-semibold text-gray-900 text-sm">{certificate.certification}</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Skills You'll Learn */}
                    <motion.div
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills You'll Learn</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {certificate.skills.map((skill, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">{skill}</span>
                                </div>
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Overview</h2>
                        <div className="space-y-3">
                            {certificate.curriculum.map((module, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-700">{module}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Career Opportunities */}
                <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional mt-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certificate.career.map((job, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8" />
                                </svg>
                                <span className="text-gray-700 font-medium">{job}</span>
                            </div>
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