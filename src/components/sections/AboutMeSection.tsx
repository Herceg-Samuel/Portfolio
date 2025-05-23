"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateBio, type GenerateBioInput } from "@/ai/flows/generate-bio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Sparkles, Wand2 } from "lucide-react";

const formSchema = z.object({
  keywords: z.string().min(3, "Please enter at least 3 characters for keywords."),
});

type FormData = z.infer<typeof formSchema>;

export function AboutMeSection() {
  const [generatedBio, setGeneratedBio] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedBio(null);
    try {
      const input: GenerateBioInput = { keywords: data.keywords };
      const result = await generateBio(input);
      setGeneratedBio(result.bio);
      toast({
        title: "Bio Generated!",
        description: "Your new AI-powered bio is ready.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating bio:", error);
      toast({
        title: "Error",
        description: "Failed to generate bio. Please try again.",
        variant: "destructive",
      });
      setGeneratedBio("Sorry, I couldn't generate a bio at this moment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
            Discover more about my journey, interests, and the tech I love to work with. Or, let AI craft a unique bio for me!
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
                <CardTitle className="flex items-center text-3xl text-primary">
                  <Sparkles className="mr-3 h-8 w-8 text-accent" />
                  AI Bio Generator
                </CardTitle>
                <CardDescription>
                  Enter some keywords about me (or suggest your own!) and let AI create a personalized bio.
                  Try keywords like: <span className="italic text-foreground/70">{defaultInterests}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="keywords" className="text-base font-medium">Keywords</Label>
                    <Input
                      id="keywords"
                      type="text"
                      placeholder="e.g., psychology, React, creative writing"
                      defaultValue={defaultInterests}
                      {...register("keywords")}
                      className="mt-2 text-base"
                      disabled={isLoading}
                    />
                    {errors.keywords && (
                      <p className="text-sm text-destructive mt-1">{errors.keywords.message}</p>
                    )}
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center justify-center"><Wand2 className="mr-2 h-5 w-5 animate-spin" /> Generating...</span>
                    ) : (
                      <span className="flex items-center justify-center"><Wand2 className="mr-2 h-5 w-5" /> Generate Bio</span>
                    )}
                  </Button>
                </form>
                {generatedBio && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-2">Generated Bio:</h3>
                    <Textarea
                      value={generatedBio}
                      readOnly
                      className="text-sm leading-relaxed h-32 bg-background/50"
                      aria-label="Generated Bio"
                    />
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay:0.1, ease: "easeOut" }}
            className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed pt-4 lg:pt-0"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl mb-6 border-4 border-primary bg-muted">
              <Image src="https://placehold.co/300x300.png" alt="Samuel Kuria" fill={true} style={{objectFit:"cover"}} data-ai-hint="portrait developer" />
            </div>
            <p>
              I&apos;m Samuel Kuria, a junior web developer with a deep fascination for the human mind and the timeless questions of philosophy. This curiosity extends to my love for creative writing, especially poetry, where I explore ideas and emotions.
            </p>
            <p>
              In the world of technology, I&apos;m enthusiastic about building intuitive and engaging web experiences. I&apos;m proficient in frontend technologies like <strong className="text-primary font-semibold">React</strong> and <strong className="text-primary font-semibold">Next.js</strong>, and comfortable working with backend systems using <strong className="text-primary font-semibold">Node.js</strong>. My database experience includes both <strong className="text-primary font-semibold">MongoDB</strong> and <strong className="text-primary font-semibold">SQL</strong>, and I&apos;ve leveraged <strong className="text-primary font-semibold">Firebase</strong> for rapid development and deployment.
            </p>
            <p>
              I believe that technology can be a powerful tool for expression and connection, and I&apos;m always eager to learn new things and take on challenging projects that allow me to grow both as a developer and as an individual.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
