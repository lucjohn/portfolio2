import { Star } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "../../components/StarBackground";
import { NavBar } from "../../components/NavBar";
import { HeroSection } from "../../components/HeroSection";
import { AboutSection } from "../../components/AboutSection";
import { ProjectsSection } from "../../components/ProjectsSection";
import { useState } from "react";
import { ContactSection } from "../../components/ContactSection";

export const Home = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

  // We want min height of page is entire screen
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggling */}
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {/* Background Effects  */}
      <StarBackground isDarkMode={isDarkMode}/> 
      {/* Nav Bar */}
      <NavBar/>

      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
    </div>
  );
};
