import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDivision, setSelectedDivision] = useState('All');

    const categories = [
        'Business Skill Courses',
        'Design Skill Courses',
        'Development Skill Courses',
        'Finance & Accounting Skill Courses',
        'Health & Fitness Skill Courses',
        'IT & Software Skill Courses',
        'Life Style Skill Courses',
        'Marketing Skill Courses',
        'Music Skill Courses',
        'Office Productivity Skill Courses',
        'Personal Development Skill Courses',
        'Photography & Video Skill Courses',
        'Teaching and Academics Skill Courses'
    ];

    const divisions = {
        'Business Skill Courses': [
            'Business Analytics & Intelligence Division',
            'Business Law Division',
            'Business Strategy Division',
            'Communication Division',
            'E-Commerce Division',
            'Entrepreneurship Division',
            'Human Resources Division',
            'Industry Division',
            'Management Division',
            'Media Division',
            'Operations Division',
            'Other Business Division',
            'Project Management Division',
            'Real Estate Division',
            'Sales Division'
        ]
    };

    const sampleCertifications = [
        { name: 'Digital Marketing Specialist', category: 'Marketing Skill Courses', duration: '3 months', eligibility: 'Beginners', level: 'WSQF Level 3' },
        { name: 'Web Development Fundamentals', category: 'Development Skill Courses', duration: '6 months', eligibility: 'Intermediate', level: 'WSQF Level 4' },
        { name: 'Financial Planning', category: 'Finance & Accounting Skill Courses', duration: '4 months', eligibility: 'Beginners', level: 'WSQF Level 3' },
        { name: 'Graphic Design', category: 'Design Skill Courses', duration: '5 months', eligibility: 'Beginners', level: 'WSQF Level 3' },
        { name: 'Data Analysis', category: 'IT & Software Skill Courses', duration: '4 months', eligibility: 'Intermediate', level: 'WSQF Level 4' },
    ];

    const filteredCertifications = sampleCertifications.filter(cert =>
        (selectedCategory === 'All' || cert.category === selectedCategory) &&
        cert.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Professional Courses
                </motion.h2>

                <motion.p
                    className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Discover world-class skill training programs designed to elevate your career prospects
                </motion.p>

                {/* Search and Filter */}
                <motion.div
                    className="mb-12 flex flex-col md:flex-row gap-6 justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full md:w-80 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                        />
                        <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <select
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setSelectedDivision('All');
                        }}
                        className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                    >
                        <option value="All">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    {selectedCategory === 'Business Skill Courses' && (
                        <select
                            value={selectedDivision}
                            onChange={(e) => setSelectedDivision(e.target.value)}
                            className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                        >
                            <option value="All">All Divisions</option>
                            {divisions[selectedCategory].map(division => (
                                <option key={division} value={division}>{division.replace(' Division', '')}</option>
                            ))}
                        </select>
                    )}
                </motion.div>

                {/* Course Categories */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            onClick={() => category === 'Business Skill Courses' ? window.location.href = '/business-divisions' : setSelectedCategory(category)}
                            as={category === 'Business Skill Courses' ? Link : 'div'}
                            to={category === 'Business Skill Courses' ? '/business-divisions' : undefined}
                            className="glass-effect p-6 rounded-2xl cursor-pointer hover:bg-white/20 transition-all duration-300 card-3d shadow-professional hover:shadow-professional-lg group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-blue-600">{Math.floor(Math.random() * 50) + 10}</div>
                                    <div className="text-xs text-gray-500">Courses</div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{category}</h3>
                            <p className="text-gray-600 text-sm">Explore various subcategories and certifications</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {filteredCertifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-professional hover:shadow-professional-lg transition-all duration-300 card-3d group"
                            whileHover={{ scale: 1.03, y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">{cert.level}</span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{cert.name}</h3>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                    <span className="text-sm">{cert.category}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm">{cert.duration}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-sm">{cert.eligibility}</span>
                                </div>
                            </div>

                            <motion.button
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-blue-700 group-hover:to-blue-800"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Enroll Now
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Courses;