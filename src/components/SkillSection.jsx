import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Next.js", level: 80, category: "frontend" },

    // Backend
    { name: "C/C++", level: 80, category: "backend" },
    { name: "Java", level: 80, category: "backend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "Go", level: 80, category: "backend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 65, category: "backend" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Turborepo", level: 85, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export function SkillSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const filterSkills = skills.filter(
        (skills) => activeCategory === "all" || skills.category === activeCategory
    )
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container max-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className=" text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12 transition-all duration-300">
                    {categories.map((category, index) => (
                        <RenderCategory
                            key={index}
                            category={category}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover transition-all duration-300"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-white/60 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                ></div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-slate-400">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function RenderCategory({ category, activeCategory, setActiveCategory }) {
    return (
        <button
            onClick={() => setActiveCategory(category)}
            className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize",
                activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondaryy"
            )}
        >
            {category}
        </button>
    );
}
