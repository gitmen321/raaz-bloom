import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "SQL", "Dart"],
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "Express", "FastAPI", "Supabase", "Deno Edge Functions", "AWS Rekognition"],
    },
    {
      title: "AI & LLM Orchestration",
      skills: ["LangChain", "LangGraph", "LangSmith", "Vector DBs", "RAG Pipelines"],
    },
    {
      title: "Frontend & Mobile",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "PWAs"],
    },
    {
      title: "Data & Architecture",
      skills: ["PostgreSQL (RLS, pg_cron)", "Redis", "Distributed Caching", "Event-Driven Architecture"],
    },
    {
      title: "Infrastructure & Tools",
      skills: ["Docker", "CI/CD", "Git", "Linux POS Ingestion", "Client Diagnostics"],
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={stampSpring}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Skills & <span className="heading-accent">Technologies</span>
          </h2>
          <SectionRule />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ...stampSpring, delay: 0.1 }}
          className="font-mono text-sm text-terminal mb-12 max-w-5xl mx-auto"
        >
          $ ls ./skills
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.97, rotate: -0.5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.97, rotate: -0.5 }}
              transition={{ ...stampSpring, delay: categoryIndex * 0.06 }}
              className="paper-card rounded-sm p-6 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-terminal mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    transition={{ ...stampSpring, delay: categoryIndex * 0.06 + skillIndex * 0.03 }}
                  >
                    <span className="tech-tag inline-block">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
