import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Blocks } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Blocks,
      title: "Backend Engineering",
      description: "Building scalable backend systems, APIs, secure authentication, and managing distributed architecture",
    },
    {
      icon: Code2,
      title: "Mobile Background",
      description: "Real-world experience building and deploying production Flutter apps for thousands of users",
    },
    {
      icon: Sparkles,
      title: "Future Architecture",
      description: "Exploring architectures that combine robust backend systems with blockchain and decentralized networks",
    },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-web3 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a <strong className="text-primary">software engineer</strong> focused on backend systems, API design, and scalable architecture. My development journey started with Flutter mobile applications, where I built and deployed production apps used by thousands of users.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Over time, my curiosity shifted toward how systems actually scale behind the scenes — authentication flows, caching layers, distributed systems, and backend infrastructure. Recently, I designed and built a <strong className="text-accent">production-style backend system</strong> from scratch, implementing secure authentication, Redis-based rate limiting, caching strategies, audit logging, and a wallet transaction ledger.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I enjoy solving problems around performance, reliability, and system design, and I'm currently focusing on growing into a strong backend and distributed systems engineer. Long-term, I'm exploring architectures that combine <strong className="text-web3-blue">backend infrastructure with blockchain systems</strong> and decentralized networks.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-nature rounded-lg shadow-glow">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
