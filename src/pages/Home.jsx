import { AboutSection } from "../components/AboutSection";
import { NavBar } from "../components/NavBar";
import { ProjectsSection } from "../components/ProjectSection";
import { SkillSection } from "../components/SkillSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "./HeroSection";

export function Home(){
    return (
        <div>
            {/* <ThemeToggle/> */}
            <StarBackground/>
            <NavBar/>
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectsSection/>
            </main>
            
        </div>
    )
}