import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";
import StrategicPartnerships from "@/components/StrategicPartnerships";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-mint/60 flex flex-col font-sans">

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-28 md:pt-36">

        {/* Hero Section */}
        <Hero />

        {/* Brand Partner Logos */}
        <PartnerLogos />

        {/* Services Section */}
        <Services />

        {/* Strategic Partnerships Section */}
        <StrategicPartnerships />

        {/* Why Work With Me Section */}
        <WhyWorkWithMe />

        {/* FAQ Section */}
        <FAQ />

        <CTA />

        <Form />

      </main>

      <Footer />
    </div>
  );
}
