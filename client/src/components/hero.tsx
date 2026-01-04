import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/vibrant_abstract_gradient_mesh_background.png";
import { Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      
      {/* Background (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
         <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover blur-3xl scale-110"
          />
         <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container px-6 z-10 max-w-4xl mx-auto text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-widest uppercase">Technologist & Founder</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6">
            Ibukun<span className="text-primary">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 italic">
            "God's blessings" or "Blessing from God" in translation from Yoruba to English.
          </p>

          <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-sans max-w-3xl mx-auto text-left md:text-center">
            <p>
              I am a technologist with over six years of rollercoaster ride as a founder, product guy, and venture scout. My secret sauce? A killer work ethic, unwavering commitment, and an insatiable hunger for success.
            </p>
            <p>
              I have carved my path and left a mark in some of the most competitive spaces, leaving behind a trail of products, ideas, and transformations that push boundaries.
            </p>
            <p>
              When I am not knee-deep in startups, building products, or leading digital transformation, you will find me globetrotting, catching z's, debating politics, or geeking out over podcasts, movies, music, sports, and food. I am also that guy who loves dropping dumb, mind-bending ideas (disguised as pushing the boundaries of innovation, of course) into casual conversation.
            </p>
            <p className="font-medium text-foreground">
              Nigerian by birth, UK resident by choice – that's me in a nutshell.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
             <Button className="rounded-full px-8 h-12 text-md shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                Get in Touch
             </Button>
             <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                </a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
