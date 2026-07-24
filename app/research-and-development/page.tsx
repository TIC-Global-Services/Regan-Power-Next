import React from 'react';
import { getResearchDevelopmentPage } from '@/lib/strapi';
import type {
  ResearchDevelopmentHeroData,
  EnergySolutionsSectionData,
  CoreAchievementsSectionData,
} from '@/lib/strapi-schemas/research-development';
import type { SharedEditorialSectionData, SharedCtaBannerData } from '@/lib/strapi-schemas/commercial';

import RDHero from '@/components/research-and-development/RDHero';
import DrivenByInnovation from '@/components/research-and-development/DrivenByInnovation';
import EnergySolutions from '@/components/research-and-development/EnergySolutions';
import CoreAchievements from '@/components/research-and-development/CoreAchievements';
import CtaSection from '@/reuseables/CtaSection';
import { strapiImage } from '@/lib/strapi';

export const revalidate = 60;

export default async function ResearchAndDevelopmentPage() {
  const { data } = await getResearchDevelopmentPage();
  const sections = data.sections ?? [];

  const hero = sections.find(
    (s) => s.__component === 'research-and-development.hero'
  ) as ResearchDevelopmentHeroData | undefined;
  const editorial = sections.find(
    (s) => s.__component === 'shared.editorial-section'
  ) as SharedEditorialSectionData | undefined;
  const energySolutions = sections.find(
    (s) => s.__component === 'research-and-development.energy-solutions-section'
  ) as EnergySolutionsSectionData | undefined;
  const coreAchievements = sections.find(
    (s) => s.__component === 'research-and-development.core-achievements-section'
  ) as CoreAchievementsSectionData | undefined;
  const ctaBanner = sections.find(
    (s) => s.__component === 'shared.cta-banner'
  ) as SharedCtaBannerData | undefined;

  return (
    <div className="bg-white min-h-screen text-black">
      {hero && <RDHero data={hero} />}

      {editorial && <DrivenByInnovation data={editorial} />}

      {energySolutions && <EnergySolutions data={energySolutions} />}

      {coreAchievements && <CoreAchievements data={coreAchievements} />}

      {ctaBanner && (
        <CtaSection
          subtitle={ctaBanner.subtitle || ''}
          title={ctaBanner.mainTitle || ''}
          description={ctaBanner.description || ''}
          buttonText={ctaBanner.buttonText || 'Get Started'}
          buttonHref={ctaBanner.buttonHref || '#quote-form'}
          bgImage={strapiImage(ctaBanner.backgroundImage) || undefined}
        />
      )}
    </div>
  );
}
