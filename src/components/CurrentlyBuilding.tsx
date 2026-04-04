import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, GitBranch, CheckCircle2 } from "lucide-react";

export const CurrentlyBuilding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "TaskFlow Platform",
      icon: GitBranch,
      gradient: "from-web3-blue to-primary",
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
      gradient: "from-primary to-accent",
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
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Currently <span className="bg-gradient-web3 bg-clip-text text-transparent">Building</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-card relative h-full">
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${project.gradient} rounded-l-2xl`} />

                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl shadow-glow`}>
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 ml-16">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.15 + i * 0.1 }}
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
