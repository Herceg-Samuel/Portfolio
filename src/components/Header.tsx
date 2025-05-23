"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon, UserCircle, Briefcase, Mail, MountainSnow } from "lucide-react";
import { Button } from "./ui/button"; // For potential mobile menu

const navItems = [
  { name: "Home", href: "#home", icon: <HomeIcon size={18} /> },
  { name: "About", href: "#about", icon: <UserCircle size={18} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
              <MountainSnow className="h-8 w-8 text-primary" />
              <span>Samuel Kuria</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
              >
                <span className="flex items-center space-x-1.5">
                  {item.icon}
                  <span>{item.name}</span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}
          </nav>
          {/* Placeholder for Mobile Menu Trigger */}
          <div className="md:hidden">
            {/* Example: <Button variant="ghost" size="icon"><MenuIcon /></Button> */}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
