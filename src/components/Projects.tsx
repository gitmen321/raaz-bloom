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
      title: "RZV Backend System",
      description: "Production-style backend system designed for authentication, wallet transactions, and reward management.",
      features: [
        "JWT authentication with refresh token rotation",
        "Redis caching and distributed rate limiting",
        "Wallet transaction ledger system",
        "Daily reward and referral reward logic",
        "Admin audit logging system",
        "Swagger API documentation",
        "Docker containerization",
        "CI pipeline using GitHub Actions",
        "Integration testing using Jest",
      ],
      tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "Jest", "Swagger", "CI/CD"],
      stats: "Production Ready",
      gradient: "from-primary to-accent",
      viewUrl: "https://rzv-backend.onrender.com/api/health",
      githubUrl: "https://github.com/gitmen321/rzv_backend"
    },
    {
      title: "RZV Admin Dashboard (Frontend Demo)",
      description: "Admin dashboard built to demonstrate and interact with the RZV backend system.",
      features: [
        "Secure admin authentication",
        "User management interface",
        "Wallet transaction management",
        "Dashboard statistics and analytics",
        "Pagination and filtering",
        "Clean dark theme UI",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
      stats: "Live Demo",
      gradient: "from-accent to-web3-blue",
      viewUrl: "https://rzv-frontend.vercel.app",
      githubUrl: "https://github.com/gitmen321/rzv_frontend"
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

                  {project.features && (
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside mt-2">
                      {project.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

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
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.viewUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
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
