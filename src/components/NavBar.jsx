import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setIsScrolled(window.screenY > 10);
    };
    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className=" container flex items-center justify-between">
                <a
                    href="#hero"
                    className="text-xl font-bold text-primary flex items-center"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            Himanshu Bijja
                        </span>{" "}
                        Portfolio
                    </span>
                </a>
                <div className=" hidden md:flex gap-8">
                    {navItems.map((items, index) => (
                        <a
                        key={index}
                        href={items.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {items.name}
                        </a>
                    ))}
                    <ThemeToggle/>
                </div>

                {/* mobile */}

                <button className="md:hidden p-2 text-foreground z-50"
                    onClick={() => {
                        setMenuOpen((x) => !x);
                    }}
                    aria-label={isMenuOpen? " close Menu" : " open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-xs z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? " opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col gap-3 text-xl">
                        {navItems.map((items, index) => (
                            <a
                                key={index}
                                href={items.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                {items.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
