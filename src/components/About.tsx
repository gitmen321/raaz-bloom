import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Blocks } from "lucide-react";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "AI Systems That Ship",
      description: "Building AI and LLM pipelines that go into real production use—not slide decks or throwaway demos",
    },
    {
      icon: Code2,
      title: "Full-Stack Delivery",
      description: "APIs, mobile apps, PWAs, and infrastructure—owned end to end from design through deployment",
    },
    {
      icon: Blocks,
      title: "Built for Real Operations",
      description: "Software for businesses that can't afford downtime—multi-site ops, live POS data, and workflows that have to work every day",
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
            About <span className="heading-accent">Me</span>
          </h2>
          <SectionRule />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24, rotate: -1 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -24, rotate: -1 }}
            transition={{ ...stampSpring, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm an <strong className="text-primary font-semibold">independent full-stack and AI systems developer</strong>—not currently employed by a company—building production software and AI tools for businesses that need things to work in the real world. Over roughly two years of hands-on work, I've shipped across mobile, backend, and AI systems: from automating procurement decisions to running daily operations at a live fuel station. I focus on problems where reliability and clarity matter as much as the code itself.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 24, rotate: 1 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 24, rotate: 1 }}
                transition={{ ...stampSpring, delay: 0.15 + index * 0.08 }}
                className="paper-card-interactive rounded-sm p-6 hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-primary/30 bg-muted text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
