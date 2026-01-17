import { Mail, Linkedin, Twitter, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary text-primary-foreground mt-12">
      <div className="container px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold mb-2">Ibukunoluwa</h3>
            <p className="text-primary-foreground/60">
              Technologist • Founder • Venture Scout
            </p>
          </div>

          <div className="flex gap-4">
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-white rounded-full">
                <Twitter className="w-5 h-5" />
                </Button>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-white rounded-full">
                <Linkedin className="w-5 h-5" />
                </Button>
            </a>
            <a href={`mailto:${contact.email}`}>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 hover:text-white rounded-full">
                <Mail className="w-5 h-5" />
                </Button>
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Ibukunoluwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
