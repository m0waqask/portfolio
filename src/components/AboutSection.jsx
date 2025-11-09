import { Briefcase, User, Code } from "lucide-react"; // Import the Code icon

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Misanthropist & Martial Artist</h3>

                    <p className="text-muted-foreground">
                        With over 2 years of experience in web development, I specialize in crafting 
                        dynamic and responsive websites using modern technologies like React, Next.js, and Tailwind CSS. 
                        My journey began with a fascination for coding, which quickly evolved 
                        into a passion for building user-centric digital experiences.
                    </p>

                    <p className="text-muted-foreground">
                        I am passionate about learning new technologies and continuously improving my skills, along with minimizing socialization.
                
                    </p>

                    <p className="text-muted-foreground">
                        Thanks alot for visiting my site friend. <br/> Did I tell you I like Martial Arts?                
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in Touch
                        </a>

                        <a href="public\projects\resume0fWaqas.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary 
                                hover:bg-primary-button/10 transition-colors duration-300">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover ">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Code className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                {/* We got a section for skills so hold that for now */}
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground"> 
                                    Building responsive and user-friendly websites using 
                                    modern technologies. And giving it my all
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover ">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <User className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                {/* We got a section for skills so hold that for now */}
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground"> 
                                    Creating intuitive and visually appealing user interfaces. I passionately dislike the lazy flat design, fat people like it probably
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover ">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Briefcase className="h-6 w-6 text-primary"/> 
                            </div>
                            <div className="text-left">
                                {/* We got a section for skills so hold that for now */}
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground"> 
                                    Overseeing projects from inception to completion, ensuring they meet 
                                    requirements and deadlines. (Not)
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
};