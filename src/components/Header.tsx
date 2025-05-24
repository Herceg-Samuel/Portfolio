
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon, UserCircle, Briefcase, Mail, MountainSnow, Zap, Menu as MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { useState } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton"; // Added import

const navItems = [
  { name: "Home", href: "#home", icon: <HomeIcon size={18} /> },
  { name: "About", href: "#about", icon: <UserCircle size={18} /> },
  { name: "Skills", href: "#skills", icon: <Zap size={18} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          
          <div className="flex items-center space-x-2 md:space-x-4">
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

            <ThemeToggleButton />

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-6 bg-background">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navItems.map((item) => (
                      <SheetClose key={item.name} asChild>
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 py-2 text-lg font-medium text-foreground hover:text-accent transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      </SheetClose>
                    ))}
                    <div className="pt-4 border-t border-border">
                       <p className="text-sm text-muted-foreground mb-2">Theme</p>
                       <ThemeToggleButton />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
