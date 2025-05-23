import { Copyright } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-muted/50 mt-16 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex items-center justify-center space-x-1">
          <Copyright size={16} />
          <p>
            {currentYear} Samuel Kuria. All rights reserved.
          </p>
        </div>
        <p className="mt-2 text-xs">
          Crafted with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
