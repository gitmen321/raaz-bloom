import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "raazraz621@gmail.com",
      href: "mailto:raazraz621@gmail.com",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@gitmen321",
      href: "https://github.com/gitmen321",
      color: "accent",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Raaz CH",
      href: "https://www.linkedin.com/in/raaz-ch-a77535277/",
      color: "web3-blue",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 9605633156",
      href: "https://wa.me/919605633156",
      color: "primary",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-web3 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-nature mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Reach out through any of these channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-nature rounded-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild className="text-lg px-8 py-6">
            <a href="https://wa.me/919605633156" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Start a Conversation
            </a>
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground">
            © 2024 Raaz CH. Built with passion for smooth experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
