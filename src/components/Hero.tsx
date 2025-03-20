
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    const contentElement = document.getElementById('about');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16 pb-0">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-gray-900/20 dark:to-background z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative"
          >
            <div className="rounded-full p-1.5 bg-gradient-to-r from-primary to-blue-400 shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <div className="rounded-full p-1 bg-white dark:bg-gray-950">
                <Avatar className="h-48 w-48 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden">
                  <AvatarImage 
                    src="/lovable-uploads/2059c3b9-4203-4b05-8d2b-66e7fd8206fb.png" 
                    alt="Anivesh Tripathi" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl">AT</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-3 -right-3 bg-primary text-white rounded-full p-2 shadow-lg"
            >
              <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold">✓</span>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary dark:bg-primary/20"
            >
              B.Tech. in Computer Science (AI/ML)
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter"
            >
              Anivesh Tripathi
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Full Stack Developer & AI/ML Enthusiast
            </motion.p>
          
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground md:text-lg"
            >
              Passionate about building innovative solutions with a focus on AI/ML, full stack development, and data science. Currently strengthening my knowledge in DSA for competitive programming.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild className="group">
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me <Mail className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-2 justify-center"
            >
              <a 
                href="https://github.com/anitripathi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/anivesh-tripathi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:tripathi.ani321@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:9336889251" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToContent}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
      
      <div ref={scrollRef} className="absolute bottom-0 left-0 right-0 h-4"></div>
    </section>
  );
};

export default Hero;
