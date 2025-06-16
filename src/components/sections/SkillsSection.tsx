
"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface Skill {
  name: string;
}

const skillsList: Skill[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "MongoDB"},
  { name: "SQL" },
  { name: "Git" },
  { name: "Firebase" },
  { name: "Framer Motion" },
  { name: "Genkit" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const skillCardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, // Use custom index for staggered delay
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">My Skills</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Technologies and tools I work with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillCardVariants}
              custom={index} // Pass index to variants for custom delay
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start"
            >
              <div className="flex items-center mb-2">
                <Zap size={22} className="text-accent mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-primary">{skill.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground" style={{ marginLeft: `calc(22px + 0.75rem)` }}> 
                {/* 22px for icon width, 0.75rem for mr-3 */}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
