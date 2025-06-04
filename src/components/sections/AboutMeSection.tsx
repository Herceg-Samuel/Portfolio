
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMeSection() {
  const defaultInterests = "psychology, philosophy, poetry, web development, React, Next.js, Node.js, MongoDB, SQL, Firebase";

  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">About Me</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover more about my journey, interests, and the tech I love to work with.
          </p>
        </motion.div>

        <div className="mt-12 lg:mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl text-center md:text-left"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-primary bg-muted">
              <Image src="/images/samuel.jpg" alt="Samuel Kuria" fill={true} style={{objectFit:"cover"}} data-ai-hint="portrait developer" />
            </div>
            <p>
              I&apos;m Samuel Kuria, a junior web developer with a deep fascination for the human mind and the timeless questions of philosophy. This curiosity extends to my love for creative writing, especially poetry, where I explore ideas and emotions.
            </p>
            <p>
              In the world of technology, I&apos;m enthusiastic about building intuitive and engaging web experiences. I&apos;m proficient in frontend technologies like <strong className="text-primary font-semibold">React</strong> and <strong className="text-primary font-semibold">Next.js</strong>, and comfortable working with backend systems using <strong className="text-primary font-semibold">Node.js</strong>. My database experience includes both <strong className="text-primary font-semibold">MongoDB</strong> and <strong className="text-primary font-semibold">SQL</strong>, and I&apos;ve leveraged <strong className="text-primary font-semibold">Firebase</strong> for rapid development and deployment.
            </p>
            <p>
              I believe that technology can be a powerful tool for expression and connection, and I&apos;m always eager to learn new things and take on challenging projects that allow me to grow both as a developer and as an individual. My interests also include: <span className="italic text-foreground/70">{defaultInterests}</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
