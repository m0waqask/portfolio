import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Airline Reservation System",
        description: "A console-based flight booking system developed in C++ with user-friendly interface for managing reservations. Features include booking, cancellation, and data persistence using text files.",
        image: "/projects/plane-01.jpg",
        tags: ["C++", "University Project"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Teachr Guessr Game",
        description: "An interactive Python game applying Discrete Mathematics concepts. Players engage in a question-based guessing system with adaptive difficulty and score tracking.",
        image: "/projects/project1-01.jpg",
        tags: ["Python", "University Project"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "FIR Registration System",
        description: "A WinForms-based FIR management system with secure authentication. Enables officers to register complaints, track case status, and maintain sensitive records securely.",
        image: "/projects/project2-01.jpg",
        tags: ["C++", "WinForms", "University Project"],
        demoUrl: "#",
        githubUrl: "#",
    },

]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully 
                crafted with attention to detail, performance and user experience.
                There are alot more related to graphics Ill add em later
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} 
                        className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover">

                        <div className="h-48 overflow-hidden">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                       {/* Expands the inside of the card and not the outside although I might edit it later to expand the outside cause inside expansion looks so damn weird lol */}
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl}
                                target="_blank" 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {" "}
                                    <ExternalLink size={20}/>
                                </a>
                                <a href={project.githubUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    {" "}
                                    <Github size={20} />
                                </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                ))};
            </div>
{/* og was mt-12 but it looked damn weird so I made it mb-7 */}
            <div className="text-center mb-7 ">
                <a href="https://github.com/m0waqask" 
                target="_blank"
                className="cosmic-button w-fit flex text-center mx-auto gap-2 items-center"> 
                    Check My GitHub <ArrowRight size={16}/>
                </a>
            </div>

        </div>
    </section>;
};