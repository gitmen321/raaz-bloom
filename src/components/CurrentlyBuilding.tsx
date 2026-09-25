import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Megaphone } from "lucide-react";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

export const CurrentlyBuilding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AI Agents for Business Owners",
      icon: Bot,
      description:
        "I'm currently building AI agents for business owners—focused on practical automation and assistants that fit how they actually run their companies.",
    },
    {
      title: "Sales & Marketing Platform",
      icon: Megaphone,
      description:
        "On my personal projects side, I'm working on a sales and marketing platform.",
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
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-primary/30 bg-muted text-primary shrink-0">
                    <project.icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
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
