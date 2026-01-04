import { motion } from "framer-motion";
import { achievements, interests } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export default function AchievementsAndInterests() {
  return (
    <section id="achievements" className="py-24 bg-secondary/10">
      <div className="container px-6">
        
        {/* Achievements Section - Redesigned */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start text-left mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
              <Trophy className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Recognition</span>
            </div>
            <h2 className="text-4xl font-display font-bold">Honors & Awards</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 items-start group"
              >
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="pt-0.5 border-b border-border/50 pb-6 w-full group-hover:border-primary/30 transition-colors">
                  <p className="text-base md:text-lg font-medium leading-snug text-foreground/90 group-hover:text-primary transition-colors">
                    {item}
                  </p>
                </div>
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
              <div className="inline-flex items-center gap-2 mb-6 text-primary">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-sm font-semibold uppercase tracking-wider">Personal Interests</span>
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
