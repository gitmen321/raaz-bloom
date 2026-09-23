import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Zap, ServerCog } from "lucide-react";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

export const EngineeringHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "Secure Authentication System",
      description: "Implemented secure authentication using JWT access tokens and refresh token rotation with HTTP-only cookies to prevent token theft and session hijacking.",
      icon: ShieldCheck
    },
    {
      title: "Caching & Performance Optimization",
      description: "Integrated Redis caching and distributed rate limiting to reduce database load and protect APIs from abuse and brute-force attacks.",
      icon: Zap
    },
    {
      title: "Production-Ready Backend Architecture",
      description: "Designed a backend architecture that includes structured logging, API documentation, automated testing, Docker containerization, and CI pipelines, making it ready for scalable deployments.",
      icon: ServerCog
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
            Engineering <span className="heading-accent">Highlights</span>
          </h2>
          <SectionRule />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, rotate: 1 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 24, rotate: 1 }}
              transition={{ ...stampSpring, delay: index * 0.08 }}
              className="group relative paper-card-index rounded-sm p-6 h-full"
            >
              <div className="relative z-10 space-y-4">
                <div className="inline-block border border-primary/30 bg-muted p-3 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
