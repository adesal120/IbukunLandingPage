import { motion } from "framer-motion";
import { press, speaking } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Newspaper, ExternalLink } from "lucide-react";

export default function PressAndSpeaking() {
  return (
    <section id="press" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Speaking Engagements (Left Column) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Mic className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Speaking</h2>
              </div>

              <div className="relative border-l border-primary/20 ml-6 space-y-8 pl-8 py-2">
                {speaking.map((event, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <span className="absolute -left-[39px] top-2 w-4 h-4 rounded-full border-4 border-background bg-primary" />
                    <p className="font-medium text-lg leading-tight hover:text-primary transition-colors cursor-default">
                      {event}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Press Mentions (Right Column) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Newspaper className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-display font-bold">Press & Media</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
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
                          <h3 className="text-sm font-medium leading-relaxed group-hover:text-primary transition-colors">
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
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
