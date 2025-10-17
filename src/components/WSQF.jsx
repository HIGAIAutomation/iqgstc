import React from 'react';

const WSQF = () => {
    const wsqfLevels = [
        { level: 1, description: 'Basic Skills', academic: 'Certificate' },
        { level: 2, description: 'Elementary Skills', academic: 'Certificate' },
        { level: 3, description: 'Intermediate Skills', academic: 'Diploma' },
        { level: 4, description: 'Advanced Skills', academic: 'Diploma' },
        { level: 5, description: 'Specialist Skills', academic: 'Degree' },
        { level: 6, description: 'Expert Skills', academic: 'Degree' },
        { level: 7, description: 'Master Skills', academic: 'Honours' },
        { level: 8, description: 'Leadership Skills', academic: 'Masters/Doctorate' },
    ];

    const benefits = [
        'Internationally recognized certifications',
        'Enhanced career opportunities',
        'Skill validation by global standards',
        'Competitive advantage in job market',
        'Continuous professional development',
        'Industry-relevant competencies'
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">World Skill Qualification Framework (WSQF)</h2>

                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">WSQF Levels vs Academic Qualifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {wsqfLevels.map((level) => (
                            <div key={level.level} className="bg-blue-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-2">Level {level.level}</div>
                                <div className="text-sm text-gray-600 mb-1">{level.description}</div>
                                <div className="text-sm font-semibold text-gray-800">{level.academic}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Benefits of WSQF-Aligned Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WSQF;