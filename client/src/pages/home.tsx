import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import PressAndSpeaking from "@/components/press-speaking";
import AchievementsAndInterests from "@/components/achievements";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <PressAndSpeaking />
        <AchievementsAndInterests />
      </main>
      <Footer />
    </div>
  );
}
