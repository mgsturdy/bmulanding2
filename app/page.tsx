import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features-section";
import { SecuritySection } from "@/components/sections/security-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ReferralCTA } from "@/components/sections/referral-cta";
import { DownloadCTA } from "@/components/sections/download-cta";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-black text-white">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <SecuritySection />
        <TestimonialsSection />
        <ReferralCTA />
        <DownloadCTA />
      </main>
      
      <Footer />
    </div>
  );
}