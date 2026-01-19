import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 pointer-events-none" />

      <div className="container px-8 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 border border-primary/20">
              <Briefcase className="w-3.5 h-3.5" />
              <span className="text-xs font-bold uppercase tracking-wider">Career</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Work Experience</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-right hidden md:block pb-2">
            A track record of building, scaling, and leading
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <a href={job.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="h-full bg-card/40 backdrop-blur-md border-border/40 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-primary/5 rounded-lg text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                    </div>
                    <CardTitle className="font-display text-xl leading-tight group-hover:text-primary transition-colors">
                      {job.company}
                    </CardTitle>
                    <CardDescription className="text-foreground/80 font-medium mt-1">
                      {job.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                      {job.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
