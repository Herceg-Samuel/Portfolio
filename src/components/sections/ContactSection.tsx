
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send, Phone, Twitter, Instagram, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";


export function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error Sending Message",
          description: result.message || "An unknown error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to connect? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="shadow-xl rounded-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">Full Name</Label>
                    <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-2 text-base"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-2 text-base"/>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required className="mt-2 text-base"/>
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-8 pt-4 lg:pt-0"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Contact Information</h3>
              <p className="text-base md:text-lg text-foreground/90">
                You can also reach me directly through the following channels:
              </p>
            </div>
            
            <div className="space-y-4">
              <Link href="mailto:samuel.kuria.dev@example.com" className="flex items-center space-x-3 group text-base md:text-lg transition-colors hover:text-accent">
                <div className="p-2.5 bg-accent/10 rounded-full group-hover:bg-accent transition-colors">
                  <Mail className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <span>samuel.kuria.dev@example.com</span>
              </Link>

              <Link href="https://www.linkedin.com/in/samuel-kuria-0594b7345" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-base md:text-lg transition-colors hover:text-accent">
                 <div className="p-2.5 bg-accent/10 rounded-full group-hover:bg-accent transition-colors">
                  <Linkedin className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <span>linkedin.com/in/samuel-kuria-0594b7345</span>
              </Link>

              <Link href="https://github.com/Herceg-Samuel" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-base md:text-lg transition-colors hover:text-accent">
                 <div className="p-2.5 bg-accent/10 rounded-full group-hover:bg-accent transition-colors">
                  <Github className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <span>github.com/Herceg-Samuel</span>
              </Link>
              
              <Link href="https://x.com/iamsamuelkuria" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-base md:text-lg transition-colors hover:text-accent">
                 <div className="p-2.5 bg-accent/10 rounded-full group-hover:bg-accent transition-colors">
                  <Twitter className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <span>x.com/iamsamuelkuria</span>
              </Link>

              <Link href="https://www.instagram.com/herceg_samuel/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-base md:text-lg transition-colors hover:text-accent">
                 <div className="p-2.5 bg-accent/10 rounded-full group-hover:bg-accent transition-colors">
                  <Instagram className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <span>instagram.com/herceg_samuel</span>
              </Link>
              
              <div className="flex items-center space-x-3 group text-base md:text-lg text-foreground/90">
                 <div className="p-2.5 bg-muted/50 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <span>+254711108263</span>
              </div>
            </div>
            {/* Removed placeholder image */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
