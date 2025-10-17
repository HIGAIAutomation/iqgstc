import React, { useState } from 'react';

const Verification = () => {
    const [certificateId, setCertificateId] = useState('');

    const handleVerify = (e) => {
        e.preventDefault();
        // Placeholder for verification logic
        alert(`Verifying certificate ID: ${certificateId}`);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Certificate Verification & Attestation</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Verification Portal */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Verify Certificate</h3>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <form onSubmit={handleVerify}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2">Certificate ID</label>
                                    <input
                                        type="text"
                                        value={certificateId}
                                        onChange={(e) => setCertificateId(e.target.value)}
                                        placeholder="Enter certificate ID"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Verify Certificate
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Attestation Guidelines */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Attestation Guidelines</h3>
                        <div className="space-y-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">For Employers</h4>
                                <ul className="list-disc list-inside text-gray-700 text-sm">
                                    <li>Verify candidate certifications through our portal</li>
                                    <li>Contact us for bulk verification requests</li>
                                    <li>Check authenticity of WSC certifications</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2">For Institutes</h4>
                                <ul className="list-disc list-inside text-gray-700 text-sm">
                                    <li>Partner with us for certification programs</li>
                                    <li>Get accreditation for your training courses</li>
                                    <li>Access our educator certification programs</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2">General Instructions</h4>
                                <ul className="list-disc list-inside text-gray-700 text-sm">
                                    <li>All certificates are digitally verifiable</li>
                                    <li>Contact support for any verification issues</li>
                                    <li>Report suspicious certificates immediately</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Verification;