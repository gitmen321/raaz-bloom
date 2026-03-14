import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { EngineeringHighlights } from "@/components/EngineeringHighlights";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <Hero />
      <About />
      <Projects />
      <EngineeringHighlights />
      <Skills />
      <Experience />
      <CurrentlyBuilding />
      <Contact />
    </main>
  );
};

export default Index;
