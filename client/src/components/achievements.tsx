import { motion } from "framer-motion";
import { achievements, interests } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Heart, Sparkles, CheckCircle2, Star, ExternalLink } from "lucide-react";

export default function AchievementsAndInterests() {
  return (
    <section id="achievements" className="py-24 bg-secondary/10">
      <div className="container px-8 md:px-12">
        
        {/* Achievements Section - Redesigned v3 (Numbered/Editorial Style) */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start text-left mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              <Trophy className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Honors & Awards</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <div className="h-full bg-background border border-border/60 p-6 rounded-2xl hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-start gap-4">
                    {/* Decorative Number */}
                    <div className="flex justify-between w-full items-start">
                        <span className="text-4xl font-display font-black text-border/40 group-hover:text-primary/20 transition-colors">
                            {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                        <p className="font-medium text-lg leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                        </p>
                        <div className="absolute -left-6 top-1 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                    </div>

                    {/* Icon */}
                    <div className="mt-auto pt-4 w-full flex justify-end">
                        <Star className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:fill-current transition-all" />
                    </div>
                    </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div id="interests" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl -z-10" />
          
          <div className="py-16 px-8 md:px-16 rounded-3xl border border-primary/10 bg-background/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 mb-6 text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-bold uppercase tracking-wider">Personal Interests</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Beyond the Grind
              </h3>
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                When I am not knee-deep in startups, building products, or leading digital transformation, I'm...
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                    className="cursor-default"
                  >
                    <div className="px-6 py-3 bg-card border border-border rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary/40" />
                      <span className="font-medium text-foreground/80">{interest}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
