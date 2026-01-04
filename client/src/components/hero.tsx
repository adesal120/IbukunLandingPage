import { motion } from "framer-motion";
import avatarImage from "@assets/generated_images/professional_minimal_avatar_placeholder.png";
import heroBg from "@assets/generated_images/minimalist_abstract_3d_shape_dark_aesthetic.png";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover blur-3xl scale-110"
        />
      </div>

      <div className="container px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase border rounded-full border-primary/20 bg-primary/5 text-primary">
            Technologist & Founder
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            Ibukunoluwa
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 max-w-lg leading-relaxed">
            "God's blessings"
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            A technologist with over six years of rollercoaster ride as a founder, product guy, and venture scout. My secret sauce? A killer work ethic, unwavering commitment, and an insatiable hunger for success.
            <br /><br />
            Nigerian by birth, UK resident by choice.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="h-2 w-20 bg-foreground rounded-full" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl animate-pulse" />
            <img
              src={avatarImage}
              alt="Ibukunoluwa"
              className="relative w-full h-full object-cover rounded-2xl md:rounded-full shadow-2xl border-4 border-background"
            />
            
            {/* Floating Badge */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-6 md:bottom-0 md:right-0 bg-card p-4 rounded-xl shadow-xl border border-border/50 max-w-[200px]"
            >
                <p className="text-sm font-medium">Global Talent</p>
                <p className="text-xs text-muted-foreground">UK Visa Recipient</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
