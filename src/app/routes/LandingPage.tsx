import { Navbar } from "../../components/layout/Navbar/Navbar";
import { HeroSection } from "../../components/landing/Hero/HeroSection";
import { HowItWorksSection } from "../../components/landing/HowItWorks/HowItWorksSection";
import { WhyChooseSection } from "../../components/landing/WhyChoose/WhyChooseSection";
import { TestimonialsSection } from "../../components/landing/Testimonials/TestimonialsSection";
import { AboutSection } from "../../components/landing/About/AboutSection";
import { CtaSection } from "../../components/landing/CTA/CtaSection";
import { FinalCtaSection } from "../../components/landing/FinalCTA/FinalCtaSection";
import { Footer } from "../../components/layout/Footer/Footer";
import { Page } from "../../components/layout/Page";
import { MotionSection } from "../../components/motion/MotionSection";
import { LandlordFeaturesSection } from "../../components/landing/LandlordFeatures/LandlordFeaturesSection";
export function LandingPage() {
  return (
    <Page>
      <Navbar />

      <main className="pt-10">
        <MotionSection className="py-12 sm:py-16 lg:py-24">
          <HeroSection />
        </MotionSection>

        <MotionSection
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="bg-white py-16 sm:py-20 lg:py-24"
        >
          <HowItWorksSection />
        </MotionSection>

        <MotionSection
          id="for-tenants"
          aria-labelledby="for-tenants-heading"
          className="bg-gray-100 py-16 sm:py-20 lg:py-24"
        >
          <WhyChooseSection />
        </MotionSection>

        <MotionSection
          id="for-landlords"
          aria-labelledby="for-landlords-heading"
          className="bg-white py-16 sm:py-20 lg:py-24"
        >
          <LandlordFeaturesSection />
        </MotionSection>

        <MotionSection
          id="testimonials"
          aria-labelledby="testimonials-title"
          className="bg-white py-16 sm:py-20 lg:py-24"
        >
          <TestimonialsSection />
        </MotionSection>

        <MotionSection
          id="about"
          aria-labelledby="about-title"
          className="bg-[#F7F7F7] py-16 sm:py-20 lg:py-24"
        >
          <AboutSection />
        </MotionSection>

        <MotionSection
          id="cta"
          aria-labelledby="cta-title"
          className="bg-white py-20 sm:py-24"
        >
          <CtaSection />
        </MotionSection>

        <MotionSection
          id="final-cta"
          aria-labelledby="final-cta-title"
          className="bg-[#D89A16] py-24 text-white"
        >
          <FinalCtaSection />
        </MotionSection>
      </main>

      <Footer />
    </Page>
  );
}
