import { motion } from "framer-motion";
import avatarImage from "@assets/generated_images/professional_minimal_avatar_placeholder.png";
import heroBg from "@assets/generated_images/vibrant_abstract_gradient_mesh_background.png";
import { ArrowDown, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background (Simplified) */}
      <div className="absolute inset-0 z-0 opacity-40">
         <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover blur-3xl scale-110"
          />
         <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container px-6 z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-xs font-semibold tracking-wide uppercase">Technologist & Founder</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            Ibukun<span className="text-primary">.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground font-light mb-8 max-w-lg">
            "God's blessings"
          </p>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
            <p>
              Technologist with <span className="text-foreground font-medium">6+ years</span> of experience. 
              Founder, product guy, venture scout.
            </p>
            <p className="italic text-foreground/80">
               Secret sauce? Killer work ethic & insatiable hunger.
            </p>
            <p className="text-sm uppercase tracking-widest opacity-70 pt-2">
              🇳🇬 Nigerian by birth • 🇬🇧 UK resident by choice
            </p>
          </div>

          <div className="flex gap-4 mt-8">
             <Button className="rounded-full px-8">
                Contact Me
             </Button>
             <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                    <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                    <Linkedin className="w-5 h-5" />
                </Button>
             </div>
          </div>
        </motion.div>

        {/* Image/Visual - Simplified */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform translate-x-4 translate-y-4" />
            <img
              src={avatarImage}
              alt="Ibukunoluwa"
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-background"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
