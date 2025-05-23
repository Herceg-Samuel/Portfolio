"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Adjusted delay for smoother staggering
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index} // Pass index to custom prop for staggered delay
      className="bg-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative w-full h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          data-ai-hint={project.imageAiHint}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-card-foreground/80 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-3 pt-4 border-t border-border/50">
          {project.liveLink && (
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 transition-colors duration-300">
              <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoLink && (
            <Button asChild variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 flex-1 transition-colors duration-300">
              <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
