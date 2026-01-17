import { motion } from "framer-motion";
import { press, speaking } from "@/lib/data";
import { Mic, Newspaper, ExternalLink, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PressAndSpeaking() {
  return (
    <section id="press" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container px-8 md:px-12 relative z-10">
        
        {/* Speaking Engagements Section */}
        <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
                  <Mic className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Events</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Speaking Engagements</h2>
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
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                        <div className="group h-full p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <Badge variant="secondary" className="mb-4 bg-primary/5 text-primary hover:bg-primary/10 border-primary/10">
                                    <Calendar className="w-3 h-3 mr-1.5" /> Event
                                </Badge>
                                <h3 className="text-lg font-bold font-display leading-tight group-hover:text-primary transition-colors">
                                    {event.title}
                                </h3>
                            </div>
                            <div className="mt-6 pt-6 border-t border-border/50 flex justify-between items-center">
                                <span className="text-sm text-muted-foreground font-medium">Speaker</span>
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </a>
                  </motion.div>
                ))}
            </div>
        </div>

        {/* Press Mentions */}
        <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
                  <Newspaper className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Media</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Press & Media</h2>
            </motion.div>

            <div className="max-w-5xl mx-auto">
                <div className="grid gap-4">
                    {press.map((item, index) => (
                        <motion.a
                            href={item.url}
                            key={index}
                            target="_blank" rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="group relative flex items-center gap-6 p-6 bg-card hover:bg-card/50 border border-border/40 rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300"
                        >
                            {/* Publisher Badge */}
                            <div className="hidden sm:flex w-32 shrink-0 items-center justify-center">
                                <span className="text-xs font-bold text-primary/70 uppercase tracking-wider group-hover:text-primary transition-colors text-center">
                                    {item.publisher}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block w-px h-8 bg-border/60 group-hover:bg-primary/20 transition-colors" />

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex sm:hidden mb-2">
                                    <span className="text-[10px] font-bold text-primary/70 uppercase tracking-wider border border-primary/20 px-2 py-0.5 rounded-full">
                                        {item.publisher}
                                    </span>
                                </div>
                                <h3 className="text-lg font-medium leading-snug group-hover:text-primary transition-colors truncate pr-4">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Action Icon */}
                            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
