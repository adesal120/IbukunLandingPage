import { motion } from "framer-motion";
import { achievements, interests } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Trophy, Heart } from "lucide-react";

export default function AchievementsAndInterests() {
  return (
    <section id="achievements" className="py-24">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Achievements Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold">Achievements</h2>
            </div>
            
            <ul className="space-y-4">
              {achievements.map((item, index) => (
                <li key={index} className="flex gap-4 items-start group">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors shrink-0" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Interests Column */}
          <motion.div
            id="interests"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold">Interests</h2>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              When I am not knee-deep in startups, building products, or leading digital transformation, you will find me...
            </p>

            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-normal rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
