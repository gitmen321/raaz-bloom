import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Zap, ServerCog } from "lucide-react";

export const EngineeringHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "Secure Authentication System",
      description: "Implemented secure authentication using JWT access tokens and refresh token rotation with HTTP-only cookies to prevent token theft and session hijacking.",
      gradient: "from-primary to-accent",
      icon: ShieldCheck
    },
    {
      title: "Caching & Performance Optimization",
      description: "Integrated Redis caching and distributed rate limiting to reduce database load and protect APIs from abuse and brute-force attacks.",
      gradient: "from-accent to-web3-blue",
      icon: Zap
    },
    {
      title: "Production-Ready Backend Architecture",
      description: "Designed a backend architecture that includes structured logging, API documentation, automated testing, Docker containerization, and CI pipelines, making it ready for scalable deployments.",
      gradient: "from-web3-blue to-primary",
      icon: ServerCog
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
            Engineering <span className="bg-gradient-nature bg-clip-text text-transparent">Highlights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-web3 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-card hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-4">
                  <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-lg shadow-glow inline-block`}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
