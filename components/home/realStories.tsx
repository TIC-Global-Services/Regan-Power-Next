"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import Marquee from "@/reuseables/Marquee";
import SectionHeader from "@/reuseables/SectionHeader";

import googleRating from "@/assets/home/realstories/google_rating.png";
import bestRatedBatch from "@/assets/home/realstories/best_rated_batch.png";
import topPanelInstallers from "@/assets/home/realstories/top_panel_installers.png";
import topRated from "@/assets/home/realstories/top_rated.jpg";
import googleLogo from "@/assets/home/realstories/google_logo.svg";


interface ReviewItem {
    id: string;
    systemTitle: string;
    quote: string;
    author: string;
    location: string;
    rating: number;
    source: "google";
}

interface BadgeItem {
    id: string;
    src: StaticImageData | string;
    alt: string;
}


const BADGES: BadgeItem[] = [
    { id: "google-rating", src: googleRating, alt: "Google Rating 4.9 stars based on 1,385+ reviews" },
    { id: "best-rated", src: bestRatedBatch, alt: "Best Rated Solar Installer — #1 Most Popular Western Australia 2026" },
    { id: "top-installers", src: topPanelInstallers, alt: "Top Rated Solar Panel Installers" },
    { id: "top-rated", src: topRated, alt: "Top Rated Installers — Western Australia" },
];

const REVIEWS: ReviewItem[] = [
    {
        id: "review-1",
        systemTitle: "10kW Solar + Battery System",
        quote:
            "The Entire Process Was Smooth From Consultation To Installation. Our Power Bills Dropped Almost Immediately, And The Team Kept Us Informed Every Step Of The Way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
        source: "google",
    },
    {
        id: "review-2",
        systemTitle: "10kW Solar + Battery System",
        quote:
            "The Entire Process Was Smooth From Consultation To Installation. Our Power Bills Dropped Almost Immediately, And The Team Kept Us Informed Every Step Of The Way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
        source: "google",
    },
    {
        id: "review-3",
        systemTitle: "10kW Solar + Battery System",
        quote:
            "The Entire Process Was Smooth From Consultation To Installation. Our Power Bills Dropped Almost Immediately, And The Team Kept Us Informed Every Step Of The Way.",
        author: "Sarah",
        location: "Perth",
        rating: 5,
        source: "google",
    },
    {
        id: "review-4",
        systemTitle: "6.6kW Solar Panel System",
        quote:
            "Outstanding service from start to finish. The team was professional, punctual and the quality of the installation exceeded our expectations. Highly recommend!",
        author: "James",
        location: "Joondalup",
        rating: 5,
        source: "google",
    },
    {
        id: "review-5",
        systemTitle: "13.2kW Commercial Solar",
        quote:
            "Best decision we made for our business. Energy costs cut in half and the ROI was faster than projected. Regen Power made it effortless.",
        author: "Michelle",
        location: "Fremantle",
        rating: 5,
        source: "google",
    },
];


const StarRating: React.FC<{ count: number }> = ({ count }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
            <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);



const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => (
    <div className="flex-shrink-0 w-[340px] md:w-[380px] bg-[#F0F6EC] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
        {/* Header */}
        <div>
            <h4 className="text-lg md:text-xl font-semibold text-black mb-3 leading-snug">
                {review.systemTitle}
            </h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                &ldquo;{review.quote}&rdquo;
            </p>
            <p className="text-sm font-medium text-black">
                {review.author} · {review.location}
            </p>
        </div>


        <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200/60">
            {review.source === "google" && (
                <Image
                    src={googleLogo}
                    alt="Google"
                    className="h-6 w-auto"
                    height={24}
                    width={72}
                />
            )}
            <StarRating count={review.rating} />
        </div>
    </div>
);



const RealStories: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">

            <SectionHeader
              subtitle="Real Stories."
              title={<span className="text-[#63B846]">Real Results.</span>}
              align="center"
              subtitleClass="text-xl md:text-2xl text-gray-500 font-normal italic tracking-tight mb-1 block normal-case"
              titleClass="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1"
              className="mb-10 md:mb-14 mx-auto"
            />


            <div className="px-[5%] mb-12 md:mb-16">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {BADGES.map((badge) => (
                        <div
                            key={badge.id}
                            className="relative h-16 md:h-20 w-auto flex items-center"
                        >
                            <Image
                                src={badge.src}
                                alt={badge.alt}
                                className="h-full w-auto object-contain"
                                height={80}
                                width={200}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Marquee direction="left" speed={40} gap={20} pauseOnHover>
                {REVIEWS.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </Marquee>
        </section>
    );
};

export default RealStories;