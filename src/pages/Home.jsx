import { NavBar } from "../components/NavBar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export function Home(){
    return (
        <div>
            <ThemeToggle/>
            <StarBackground/>
            <NavBar/>
            
        </div>
    )
}