import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { ParticleNetwork } from "./ParticleNetwork";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ParticleNetwork />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/10 px-4 py-2 rounded-full">
                Developer & Web3 Enthusiast
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-nature bg-clip-text text-transparent">
                Raaz
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-muted-foreground font-light"
            >
              Flutter Developer • Fullstack • Web3 Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-foreground/80 max-w-xl leading-relaxed"
            >
              I build smooth, immersive digital experiences — from mobile apps to
              modern full-stack systems and Web3 interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="https://github.com/gitmen321" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="web3" size="lg" asChild>
                <a href="https://www.linkedin.com/in/raaz-ch-a77535277/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              {/* <Button variant="outline" size="lg">
                <Download className="w-5 h-5" />
                Download CV
              </Button> */}
              <a href="/raaz-cv.pdf" download target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </a>

              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - 3D Animation Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-web3 opacity-20 blur-3xl rounded-full animate-pulse-glow" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full border-2 border-primary/30 flex items-center justify-center relative">
                  <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full border-2 border-accent/30 flex items-center justify-center animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-nature shadow-glow" />
                  </div>
                  {/* Orbiting nodes */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-accent rounded-full shadow-purple"
                      style={{
                        top: '50%',
                        left: '50%',
                        marginTop: '-8px',
                        marginLeft: '-8px',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div
                        style={{
                          transform: `rotate(${(360 / 8) * i}deg) translateX(${120 + i * 10}px)`,
                        }}
                        className="w-full h-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
