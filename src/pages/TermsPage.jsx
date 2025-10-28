import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Please read these terms and conditions carefully before using our services.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                By accessing and using the services provided by IQ Global Skills Training Centre (IQGSTc),
                                you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Course Enrollment and Payment</h2>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>2.1 Enrollment:</strong> All course enrollments are subject to availability and approval by IQGSTc.
                                    We reserve the right to refuse enrollment without providing reasons.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>2.2 Payment:</strong> Course fees must be paid in full before the commencement of classes
                                    unless otherwise agreed. Payment methods accepted include online transfers, UPI, and card payments.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>2.3 Refund Policy:</strong> Refunds will be processed according to our refund policy.
                                    Generally, refunds are not available once course materials have been accessed.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Certification and Assessment</h2>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>3.1 Certification:</strong> Certificates are issued upon successful completion of courses
                                    and assessments. IQGSTc and World Skill Council (WSC) reserve the right to withhold certificates
                                    if assessment criteria are not met.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>3.2 Assessment:</strong> All assessments must be completed within the stipulated timeframes.
                                    Late submissions may result in penalties or disqualification.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                All course materials, content, logos, and trademarks are the intellectual property of IQGSTc
                                and World Skill Council. Users are granted a limited, non-transferable license to access
                                and use these materials solely for personal learning purposes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. User Conduct</h2>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>5.1 Academic Integrity:</strong> Users must maintain academic integrity and avoid
                                    plagiarism, cheating, or any form of academic dishonesty.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>5.2 Respectful Behavior:</strong> All users must conduct themselves in a respectful
                                    and professional manner towards instructors, staff, and fellow students.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>5.3 Platform Usage:</strong> Users must not attempt to hack, disrupt, or misuse
                                    our learning platforms or systems.
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Privacy and Data Protection</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We are committed to protecting your privacy. Personal information collected during enrollment
                                and course participation will be used solely for educational purposes and in accordance
                                with our Privacy Policy.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                IQGSTc shall not be liable for any indirect, incidental, special, or consequential damages
                                arising from the use of our services. Our total liability shall not exceed the amount
                                paid for the services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We reserve the right to terminate or suspend access to our services immediately,
                                without prior notice, for conduct that we believe violates these terms or is harmful
                                to other users, us, or third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                These terms and conditions are governed by and construed in accordance with the laws
                                of India. Any disputes arising from these terms shall be subject to the exclusive
                                jurisdiction of the courts in Tirunelveli, Tamil Nadu.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to Terms</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                We reserve the right to modify these terms and conditions at any time. Users will be
                                notified of significant changes, and continued use of our services constitutes acceptance
                                of the modified terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-2">
                                    <strong>IQ Global Skills Training Centre</strong>
                                </p>
                                <p className="text-gray-700 mb-2">
                                    H17, Moon Mahal, opposite Pothigai Nagar,<br />
                                    near Jeba Garden, Pothigai Nagar,<br />
                                    Tirunelveli, Tamil Nadu 627007
                                </p>
                                <p className="text-gray-700 mb-2">
                                    Email: iqgstc@gmail.com
                                </p>
                                <p className="text-gray-700 mb-2">
                                    Phone: +91 90038 89990
                                </p>
                            </div>
                        </section>

                        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-600 text-center">
                                Last updated: October 2024<br />
                                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsPage;