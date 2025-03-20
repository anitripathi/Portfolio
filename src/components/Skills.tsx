
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { 
  Code, Database, Server, Layout, Globe, Library, FileCode, Cog, Terminal
} from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "C++", percentage: 80 },
        { name: "Java", percentage: 75 },
        { name: "C", percentage: 70 },
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML/CSS", percentage: 90 },
        { name: "React.js", percentage: 85 },
        { name: "TypeScript", percentage: 80 },
        { name: "Next.js", percentage: 75 },
        { name: "Express.js", percentage: 70 },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", percentage: 85 },
        { name: "PostgreSQL", percentage: 75 },
        { name: "MySQL", percentage: 70 },
      ]
    },
    {
      title: "Libraries & Frameworks",
      icon: Library,
      skills: [
        { name: "TensorFlow", percentage: 80 },
        { name: "NumPy", percentage: 85 },
        { name: "Pandas", percentage: 80 },
        { name: "Matplotlib", percentage: 75 },
        { name: "Bootstrap", percentage: 90 },
      ]
    },
    {
      title: "Tools",
      icon: Cog,
      skills: [
        { name: "VS Code", percentage: 90 },
        { name: "Git", percentage: 85 },
        { name: "Photoshop", percentage: 70 },
        { name: "Illustrator", percentage: 65 },
        { name: "PowerPoint", percentage: 80 },
      ]
    },
    {
      title: "Other Skills",
      icon: FileCode,
      skills: [
        { name: "Data Structures", percentage: 85 },
        { name: "Algorithms", percentage: 80 },
        { name: "SQL", percentage: 75 },
        { name: "RESTful APIs", percentage: 85 },
        { name: "UI/UX Design", percentage: 70 },
      ]
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My technical expertise and proficiency levels
            </p>
          </div>

          <motion.div 
            ref={ref}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="bg-primary/10 p-2.5 rounded-full text-primary">
                        <category.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">{skill.percentage}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full skill-progress-bar"
                              style={{ 
                                width: isVisible ? `${skill.percentage}%` : '0%',
                                transition: `width 1s ease-out ${skillIndex * 0.2}s`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
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

export default Skills;
