import { Briefcase, Code, User } from "lucide-react";

export function AboutSection() {
    return (
        <div>
            <section id="about" className="py-24 px-4 relative">
                <div className=" container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold">
                                Lorem ipsum dolor sit .
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aperiam nobis quo at tempora,
                                obcaecati perspiciatis!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Est doloribus saepe adipisci
                                maiores similique quidem nobis excepturi.
                                Facere, illo non?
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className=" cosmic-button">
                                    Get in Touch
                                </a>
                                <a
                                    href=""
                                    className="px-6 py-2 text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors duration-300"
                                >
                                    {" "}
                                    Download CV{" "}
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className=" gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className=" size-6 text-primary"/>

                                    </div>
                                    <div className="text-left">
                                        <h4 className=" font-semibold text-lg">
                                            Web Development
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Creating web applications and modern frameworks
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className=" gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className=" size-6 text-primary"/>

                                    </div>
                                    <div className="text-left">
                                        <h4 className=" font-semibold text-lg">
                                            UI/UX Design
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Designing intuitive user interfaces and seamless user experience
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className=" gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className=" size-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className=" font-semibold text-lg">
                                            Project Management
                                        </h4>
                                        <p className="text-muted-foreground">
                                            Leading projects from conception to completion with agile methodologies.
                                        </p>
                                    </div>

                                </div>
                            </div>


                        </div>

                        
                    </div>
                </div>
            </section>
        </div>
    );
}
