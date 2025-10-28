import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">About IQGSTc</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h3>
                            <p className="text-lg text-gray-700">
                                Empowering skill aspirants to achieve global certifications and career success.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Main Objectives for WSC Career Development Certificate</h3>
                            <ul className="list-disc list-inside text-lg text-gray-700">
                                <li>It aims to align the competencies of the unregulated workforce of the world to the standardized World Skills Qualification Framework (WSQF).</li>
                                <li>To enhance the employability opportunities of an individual as well as provide alternative routes to qualify at par with higher education.</li>
                                <li>To provide opportunities for reducing inequalities based on privileging certain forms of knowledge over others.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
                        <p className="text-gray-700 mb-4">
                            IQGSTc is a premier educational institution dedicated to providing world-class skill training and certification programs. We are proud to be partnered with the World Skill Council (WSC), enabling us to offer internationally recognized certifications that open doors to global career opportunities.
                        </p>
                        <p className="text-gray-700">
                            Our commitment to excellence in education, combined with our partnership with WSC, ensures that our students receive the highest quality training and certification that employers worldwide recognize and value.
                        </p>
                        <div className="mt-4">
                            <a href="https://www.youtube.com/@IQGlobalSkillsTrainingCentre" target="_blank" rel="noopener noreferrer" className="inline-block">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="red" className="hover:opacity-75">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;