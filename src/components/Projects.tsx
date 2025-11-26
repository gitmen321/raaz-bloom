import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Fleet Manager App",
      description: "Production-ready Flutter app for real-time trip tracking and fleet management. Optimized backend architecture for high performance.",
      tech: ["Flutter", "Android", "iOS", "Real-time Tracking", "Backend Optimization"],
      stats: "5,000+ downloads",
      gradient: "from-primary to-accent",
    },
    {
      title: "White Cloud Supermarket",
      description: "Online grocery platform with unique 'Submit List' ordering system. Handles 10k+ daily transactions with Flutter frontend and MongoDB backend.",
      tech: ["Flutter", "MongoDB", "Node.js", "Payment Integration"],
      stats: "10k+ daily transactions",
      gradient: "from-accent to-web3-blue",
    },
    {
      title: "Zicabella",
      description: "Modern e-commerce app showcasing clean architecture with bloc pattern and dio for API handling. Focus on smooth UI and scalable structure.",
      tech: ["Flutter", "Bloc", "Dio", "Modern UI", "Clean Architecture"],
      stats: "Production ready",
      gradient: "from-web3-blue to-primary",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-nature bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-web3 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-card hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-4">
                  {/* Stats badge */}
                  <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {project.stats}
                  </div>

                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
