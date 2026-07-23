
import bgimage from '@/assets/evcharging/hero_banner.png'
import Hero from '@/reuseables/Hero'

const HeroSection = () => {
    return (
        <Hero
            mediaSrc={bgimage}
            mediaType="image"
            imageClass="object-conver"
            topSubtitle="Solar Power Engineered For The"
            mainTitle="Perth Climate"
            description="WA’s #1 Rated Solar Installer With 45,000+ Installations Since 2003. CEC-Approved. ProductReview Award Winner 2021–2026."
            ctaText="Get Your Free Quote"
            ctaLink="#quote-form"
            subtitleColor="text-white"
            descriptionColor="text-white"
            showOverlay={true}
        />
    )
}

export default HeroSection