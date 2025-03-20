
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const educationItems = [
    {
      id: 1,
      institution: 'ABES Engineering College, Ghaziabad',
      degree: 'B.Tech. in Computer Science (AI/ML)',
      years: '2022-2026',
      grade: 'CGPA: 7.96',
      icon: GraduationCap,
    },
    {
      id: 2,
      institution: "ST. Mary's Sr. Sec. School, Khaga",
      degree: 'Class XII (CBSE)',
      years: '2020-2021',
      grade: 'Percentage: 94.2',
      icon: GraduationCap,
    },
    {
      id: 3,
      institution: "ST. Mary's Sr. Sec. School, Khaga",
      degree: 'Class X (CBSE)',
      years: '2018-2019',
      grade: 'Percentage: 92.6',
      icon: GraduationCap,
    }
  ];
  
  const additionalItems = [
    {
      id: 1,
      title: 'Current Focus',
      description: 'Strengthening knowledge in full stack development and DSA for competitive programming',
      icon: Clock,
    },
    {
      id: 2,
      title: 'Career Interest',
      description: 'Software development, Artificial Intelligence, Machine Learning',
      icon: Briefcase,
    },
    {
      id: 3,
      title: 'Current Learning',
      description: 'Focusing on my communication skill and discipline',
      icon: GraduationCap,
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
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My educational background and current interests
            </p>
          </div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold tracking-tight">Education</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {educationItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow group overflow-hidden hover-lift">
                    <CardContent className="pt-6 pb-3">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1.5">
                          <h4 className="text-lg font-semibold">{item.institution}</h4>
                          <p className="text-sm text-muted-foreground">{item.degree}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.years}</span>
                            <span className="text-sm font-medium text-primary">{item.grade}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold tracking-tight">Additional Information</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {additionalItems.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow hover-lift">
                    <CardContent className="pt-6 pb-3">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1.5">
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
