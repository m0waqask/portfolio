import { Mail, Phone, MapPin, Linkedin, Youtube, Instagram, Twitter, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { Description } from "@radix-ui/react-toast";
import { useState } from "react";

export const ContactSection = () => {
    
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true);

        setTimeout(() =>{
            toast({
            title: "Message Sent! (Not really lol)",
            description: (
                <>
                Thank you for your message, <br /> I'll get back to you if I read it haha. <br />
                <br /> <span className="text-muted-foreground text-sm">
                    Note: This is just mock functionality, real email sending requires paid integration, I aint investing in that rn.
                </span>
                </>
            ), duration: 8000,
            });

             e.target.reset();
            setIsSubmitting(false);
            
        }, 8000)

    }

    const handleSocialClick = (platform) => {
    toast({
        title: ` Gotta format my ${platform}, its not professionally ready 😅`,
        description: "I'll be working on it after mids, thanks for your patience!",
        });
    };


    return (
    <section id="contact" 
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold ml-2 mb-4 text-center">
                 Get In<span className="text-primary"> Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I am always open to discussing new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6 mt-5">
                        Contact Information
                    </h3>
                    <div className="space-y-6 justify-center">
                        
                        <div className="flex items-start space-x-4 mt-13">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="w-6 h-6 text-primary" />
                            </div>
                            {" "}
                            <div className="flex flex-col text-left ml-5">
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+92322477064" 
                                className="text-muted-foreground hover:primary transition-colors">
                                    +92 322 4770 64
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            {" "}
                            <div className="flex flex-col text-left ml-5">
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:m0waqaskashif@gmail.com" 
                                className="text-muted-foreground hover:primary transition-colors">
                                    m0waqaskashif@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            {" "}
                            <div className="flex flex-col text-left ml-5">
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Karachi, Pakistan
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                        <button
                            onClick={() => handleSocialClick("LinkedIn")}
                            className="hover:text-primary transition-colors"
                        >
                            <Linkedin />
                        </button>
                        <button
                            onClick={() => handleSocialClick("Twitter")}
                            className="hover:text-primary transition-colors"
                        >
                            <Twitter />
                        </button>
                        <button
                            onClick={() => handleSocialClick("Instagram")}
                            className="hover:text-primary transition-colors"
                        >
                            <Instagram />
                        </button>
                        <a href="https://www.youtube.com/@DollarHoot" target="_blank" className="hover:text-primary/80">
                                <Youtube />
                        </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                
                    <h3 className="text-2xl font-semibold mb-6"> Send A Message </h3>

                    <form action="" className="space-y-6">

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                            placeholder="Kabir ur Rehman Khan Niazi..."/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                            placeholder="sexman@gmail.com"/>
                        </div>

                        <div>
                            <label htmlFor="Message" className="block text-sm font-medium mb-2">Your Message</label>
                            <input 
                            // no type it can be anything.
                            id="message" 
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                            placeholder="Hello! I am gay..."/>
                        </div>

                        <button
                        disabled={isSubmitting} 
                        type="submit" 
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            {isSubmitting ? "Sending..." :"Send Message"}
                            <Send size={16} />

                        </button>
                    </form>
                </div>

            </div>

        </div>
    </section>
    );
};