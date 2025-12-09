import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from './assets/iqgstc-logo.png';

const DropdownMenu = ({ items, isOpen, onClose }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
            >
                {items.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        onClick={onClose}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        {item.label}
                    </motion.a>
                ))}
            </motion.div>
        )}
    </AnimatePresence>
);

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const closeDropdown = () => {
        setDropdownOpen(null);
    };

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/courses', label: 'Courses' },
        { path: '/wsc', label: 'WSC' },
        
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <motion.header
            className={`w-full py-3 md:py-4 transition-all duration-500  ${
                isSticky
                    ? 'fixed top-0 z-50 glass-effect-luxury shadow-luxury'
                    : 'relative bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img
                            src={logo}
                            alt="IQGSTc Logo"
                            className="h-14 sm:h-16 md:h-20 w-14 sm:w-16 md:w-20 object-contain rounded-4xl"
                        />
                        <Link to="/" className="hidden sm:block text-lg sm:text-xl md:text-3xl font-display font-bold text-black hover:text-blue-600 transition-colors duration-300 truncate md:whitespace-normal">
                            IQ Global Skill Training Center
                        </Link>
                        <Link to="/" className="sm:hidden text-sm font-display font-bold text-black hover:text-blue-600 transition-colors duration-300">
                            IQGSTC
                        </Link>
                    </motion.div>

                <nav className="hidden lg:flex space-x-4 xl:space-x-8">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.path}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {item.dropdown ? (
                                <>
                                    <button
                                        onClick={() => toggleDropdown(index)}
                                        className={`relative font-body font-medium text-sm xl:text-lg transition-all duration-300 hover:text-gray-500 group flex items-center whitespace-nowrap ${
                                            location.pathname === item.path ? 'text-black' : 'text-gray-600'
                                        }`}
                                    >
                                        {item.label}
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-400 transition-all duration-300 group-hover:w-full ${
                                            location.pathname === item.path ? 'w-full' : ''
                                        }`}></span>
                                    </button>
                                    <DropdownMenu items={item.dropdown} isOpen={dropdownOpen === index} onClose={closeDropdown} />
                                </>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`relative font-body font-medium text-sm xl:text-lg transition-all duration-300 hover:text-gray-500 group whitespace-nowrap ${
                                        location.pathname === item.path ? 'text-black' : 'text-gray-600'
                                    }`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-400 transition-all duration-300 group-hover:w-full ${
                                        location.pathname === item.path ? 'w-full' : ''
                                    }`}></span>
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </nav>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <motion.a
                        href="https://wa.me/919003889990"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="w-4 sm:w-5 h-4 sm:h-5" />
                    </motion.a>

                    <motion.a
                        href="https://www.youtube.com/@IQGlobalSkillsTrainingCentre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FontAwesomeIcon icon={faYoutube} className="w-4 sm:w-5 h-4 sm:h-5" />
                    </motion.a>

                    <motion.a
                        href="https://instagram.com/iqgstc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FontAwesomeIcon icon={faInstagram} className="w-4 sm:w-5 h-4 sm:h-5" />
                    </motion.a>

                    <motion.a
                        href="https://x.com/iqgstc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-black hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </motion.a>

                    <motion.button
                        className="lg:hidden p-2 rounded-lg glass-effect hover:bg-white/10 transition-all duration-300"
                        onClick={toggleMobileMenu}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.svg
                            className="w-6 h-6 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                                animate={isMobileMenuOpen ? { d: "M6 18L18 6M6 6l12 12" } : { d: "M4 6h16M4 12h16M4 18h16" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.svg>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700 shadow-2xl max-h-96 overflow-y-auto"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-full px-3 sm:px-4 py-4 sm:py-6">
                            <nav className="flex flex-col space-y-2 sm:space-y-3">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        {item.dropdown ? (
                                            <>
                                                <div className="py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-body font-medium text-sm sm:text-lg text-gray-300">
                                                    {item.label}
                                                </div>
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    <motion.a
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        target={subItem.href.startsWith('http') ? '_blank' : '_self'}
                                                        rel={subItem.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                                        onClick={closeMobileMenu}
                                                        className="block py-2 px-4 sm:px-6 rounded-lg font-body font-medium text-xs sm:text-base text-gray-400 hover:bg-slate-700 hover:text-white transition-all duration-300"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: (index * 0.1) + (subIndex * 0.05) }}
                                                    >
                                                        {subItem.label}
                                                    </motion.a>
                                                ))}
                                            </>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                onClick={closeMobileMenu}
                                                className={`block py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-body font-medium text-sm sm:text-lg transition-all duration-300 ${
                                                    location.pathname === item.path
                                                        ? 'bg-blue-600 text-white shadow-lg'
                                                        : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    className="pt-3 sm:pt-4 border-t border-slate-700"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.5 }}
                                >
                                    <div className="flex justify-center gap-2 sm:gap-4">
                                        <a
                                            href="https://wa.me/919003889990"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg"
                                            onClick={closeMobileMenu}
                                        >
                                            <FontAwesomeIcon icon={faWhatsapp} className="w-5 sm:w-6 h-5 sm:h-6" />
                                        </a>

                                        <a
                                            href="https://www.youtube.com/@IQGlobalSkillsTrainingCentre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg"
                                            onClick={closeMobileMenu}
                                        >
                                            <FontAwesomeIcon icon={faYoutube} className="w-5 sm:w-6 h-5 sm:h-6" />
                                        </a>

                                        <a
                                            href="https://instagram.com/iqgstc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg"
                                            onClick={closeMobileMenu}
                                        >
                                            <FontAwesomeIcon icon={faInstagram} className="w-5 sm:w-6 h-5 sm:h-6" />
                                        </a>

                                        <a
                                            href="https://x.com/iqgstc"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-black hover:bg-gray-800 text-white rounded-full font-medium transition-all duration-300 shadow-lg"
                                            onClick={closeMobileMenu}
                                        >
                                            <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </motion.div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;