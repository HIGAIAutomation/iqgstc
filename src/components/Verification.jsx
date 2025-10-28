import React from 'react';

const Verification = () => {

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Certificate & Attestation</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Verification Portal */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Verify Certificate</h3>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="bg-purple-50 p-4 rounded-lg mb-4">
                                <h4 className="font-semibold text-purple-800 mb-2">Main Objectives for WSC Career Development Certificate</h4>
                                <ul className="list-disc list-inside text-gray-700 text-sm">
                                    <li>It aims to align the competencies of the unregulated workforce of the world to the standardized World Skills Qualification Framework (WSQF).</li>
                                    <li>To enhance the employability opportunities of an individual as well as provide alternative routes to qualify at par with higher education.</li>
                                    <li>To provide opportunities for reducing inequalities based on privileging certain forms of knowledge over others.</li>
                                </ul>
                            </div>
                            <button
                                onClick={() => window.open('https://www.worldskillcouncil.org/certificate-verification.asp', '_blank')}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Certificate Verification
                            </button>
                        </div>
                    </div>

                    {/* Attestation Services */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Attestation Services</h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 mb-4">
                                WSC career development certificate is attested by many countries across the world. Attestation services is provided by the partners of WSC
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-800 mb-2">Five steps of attestation</h4>
                                <ul className="list-disc list-inside text-gray-700 text-sm">
                                    <li>Attestation from Notary Commissioner</li>
                                    <li>Attestation from New Delhi District Sub Magistrate</li>
                                    <li>Attestation from Ministry of External Affairs, Govt of India</li>
                                    <li>Attestation from Embassy of Concerned Country</li>
                                    <li>Attestation from Concerned Country External Ministry.</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => window.open('https://attest.worldskillcouncil.org/attestation-verification.asp', '_blank')}
                                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                                >
                                    Attestation Verification
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Verification;