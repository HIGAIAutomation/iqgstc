import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDivision, setSelectedDivision] = useState('All');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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
        ],
        'Design Skill Courses': [
            '3D & Animation Division',
            'Architectural Design Division',
            'Design Tools Division',
            'Fashion Design Division',
            'Game Design Division',
            'Graphic Design & Illustration Division',
            'Interior Design Division',
            'Other Design Division',
            'User Experience Design Division',
            'Web Design Division'
        ]
    };

    // Sample data for suggestions
    const allSuggestions = [
        ...categories,
        ...Object.values(divisions).flat().map(div => div.replace(' Division', '')),
        // Design Skill Courses certifications
        'Certified Professional in 3D Animation',
        'Certified Professional in 3D Modeling',
        'Certified Professional in After Effects',
        'Certified Professional in Animation',
        'Certified Professional in Blender',
        'Certified Professional in Fusion 360',
        'Certified Professional in Maya',
        'Certified Professional in Motion Graphics',
        'Certified Professional in zBrush',
        'Certified Professional in ARCHICAD',
        'Certified Professional in AutoCAD',
        'Certified Professional in CAD Software',
        'Certified Professional in Landscape Architecture',
        'Certified Professional in LEED',
        'Certified Professional in Revit',
        'Certified Professional in SketchUp',
        'Certified Professional in Adobe Illustrator',
        'Certified Professional in Adobe Premiere',
        'Certified Professional in Al Text-to-Image Art Generation',
        'Certified Professional in Figma',
        'Certified Professional in Photoshop',
        'Certified Professional in Procreate Digital Illustration App',
        'Certified Professional in SOLIDWORKS',
        'Certified Professional in Fashion',
        'Certified Professional in Jewelry Design',
        'Certified Professional in Jewelry Making',
        'Certified Professional in Marvelous Designer',
        'Certified Professional in Pattern Making (fashion)',
        'Certified Professional in Sewing',
        'Certified Professional in Textiles',
        'Certified Professional in Digital Painting',
        'Certified Professional in Game Development Fundamentals',
        'Certified Professional in Godot',
        'Certified Professional in Pixel Art',
        'Certified Professional in Unity',
        'Certified Professional in Unreal Engine',
        'Certified Professional in VFX Visual Effects',
        'Certified Professional in Canva',
        'Certified Professional in Design Theory',
        'Certified Professional in Drawing',
        'Certified Professional in Graphic Design',
        'Certified Professional in InDesign',
        'Certified Professional in Color Theory',
        'Certified Professional in Electrical Engineering',
        'Certified Professional in Home Staging',
        'Certified Professional in HVAC',
        'Certified Professional in Lighting Design',
        'Certified Professional in Minimalist Lifestyle',
        'Certified Professional in Character Design',
        'Certified Professional in Comic Book Creation',
        'Certified Professional in Design Interview',
        'Certified Professional in Digital Painting System',
        'Certified Professional in Electronics',
        'Certified Professional in PCB Design',
        'Certified Professional in Perspective Drawing',
        'Certified Professional in Adobe XD UX Writing (User Experience Writing)',
        'Certified Professional in Design Thinking',
        'Certified Professional in Gamification',
        'Certified Professional in Product Design',
        'Certified Professional in User Interface Design',
        'Certified Professional in Web Design',
        'Certified Professional in CSS',
        'Certified Professional in Elementor',
        'Certified Professional in HTML',
        'Certified Professional in Mobile App Design',
        'Certified Professional in WordPress'
    ];

    const sampleCertifications = [
        // Removed all sample certifications as requested
    ];

    const filteredCertifications = sampleCertifications.filter(cert =>
        (selectedCategory === 'All' || cert.category === selectedCategory) &&
        cert.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle search input changes
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const filtered = allSuggestions.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            ).slice(0, 8); // Limit to 8 suggestions
            setFilteredSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);

        // If the suggestion is a course category, also set it as selected category
        if (categories.includes(suggestion)) {
            setSelectedCategory(suggestion);
        }
    };

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
                            placeholder="Search courses, certifications, divisions..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onFocus={() => searchTerm && setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            className="w-full md:w-80 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                        />
                        <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                        {/* Suggestions Dropdown */}
                        {showSuggestions && filteredSuggestions.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto"
                            >
                                {filteredSuggestions.map((suggestion, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <span className="text-gray-700 font-medium">{suggestion}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
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
                    {selectedCategory === 'Design Skill Courses' && (
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
                    {categories
                        .filter(category =>
                            selectedCategory === 'All' ||
                            category === selectedCategory ||
                            (searchTerm && category.toLowerCase().includes(searchTerm.toLowerCase()))
                        )
                        .map((category, index) => (
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

                {/* Course Details Section */}
                {selectedCategory !== 'All' && (
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-professional">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedCategory}</h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Course Overview</h4>
                                    <p className="text-gray-600 mb-4">
                                        {selectedCategory === 'IT & Software Skill Courses' &&
                                            'Master cutting-edge IT skills and software development techniques. Learn programming languages, cloud computing, cybersecurity, and modern software development practices.'}
                                        {selectedCategory === 'Business Skill Courses' &&
                                            'Develop essential business acumen and entrepreneurial skills. Learn management, marketing, finance, and strategic planning for business success.'}
                                        {selectedCategory === 'Design Skill Courses' &&
                                            'Unleash your creativity with professional design skills. Master graphic design, UI/UX design, and digital art techniques.'}
                                        {selectedCategory === 'Finance & Accounting Skill Courses' &&
                                            'Build expertise in financial management and accounting principles. Learn budgeting, financial analysis, and investment strategies.'}
                                        {selectedCategory === 'Health & Fitness Skill Courses' &&
                                            'Promote wellness and fitness expertise. Learn nutrition, exercise science, and health coaching techniques.'}
                                        {selectedCategory === 'Marketing Skill Courses' &&
                                            'Master digital marketing and brand management. Learn SEO, social media marketing, and advertising strategies.'}
                                        {selectedCategory === 'Personal Development Skill Courses' &&
                                            'Enhance personal growth and leadership skills. Develop communication, time management, and goal-setting abilities.'}
                                        {selectedCategory === 'Teaching and Academics Skill Courses' &&
                                            'Excel in educational roles with advanced teaching methodologies and academic skills.'}
                                        {selectedCategory === 'Photography & Video Skill Courses' &&
                                            'Capture and edit professional-quality photos and videos. Learn lighting, composition, and post-production techniques.'}
                                        {selectedCategory === 'Music Skill Courses' &&
                                            'Develop musical talents and production skills. Learn instruments, music theory, and audio production.'}
                                        {selectedCategory === 'Office Productivity Skill Courses' &&
                                            'Master essential office software and productivity tools for efficient workplace performance.'}
                                        {selectedCategory === 'Life Style Skill Courses' &&
                                            'Enhance quality of life with lifestyle management and wellness skills.'}
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span><strong>Duration:</strong> 3-12 months</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span><strong>Certification:</strong> WSC Accredited</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                            <span><strong>Mode:</strong> Online/Offline</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Skills You'll Learn</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {selectedCategory === 'IT & Software Skill Courses' && (
                                            <>
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Programming</span>
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Web Development</span>
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Database Management</span>
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cloud Computing</span>
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cybersecurity</span>
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Data Analysis</span>
                                            </>
                                        )}
                                        {selectedCategory === 'Business Skill Courses' && (
                                            <>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Management</span>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Entrepreneurship</span>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Marketing</span>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Finance</span>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Strategy</span>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Operations</span>
                                            </>
                                        )}
                                        {selectedCategory === 'Design Skill Courses' && (
                                            <>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">3D Animation</span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Graphic Design</span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Web Design</span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Fashion Design</span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Game Design</span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Interior Design</span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Architectural Design</span>
                                            </>
                                        )}
                                        {/* Add similar skill tags for other categories */}
                                        {selectedCategory !== 'IT & Software Skill Courses' && selectedCategory !== 'Business Skill Courses' && selectedCategory !== 'Design Skill Courses' && (
                                            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Specialized Skills</span>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <motion.button
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Enroll in {selectedCategory.replace(' Skill Courses', '')}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

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