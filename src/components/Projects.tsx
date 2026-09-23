import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

type Project = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  stats: string;
  gradient: string;
  clientFraming?: string;
  highlightStat?: string;
  viewUrl?: string;
  githubUrl?: string;
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "Station Command — Fuel Station Operations Platform",
      clientFraming:
        "Live production deployment for an HPCL fuel station—real daily operations, not a demo project.",
      // TODO: optional case study link — e.g. caseStudyUrl: "/case-studies/station-command"
      description:
        "Replaced paper workflows with a multi-tenant operations app so staff, approvals, and POS data stay in sync—built for a business that runs 24/7.",
      features: [
        "Shipped an end-to-end multi-tenant PWA replacing paper workflows for HPCL fuel station operations",
        "Built a Python sync agent on embedded Linux POS terminals streaming 1,700+ daily transactions to PostgreSQL via Edge Functions",
        "Re-architected ingestion cursor to a timestamp-based drain loop with self-healing restarts, ensuring 100% data pipeline uptime",
        "Executed a zero-downtime security migration to Supabase auth, implementing RBAC and RLS across 30+ tables",
        "Integrated multi-modal hardware (NFC, PIN, Biometrics) and AWS Rekognition (1:N) for edge-based attendance tracking",
      ],
      tech: ["React", "TypeScript", "Supabase", "Python", "Deno Edge Functions", "AWS Rekognition"],
      stats: "Full-Stack PWA & Hardware Data Ingestion (2026)",
      gradient: "from-primary to-accent",
    },
    {
      title: "Rozana Procurement Intelligence Engine",
      highlightStat: "SAR 642,382 in preventable over-buys caught in backtesting",
      description:
        "Helped a retail operation cut wasteful purchasing by automating buy decisions with auditable AI—math and rules decide; the model only explains.",
      features: [
        "Architected a 7-node LangGraph decision pipeline and deterministic math engine to automate enterprise procurement",
        "Confined the LLM strictly to a narration layer for 100% reproducible and auditable purchasing decisions",
        "Ingested 893,437 ERP sales rows into Supabase for analysis and backtesting at scale",
        "Resolved a severe Supabase database crash loop under 1-2M parallel API calls by enforcing batch writes and concurrency limits",
        "Built a 15+ endpoint FastAPI backend with human-in-the-loop approval workflows, fully traced via LangSmith",
      ],
      tech: ["Python", "LangGraph", "LangChain", "Supabase", "FastAPI", "Claude Haiku", "LangSmith"],
      stats: "Enterprise AI & Data Architecture (2026)",
      gradient: "from-web3-blue to-primary",
    },
    {
      title: "TaskFlow — SaaS Task Management Platform",
      description:
        "Gives teams a dependable way to assign work, enforce who can do what, and respect task dependencies—without the chaos of spreadsheets.",
      features: [
        "Modular NestJS REST API with dependency injection, designed for horizontal scaling",
        "Google OAuth2 social login with Argon2id-hashed JWT rotation & session tracking",
        "DAG-based task dependency engine for scheduling and execution ordering",
        "Granular RBAC authorization with PostgreSQL schemas via Prisma ORM",
        "Compound indexes on paginated queries to eliminate sequential scans",
        "Dockerized full-stack deployment for reproducible multi-environment orchestration",
      ],
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Passport.js", "OAuth2", "Docker"],
      stats: "Production Architecture",
      gradient: "from-accent to-web3-blue",
      githubUrl: "https://github.com/gitmen321/taskflow-backend",
    },
    {
      title: "RZV Backend System",
      description:
        "Backend foundation for user accounts, wallets, and rewards—built with the auth, caching, and ops tooling you'd expect before going to production.",
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
      gradient: "from-web3-blue to-primary",
      viewUrl: "https://rzv-backend.onrender.com/api/health",
      githubUrl: "https://github.com/gitmen321/rzv_backend",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={stampSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="heading-accent">Projects</span>
          </h2>
          <SectionRule />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28, rotate: 1.2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 28, rotate: 1.2 }}
              transition={{ ...stampSpring, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="relative paper-card-index rounded-sm p-6 h-full">
                <div className="relative z-10 space-y-4">
                  <div className="stamp-badge max-w-full whitespace-normal leading-snug">
                    [{project.stats}]
                  </div>

                  {project.clientFraming && (
                    <p className="text-sm font-medium text-primary border-l-2 border-dashed border-primary/40 pl-3 leading-relaxed">
                      {project.clientFraming}
                    </p>
                  )}

                  {project.highlightStat && (
                    <div className="paper-card border-2 border-dashed border-primary/45 p-4 rotate-[-0.5deg]">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-terminal mb-1">
                        Impact
                      </p>
                      <p className="text-base font-serif font-semibold text-foreground leading-snug">
                        {project.highlightStat}
                      </p>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {project.features && (
                    <ul className="text-muted-foreground text-sm space-y-1 list-disc list-inside mt-2">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  {(project.viewUrl || project.githubUrl) && (
                    <div className="flex gap-3 pt-4">
                      {project.viewUrl && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.viewUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant={project.viewUrl ? "ghost" : "outline"}
                          size="sm"
                          className={project.viewUrl ? "" : "flex-1"}
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
