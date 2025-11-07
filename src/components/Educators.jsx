import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Educators = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send(
                'service_l5lz7lm',
                'template_ultbkye',
                {
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    qualification: formData.qualification,
                    experience: formData.experience,
                    message: formData.message,
                },
                'XjZ0cPS7pyiw7nEmZ'
            );
            alert('Thank you for your message! We will contact you soon.');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                qualification: '',
                experience: '',
                message: ''
            });
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    const educators = [
        { name: 'Dr. Rajesh Kumar', title: 'Director - IQGSTC', institute: 'IQ Global Skill Training Centre' },
        { name: 'Prof. Anita Singh', title: 'Head of Curriculum Development', institute: 'IQGSTC' },
        { name: 'Mr. Vikram Patel', title: 'Lead Instructor - Technical Skills', institute: 'IQGSTC' },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Certified Educators & Skill Masters</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* About IQGSTC */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">About IQGSTC</h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h4 className="font-semibold text-gray-800">IQ Global Skill Training Centre (IQGSTC)</h4>
                                <p className="text-gray-700">IQGSTC is a premier educational institution dedicated to providing high-quality skill development training. Our programs are designed to equip learners with practical skills and industry-relevant knowledge to excel in today's competitive job market.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h4 className="font-semibold text-gray-800">Our Mission</h4>
                                <p className="text-gray-700">To bridge the gap between education and employment by offering comprehensive training programs that focus on real-world applications and career advancement.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow">
                                <h4 className="font-semibold text-gray-800">Why Choose IQGSTC?</h4>
                                <p className="text-gray-700">We offer flexible learning options, expert instructors, and certifications that are recognized globally. Our curriculum is regularly updated to meet industry standards and technological advancements.</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Accreditation & Recognition</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>WSC Certified Training Programs</li>
                                <li>Industry-recognized certifications</li>
                                <li>Global skill standards compliance</li>
                                <li>Continuous professional development</li>
                                <li>Partnerships with leading organizations</li>
                                <li>State-of-the-art learning facilities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Application Form */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Become a Certified Educator</h3>
                        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Qualification</label>
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Years of Experience</label>
                                <input
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Educators;