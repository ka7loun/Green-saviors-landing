import AboutAgrivolt from "@/components/about/AboutAgrivolt";
import Header from "@/components/home/Header";
import Principles from "@/components/principles/Principles";
import Nav from "@/components/Nav";
import TeamMembers from "@/components/team/TeamMembers";
import TeamSection from "@/components/team/TeamSection";
import { ContactForm } from "@/components/contact/ContactForm";
import Footer from "@/components/footer/footer";
import ScrollToTop from "@/components/ScrollToTop";
import StatsSection from "@/components/StatsSection";

export const metadata = {
  title: "Agrivolt - Transforming Waste into Clean Energy & Fertilizers",
  description:
    "Agrivolt transforms organic waste into biogas and high-quality fertilizers through innovative anaerobic digestion technology. Join us in building a sustainable future for Tunisia with AI-powered waste management and renewable energy solutions.",
  keywords: [
    "biogas",
    "organic waste management",
    "renewable energy Tunisia",
    "anaerobic digestion",
    "sustainable agriculture",
    "circular economy",
    "green energy",
    "waste to energy",
    "organic fertilizers",
    "IoT agriculture",
  ],
  openGraph: {
    title: "Agrivolt - Sustainable Waste Management & Clean Energy",
    description: "Transform organic waste into valuable biogas and fertilizers. Building Tunisia's sustainable future.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <div className="background">
        <AboutAgrivolt />
        <Principles />
      </div>
      <TeamSection />
      <StatsSection />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </>
  );
}
