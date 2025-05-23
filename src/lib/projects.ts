export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Poetry Platform",
    description: "A web application for poets to share their work, discover new poetry, and connect with a community of writers. Features user authentication and content management.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "writing poetry",
    technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: "project-2",
    title: "MindWell Journal",
    description: "A digital journaling app focused on mental well-being, incorporating principles from psychology. Users can track moods, write entries, and set mindfulness goals.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "mental health",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
  },
  {
    id: "project-3",
    title: "Philosopher's Forum",
    description: "An online forum for discussing philosophical ideas and texts. Includes threaded discussions, user profiles, and moderation tools.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "philosophy discussion",
    technologies: ["Node.js", "SQL", "Handlebars.js", "Socket.io"],
    repoLink: "#",
  },
  {
    id: "project-4",
    title: "Portfolio Website V1",
    description: "My first personal portfolio website, built to showcase early projects and skills in web development. Focused on clean design and responsiveness.",
    imageUrl: "https://placehold.co/600x400.png",
    imageAiHint: "web design",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "#",
    repoLink: "#",
  },
];
