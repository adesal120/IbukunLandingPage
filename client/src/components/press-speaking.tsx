import { motion } from "framer-motion";
import { press, speaking } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Newspaper, ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PressAndSpeaking() {
  return (
    <section id="press" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-6 relative z-10">
        
        {/* Speaking Engagements Section (Full Width, Redesigned) */}
        <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mic className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Speaking Engagements</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {speaking.map((event, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="group h-full p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <Badge variant="secondary" className="mb-4 bg-primary/5 text-primary hover:bg-primary/10 border-primary/10">
                                <Calendar className="w-3 h-3 mr-1.5" /> Event
                            </Badge>
                            <h3 className="text-lg font-bold font-display leading-tight group-hover:text-primary transition-colors">
                                {event}
                            </h3>
                        </div>
                        <div className="mt-6 pt-6 border-t border-border/50 flex justify-between items-center">
                            <span className="text-sm text-muted-foreground font-medium">Speaker</span>
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                <Mic className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                  </motion.div>
                ))}
            </div>
        </div>

        {/* Press Mentions (Grid) */}
        <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Newspaper className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Press & Media</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {press.map((item, index) => (
                <motion.a
                href={item.url}
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group block"
                >
                <Card className="h-full bg-card hover:bg-card/80 border-border/40 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-5 flex flex-col h-full justify-between">
                    <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                        {item.publisher}
                        </p>
                        <h3 className="text-sm font-medium leading-relaxed group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                        </h3>
                    </div>
                    <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    </CardContent>
                </Card>
                </motion.a>
            ))}
            </div>
        </div>

      </div>
    </section>
  );
}
