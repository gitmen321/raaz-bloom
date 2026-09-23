import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { SectionRule } from "@/components/ui/section-rule";
import { stampSpring } from "@/lib/motion";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "raazraz621@gmail.com",
      href: "mailto:raazraz621@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@gitmen321",
      href: "https://github.com/gitmen321",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Muhammad Raz",
      href: "https://www.linkedin.com/in/raaz-ch-a77535277/",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9605633156",
      href: "https://wa.me/919605633156",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden border-t border-dashed border-border">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={stampSpring}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's <span className="heading-accent">Connect</span>
          </h2>
          <SectionRule className="mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project to build, a problem to automate, or a role to fill? Let's talk—I'm open to freelance and contract work as well as full-time opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, rotate: 0.5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 20, rotate: 0.5 }}
              transition={{ ...stampSpring, delay: index * 0.08 }}
              className="group paper-card-interactive rounded-sm p-6 hover:border-primary/40"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 border border-primary/30 bg-muted text-primary group-hover:scale-105 transition-transform duration-200">
                  <method.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-terminal mb-1">{method.label}</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ ...stampSpring, delay: 0.35 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild className="text-lg px-8 py-6">
            <a href="https://wa.me/919605633156" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Start a Conversation
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ...stampSpring, delay: 0.5 }}
          className="text-center mt-20 pt-8 border-t border-dashed border-border/60"
        >
          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Full-stack & AI systems developer, open to freelance projects and full-time opportunities.
          </p>
          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} Muhammad Raz. Built with passion for smooth experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
