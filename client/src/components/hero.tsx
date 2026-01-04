import { motion, useScroll, useTransform } from "framer-motion";
import avatarImage from "@assets/generated_images/professional_minimal_avatar_placeholder.png";
import heroBg from "@assets/generated_images/vibrant_abstract_gradient_mesh_background.png";
import { ArrowDown, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-90 dark:opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>
      </div>

      <div className="container px-6 z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide uppercase">Technologist & Founder</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-6 leading-[0.9]">
            Ibukun<span className="text-primary">.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 font-light mb-8 max-w-lg leading-snug">
            "God's blessings"
          </p>

          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl backdrop-blur-sm p-6 -ml-6 rounded-2xl bg-background/30 border border-white/10">
            <p>
              Technologist with <span className="text-foreground font-semibold">6+ years</span> on the startup rollercoaster.
            </p>
            <p>
              Founder, product guy, venture scout. Secret sauce? 
              <span className="text-foreground italic"> Killer work ethic & insatiable hunger.</span>
            </p>
            <p className="text-sm uppercase tracking-widest opacity-70">
              🇳🇬 Nigerian by birth • 🇬🇧 UK resident by choice
            </p>
          </div>

          <div className="flex gap-4 mt-10">
             <Button className="rounded-full h-12 px-8 text-md font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                Contact Me
             </Button>
             <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all">
                    <Twitter className="w-5 h-5 text-foreground" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all">
                    <Linkedin className="w-5 h-5 text-foreground" />
                </Button>
             </div>
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
            {/* Decorative circles */}
            <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 border border-dashed border-primary/30 rounded-full scale-90 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
            
            <img
              src={avatarImage}
              alt="Ibukunoluwa"
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-background/50 backdrop-blur-sm"
            />

            {/* Floating Stats/Badges */}
            <motion.div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-10 left-0 bg-background/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-border/50 max-w-[240px]"
            >
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🇬🇧</span>
                    <div>
                        <p className="text-sm font-bold leading-none">Global Talent</p>
                        <p className="text-xs text-muted-foreground">Visa Recipient</p>
                    </div>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
