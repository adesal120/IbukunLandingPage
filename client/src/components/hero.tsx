import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/vibrant_abstract_gradient_mesh_background.png";
import { Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      
      {/* Background (Very Subtle) */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
         <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
         <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container px-6 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-secondary text-secondary-foreground border border-border">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">Available for new opportunities</span>
            </div>

            {/* Name/Headline */}
            <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter mb-4 leading-[0.9]">
              Ibukun<span className="text-primary">.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 italic">
                "God's blessings" or “Blessing from God” in translation from Yoruba to English.
            </p>
            
            {/* Concise Bio */}
            <div className="space-y-6 text-xl md:text-3xl font-light leading-tight max-w-2xl text-foreground/90">
              <p>
                Technologist, Founder, and Product Manager with <span className="font-semibold text-foreground">6+ years</span> of driving innovation.
              </p>
              <p className="text-muted-foreground text-lg md:text-2xl">
                Building products, scaling startups, and pushing boundaries with insatiable hunger.
              </p>
            </div>

            {/* Footer Note */}
            <div className="mt-8 flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-muted-foreground/60">
              <span>🇳🇬 Nigerian by birth</span>
              <span className="w-1 h-1 rounded-full bg-current" />
              <span>🇬🇧 UK resident by choice</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6 items-center mt-12">
               <Button className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all duration-300">
                  Let's Connect <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
               
               <div className="flex gap-2">
                  <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                      <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                      <Mail className="w-5 h-5" />
                  </a>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
