"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CtaButton from '@/reuseables/CtaButton';
import SectionHeader from '@/reuseables/SectionHeader';

import quoteImg from '@/assets/solar/batteryquote.png';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    billTier: '< $200',
    enquiryType: 'Solar + Battery',
    contactTime: 'Morning',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Heading and 3D Graphic */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <SectionHeader
              subtitle="Get Your Free Solar &"
              title="Battery Quote"
              description="Our Technical Sales Team Will Design A System Tailored To Your Home, Usage, And Budget. Most Quotes Delivered Within 24 Hours."
              align="left"
              descClass="mb-8"
            />

            {/* 3D Isometric building logo visual */}
            <div className="relative w-full aspect-square max-w-[360px] mx-auto lg:mx-0 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={quoteImg}
                alt="Intake Graphic"
                fill
                className="object-contain p-2"
                placeholder="blur"
              />
            </div>
          </div>

          {/* Right Column: Quote Intake Card Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#EEF6EB] rounded-[32px] p-6 md:p-10 shadow-sm border border-[#63B846]/10">
              {submitted ? (
                <div className="text-center py-16 flex flex-col items-center justify-center">
                  <span className="text-5xl mb-4">🎉</span>
                  <h3 className="text-2xl font-bold text-[#63B846] mb-2 font-[var(--font-aeonik)]">Thank You!</h3>
                  <p className="text-gray-700 font-light max-w-sm">
                    Your quote request has been received. One of our Perth-based solar designers will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-lg mb-4 font-[var(--font-aeonik)]">Contact Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-transparent border-b border-gray-300 py-2.5 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#63B846] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="tel"
                          required
                          placeholder="Your Contact Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-transparent border-b border-gray-300 py-2.5 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#63B846] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-gray-300 py-2.5 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#63B846] transition-colors"
                        />
                      </div>
                      <div className="flex flex-col">
                        <input
                          type="text"
                          required
                          placeholder="Enter Your Full Address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-transparent border-b border-gray-300 py-2.5 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#63B846] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Electricity Bill Tier */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wider mb-3 font-[var(--font-aeonik)]">Current Electricity Bill</h3>
                    <div className="flex flex-wrap gap-4">
                      {['< $200', '$200 – $400', '$400 – $600', '$600+'].map((tier) => (
                        <label key={tier} className="flex items-center gap-2 cursor-pointer text-xs md:text-sm font-medium text-black">
                          <input
                            type="radio"
                            name="billTier"
                            checked={formData.billTier === tier}
                            onChange={() => setFormData({ ...formData, billTier: tier })}
                            className="w-4 h-4 accent-[#63B846]"
                          />
                          {tier}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Type of Enquiry */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wider mb-3 font-[var(--font-aeonik)]">Type Of Enquiry</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['Solar + Battery', 'Battery Only', 'Commercial Solar', 'EV Charger Installation'].map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer text-xs md:text-sm font-medium text-black">
                          <input
                            type="radio"
                            name="enquiryType"
                            checked={formData.enquiryType === type}
                            onChange={() => setFormData({ ...formData, enquiryType: type })}
                            className="w-4 h-4 accent-[#63B846]"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Contact Time */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wider mb-3 font-[var(--font-aeonik)]">Preferred Contact Time</h3>
                    <div className="flex flex-wrap gap-4">
                      {['Morning', 'Afternoon', 'Evening'].map((time) => (
                        <label key={time} className="flex items-center gap-2 cursor-pointer text-xs md:text-sm font-medium text-black">
                          <input
                            type="radio"
                            name="contactTime"
                            checked={formData.contactTime === time}
                            onChange={() => setFormData({ ...formData, contactTime: time })}
                            className="w-4 h-4 accent-[#63B846]"
                          />
                          {time}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm uppercase tracking-wider mb-3 font-[var(--font-aeonik)]">Message (Optional)</h3>
                    <textarea
                      placeholder="Tell Us About Your Property, Energy Goals, Or Any Specific Requirements."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="w-full bg-transparent border-b border-gray-300 py-2.5 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-[#63B846] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <CtaButton
                      type="submit"
                      text="Request My Free Quote"
                      textColor="text-black"
                      bgClass="bg-white"
                      borderClass="border border-gray-250"
                      hoverClass="hover:shadow-md hover:bg-gray-50"
                      className="w-full sm:w-auto"
                    />
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
