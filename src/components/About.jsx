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
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h3>
                            <p className="text-lg text-gray-700">
                                To be a leading institute for world-class skill training and certification.
                            </p>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;