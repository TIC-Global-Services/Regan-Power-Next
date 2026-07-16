import FullscreenSplitSection from "@/reuseables/FullscreenSplitSection";
import applicationImg from "@/assets/solar/government-rebates/application.png";

export default function PaperworkSection() {
  return (
    <FullscreenSplitSection
      subtitle="We Handle Every Application"
      title="You Don't Fill Out A Single Form"
      description="Three rebates and a loan means multiple applications, SAA compliance, retailer approvals, and feed-in paperwork. The Perth office handles that stack in-house so the process does not land on your desk."
      image={applicationImg}
      imageAlt="Application form on a laptop"
      imagePosition="right"
      textArrangement="center"
      badge="Paperwork"
    />
  );
}
