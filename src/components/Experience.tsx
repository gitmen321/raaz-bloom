import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Independent Developer (Freelance)",
      role: "Full-Stack & AI Systems Developer",
      period: "2025 – Present",
      achievements: [
        "Build production software and AI systems for business clients—including live operational deployments",
        "Design and integrate backend APIs, data pipelines, and mobile-facing products",
        "Improve performance and reliability through debugging, architecture, and infrastructure hardening",
        "Deliver authentication, multi-tenant backends, and automation tools end to end",
      ],
    },
    {
      company: "White Matrix",
      role: "Mobile Application Developer",
      period: "2024 – 2025",
      achievements: [
        "Developed cross-platform mobile applications using Flutter for Android and iOS.",
        "Integrated mobile apps with backend APIs and authentication systems.",
        "Implemented clean architecture patterns and improved application performance.",
        "Collaborated with backend services for data management and API communication.",
        "Delivered production-ready mobile applications used by real users.",
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
            Work <span className="heading-accent">Experience</span>
          </h2>
          <SectionRule />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: index % 2 === 0 ? -28 : 28, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
              transition={{ ...stampSpring, delay: index * 0.12 }}
              className="relative"
            >
              <div className="paper-card rounded-sm p-8 hover:border-primary/40 transition-colors border-l-4 border-l-primary">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 border border-primary/30 bg-muted text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="font-mono text-xs text-terminal mt-2 uppercase tracking-wider">{exp.period}</p>
                  </div>
                </div>

                <div className="space-y-3 ml-0 md:ml-16">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                      transition={{ ...stampSpring, delay: index * 0.12 + i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground/90">{achievement}</p>
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
