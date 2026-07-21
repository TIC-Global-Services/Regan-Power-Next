import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import GetSolar from '@/reuseables/getsolar';
import ctaBg from '@/assets/for_your_home.png';

const BlogPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <BlogHero />
            <BlogGrid />
            <GetSolar
                subtitle="Get A Solar System Designed"
                mainTitle="For Your Home"
                description="Tell Us A Few Details About Your Home And Power Use, And One Of Our Perth-Based CEC-Accredited Designers Will Build A System Tailored To Your Roof, Your Household, And Your Budget. Free, No-Obligation, And No High-Pressure Sales Calls — Just A Proper Engineering Recommendation."
                buttonText="Get My Free Quote"
                bgImage={ctaBg}
            />
        </div>
    );
};

export default BlogPage;
