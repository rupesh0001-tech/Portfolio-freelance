import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Services from "@/components/Services";

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

        {/* Small spacing at the bottom to match image layout */}
        <div className="h-10 bg-mint/60"></div>

      </main>
    </div>
  );
}
