import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles, Blocks } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Code2,
      title: "Mobile Development",
      description: "Flutter developer with real-world deployed apps reaching 5,000+ downloads",
    },
    {
      icon: Blocks,
      title: "Fullstack Experience",
      description: "Backend architecture with Node.js, MongoDB, and AWS cloud infrastructure",
    },
    {
      icon: Sparkles,
      title: "Web3 Passion",
      description: "Exploring blockchain networks, wallets, EVM, and decentralized technologies",
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
              I'm a <strong className="text-primary">Flutter developer</strong> who loves creating 
              smooth, intuitive mobile experiences. My apps aren't just code — they're crafted 
              with attention to UI/UX, performance, and real-world usability.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Beyond mobile, I've built <strong className="text-accent">fullstack systems</strong> with 
              Node.js, MongoDB, and AWS, handling everything from database design to API optimization. 
              I thrive on solving complex architecture challenges.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              What excites me most? <strong className="text-web3-blue">Web3 and blockchain</strong>. 
              I'm passionate about decentralized networks, smart contracts, EVM, and building 
              the future of digital interactions. My portfolio blends nature-inspired design 
              with futuristic Web3 aesthetics — just like my approach to development.
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
