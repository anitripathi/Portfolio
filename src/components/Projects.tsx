
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  year: string;
  link?: string;
  github?: string;
  imageUrl?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SWADESHI BAZAAR',
      description: 'An online shopping website focusing on Indian products',
      longDescription: 'It is an online shopping website that focuses on core Indian goods from locals and gives them a global platform to sell their products to encourage "VOCAL FOR LOCAL". The platform connects small-scale businesses with customers worldwide. It ensures seamless shopping experiences with a user-friendly interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB', 'Tailwind CSS', 'Python'],
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=1400&h=800&fit=crop'
    },
    {
      id: 2,
      title: 'AUTOMATIC CAR',
      description: 'Developed an autonomous car model using AI/ML',
      longDescription: 'Developed a well-trained autotic car to run in a simulator without any human intervention by training the model using dataset available online. This project leverages AI/ML techniques to create a reliable autonomous driving system.',
      technologies: ['AI/ML', 'Python', 'Matplotlib', 'NumPy', 'Seaborn', 'Data Science'],
      year: '2024',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&w=1400&h=800&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recent projects I've been working on
            </p>
          </div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="h-full overflow-hidden hover-lift border-border/50">
                  {project.imageUrl && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="outline">{project.year}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="group">
              <span>View All Projects</span>
              <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
