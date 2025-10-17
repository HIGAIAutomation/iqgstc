import React from 'react';

const Awards = () => {
    const awards = [
        {
            title: "Best Skill Training Institute 2023",
            issuer: "World Skill Council",
            description: "Recognized for excellence in skill training and certification programs.",
            image: "/placeholder-award.jpg"
        },
        {
            title: "Excellence in Education",
            issuer: "Central Bharat Sevak Samaj",
            description: "Awarded for outstanding contribution to skill development in India.",
            image: "/placeholder-award.jpg"
        },
        {
            title: "Global Partnership Award",
            issuer: "International Skill Alliance",
            description: "Honored for successful international collaborations and partnerships.",
            image: "/placeholder-award.jpg"
        },
        {
            title: "Innovation in Certification",
            issuer: "Skill Development Council",
            description: "Recognized for innovative approaches to skill certification and assessment.",
            image: "/placeholder-award.jpg"
        }
    ];

    const mediaFeatures = [
        "Featured in Times of India - Education Excellence",
        "Interview with Hindustan Times - Skill Revolution",
        "Coverage by Economic Times - Future of Education",
        "Spotlight in Business Standard - Global Certifications"
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Awards & Recognition</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Awards */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Achievements</h3>
                        <div className="space-y-6">
                            {awards.map((award, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-1">{award.title}</h4>
                                        <p className="text-blue-600 text-sm mb-2">{award.issuer}</p>
                                        <p className="text-gray-600 text-sm">{award.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Media Features */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Media Features</h3>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-semibold text-gray-800 mb-4">Featured In</h4>
                            <div className="space-y-3">
                                {mediaFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-3">Accreditation Status</h4>
                            <ul className="text-gray-700 space-y-2 text-sm">
                                <li>• WSC Certified Training Provider</li>
                                <li>• BSS Approved Skill Development Center</li>
                                <li>• ISO 9001:2015 Certified</li>
                                <li>• Member of International Skill Alliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;