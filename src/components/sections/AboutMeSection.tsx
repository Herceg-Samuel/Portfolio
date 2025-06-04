
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutMeSection() {
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
              Hey there! I&apos;m Samuel Kuria — web developer by day, armchair philosopher by night, and aspiring poet somewhere in between. I spend most of my time wrangling <strong className="text-primary font-semibold">React</strong> components, experimenting with <strong className="text-primary font-semibold">Next.js</strong>, and occasionally having deep existential conversations with my terminal.
            </p>
            <p>
              My toolbox includes <strong className="text-primary font-semibold">Node.js</strong>, <strong className="text-primary font-semibold">MongoDB</strong>, <strong className="text-primary font-semibold">SQL</strong>, and <strong className="text-primary font-semibold">Firebase</strong> — or as I like to call it, the full-stack survival kit. But I&apos;m not just here to build shiny UIs; I&apos;m here to craft digital experiences that feel intuitive, human, and maybe even a little meaningful.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me lost in thought about consciousness, scribbling poems that may or may not make sense, or reading something that completely rewires my brain (in the best way). I believe good tech — like good writing — should bring people closer together.
            </p>
            <p>
              That&apos;s what I&apos;m here to build, one thoughtful project at a time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
