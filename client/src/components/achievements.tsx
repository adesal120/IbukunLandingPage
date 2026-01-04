import { motion } from "framer-motion";
import { achievements, interests } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Heart, Sparkles, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AchievementsAndInterests() {
  return (
    <section id="achievements" className="py-24 bg-secondary/10">
      <div className="container px-6">
        
        {/* Achievements Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-display font-bold mb-4">Honors & Awards</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors group">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="mt-1">
                      <Award className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed group-hover:text-primary transition-colors">
                      {item}
                    </p>
                  </CardContent>
                </Card>
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
