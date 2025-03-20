
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Lightbulb, Rocket, Brain, Code, Server, Globe } from 'lucide-react';

const Future = () => {
  const futureIdeas = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Assistant',
      description: 'Developing an AI system that can assist doctors in diagnosing diseases by analyzing patient data and medical images.',
      category: 'AI/ML',
      technologies: ['TensorFlow', 'Python', 'Computer Vision', 'NLP'],
      icon: Brain,
    },
    {
      id: 2,
      title: 'Smart Home Automation Platform',
      description: 'Creating a comprehensive IoT platform that integrates various smart home devices and provides intelligent automation based on user behavior.',
      category: 'IoT',
      technologies: ['Python', 'MQTT', 'React', 'Node.js', 'MongoDB'],
      icon: Server,
    },
    {
      id: 3,
      title: 'Personal Finance Tracker with ML Predictions',
      description: 'Building a finance tracking app that uses machine learning to predict future expenses and provide personalized savings recommendations.',
      category: 'FinTech',
      technologies: ['React Native', 'Python', 'TensorFlow', 'PostgreSQL'],
      icon: Rocket,
    },
    {
      id: 4,
      title: 'Full Stack E-commerce Platform',
      description: 'Developing a scalable e-commerce solution with advanced features like recommendation engines, AR product previews, and omnichannel inventory management.',
      category: 'Web Development',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'],
      icon: Globe,
    },
    {
      id: 5,
      title: 'Blockchain-based Supply Chain System',
      description: 'Creating a transparent supply chain tracking system using blockchain technology to ensure authenticity and traceability of products.',
      category: 'Blockchain',
      technologies: ['Solidity', 'React', 'Node.js', 'Ethereum', 'IPFS'],
      icon: Code,
    },
    {
      id: 6,
      title: 'Educational Platform with Adaptive Learning',
      description: 'Building an educational platform that adapts to individual learning styles and progress, providing personalized content and assessments.',
      category: 'EdTech',
      technologies: ['React', 'Node.js', 'MongoDB', 'Python', 'ML'],
      icon: Lightbulb,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="future" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Future Ideas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Projects and concepts I'm planning to work on in the future
            </p>
          </div>

          <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {futureIdeas.map((idea, index) => (
              <motion.div key={idea.id} variants={itemVariants}>
                <Card className="h-full overflow-hidden hover-lift">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                        <idea.icon className="w-5 h-5" />
                      </div>
                      <Badge>{idea.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{idea.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{idea.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {idea.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-primary font-medium flex items-center group cursor-pointer">
                      <span>Learn more</span>
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Future;
