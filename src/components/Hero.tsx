import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import { SplineHero } from "./hero/SplineHero";
import { useTypewriter } from "@/hooks/use-typewriter";
import { stampSpring, stampSpringSoft } from "@/lib/motion";

export const Hero = () => {
  const pitch =
    "I build backends, AI pipelines, and operational software that businesses run on.";
  const { display: whoamiText, done: whoamiDone } = useTypewriter("$ whoami", 55, 300);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={stampSpringSoft}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...stampSpring, delay: 0.1 }}
              className="inline-block"
            >
              <span className="stamp-badge normal-case tracking-wide text-[11px]">
                Full-Stack Developer • Production AI Systems
              </span>
            </motion.div>

            <p className="font-mono text-sm text-terminal min-h-[1.5rem]" aria-live="polite">
              {whoamiText}
              {!whoamiDone && <span className="cursor-blink">▌</span>}
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...stampSpring, delay: 0.15 }}
              className="text-5xl lg:text-8xl font-bold leading-[1.05]"
            >
              Hi, I'm{" "}
              <span className="text-primary not-italic">Muhammad Raz</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={whoamiDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={stampSpring}
              className="text-xl lg:text-2xl text-muted-foreground font-normal mb-4 max-w-xl"
            >
              {pitch}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...stampSpring, delay: 0.35 }}
              className="text-lg text-foreground/85 max-w-xl leading-relaxed"
            >
              I design and ship AI-powered tools, APIs, and automation systems that real businesses depend on daily — from enterprise procurement to fuel station operations.
              <br /><br />
              Kannur, Kerala, India
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...stampSpring, delay: 0.45 }}
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
              <a href="/MuhammadRazCv.pdf" download target="_blank" rel="noopener noreferrer">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ ...stampSpringSoft, delay: 0.2 }}
            className="relative h-[450px] lg:h-[600px]"
          >
            <SplineHero />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
          <div className="h-8 w-px bg-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};
