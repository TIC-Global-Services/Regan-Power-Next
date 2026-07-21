'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MicrogridSpec {
    field: string;
    detail: string;
}

interface MicrogridApplication {
    title: string;
    description: string;
    icon?: string;
}

interface MicrogridSpecTableProps {
    specs: MicrogridSpec[];
    applications: MicrogridApplication[];
}

const MicrogridSpecTable: React.FC<MicrogridSpecTableProps> = ({
    specs,
    applications,
}) => {
    const [activeTab, setActiveTab] = useState<'spec' | 'applications'>('spec');

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="px-[5%] mx-auto max-w-3xl">
                <div className="flex justify-center mb-10 md:mb-12">
                    <div className="inline-flex bg-[#E5EFD5] rounded-full p-1.5 border border-[#A0CF44]">
                        <button
                            onClick={() => setActiveTab('spec')}
                            className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium tracking-tight transition-all ${
                                activeTab === 'spec'
                                    ? 'bg-[#A0CF44] text-black'
                                    : 'text-black/70 hover:text-black'
                            }`}
                        >
                            Microgrid Spec Table
                        </button>
                        <button
                            onClick={() => setActiveTab('applications')}
                            className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium tracking-tight transition-all ${
                                activeTab === 'applications'
                                    ? 'bg-[#A0CF44] text-black'
                                    : 'text-black/70 hover:text-black'
                            }`}
                        >
                            Industries & Applications Card Row
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {activeTab === 'spec' ? (
                        <motion.div
                            key="spec"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-[20px] overflow-hidden border border-[#A0CF44]/30"
                        >
                            <div className="grid grid-cols-2 bg-[#A0CF44]">
                                <div className="p-4 md:p-5 text-black font-medium text-base md:text-lg tracking-tight">
                                    Field
                                </div>
                                <div className="p-4 md:p-5 text-black font-medium text-base md:text-lg tracking-tight text-center">
                                    Detail
                                </div>
                            </div>
                            {specs.map((spec, idx) => (
                                <div
                                    key={idx}
                                    className={`grid grid-cols-2 ${
                                        idx % 2 === 0 ? 'bg-[#E5EFD5]' : 'bg-[#E5EFD5]/40'
                                    }`}
                                >
                                    <div className="p-4 md:p-5 text-black text-sm md:text-base font-medium tracking-tight border-r border-[#A0CF44]/20">
                                        {spec.field}
                                    </div>
                                    <div className="p-4 md:p-5 text-black/85 text-sm md:text-[15px] tracking-tight leading-snug">
                                        {spec.detail}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="applications"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {applications.map((app, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#E5EFD5] rounded-[20px] p-6"
                                >
                                    <h3 className="text-lg md:text-xl text-black font-bold tracking-tight mb-2">
                                        {app.title}
                                    </h3>
                                    <p className="text-sm md:text-[15px] text-black/80 tracking-tight leading-snug">
                                        {app.description}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default MicrogridSpecTable;
