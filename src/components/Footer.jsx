import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">IQGSTc</h3>
                        <p className="text-gray-300 mb-4">
                            Empowering Global Skills & Certifications through World Skill Council partnership.
                        </p>
                        <div className="flex space-x-6">
                            <a href="https://instagram.com/iqgstc" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition duration-300 transform hover:scale-110">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="m12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/>
                                    <circle cx="18.5" cy="5.5" r="1.5"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/company/iqgstc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition duration-300 transform hover:scale-110">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition duration-300 transform hover:scale-110">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
                            <li><Link to="/courses" className="text-gray-300 hover:text-white transition duration-300">Courses</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link></li>
                            <li><Link to="/wsc" className="text-gray-300 hover:text-white transition duration-300">WSC</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Study Materials</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Practice Tests</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Video Tutorials</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Success Stories</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3 text-gray-300">
                            <div>
                                <p className="font-medium text-white">Saravanan</p>
                                <p className="text-sm">Director</p>
                            </div>
                            <div className="space-y-2">
                                <p><a href="mailto:iqgstc@gmail.com" className="hover:text-blue-400 transition-colors duration-300">iqgstc@gmail.com</a></p>
                                <p><a href="tel:+919994140516" className="hover:text-blue-400 transition-colors duration-300">+91 99941 40516</a></p>
                                <p>H17, Moon Mahal, opposite Pothigai Nagar,<br />near Jeba Garden, Pothigai Nagar,<br />Tirunelveli, Tamil Nadu 627007</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a
                                href="https://wa.me/919994140516"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                            >
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        &copy; 2024 IQGSTc. All rights reserved. | Powered by World Skill Council
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;