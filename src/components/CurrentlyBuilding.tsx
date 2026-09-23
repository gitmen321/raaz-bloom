import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, GitBranch, CheckCircle2 } from "lucide-react";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

export const CurrentlyBuilding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "TaskFlow Platform",
      icon: GitBranch,
      description:
        "A SaaS-grade team task management backend with advanced dependency resolution, multi-provider auth, and fine-grained access control.",
      features: [
        "DAG-based task dependency engine & execution ordering",
        "Google OAuth2 + JWT rotation with Argon2id hashing",
        "Granular RBAC with Prisma ORM type-safe queries",
        "Compound-indexed pagination for zero sequential scans",
      ],
    },
    {
      title: "RZV Platform",
      icon: Server,
      description:
        "A backend-first platform focused on secure authentication, reward systems, and scalable architecture. Evolving toward:",
      features: [
        "Distributed microservices",
        "Scalable infrastructure",
        "Blockchain integrations in the future",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={stampSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Currently <span className="heading-accent">Building</span>
          </h2>
          <SectionRule />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20, rotate: index === 0 ? -1 : 1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 20, rotate: index === 0 ? -1 : 1 }}
              transition={{ ...stampSpring, delay: 0.12 + index * 0.1 }}
            >
              <div className="paper-card rounded-sm p-8 hover:border-primary/40 transition-colors relative h-full border-l-4 border-l-accent">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 border border-primary/30 bg-muted text-primary">
                    <project.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 md:ml-16">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                      transition={{ ...stampSpring, delay: 0.2 + index * 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/90">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
