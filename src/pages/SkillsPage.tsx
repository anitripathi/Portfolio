
import { useEffect } from 'react';
import Skills from '@/components/Skills';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@/components/theme-provider';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Layout>
          <div className="pt-20 min-h-screen">
            <Skills />
          </div>
        </Layout>
      </motion.div>
    </ThemeProvider>
  );
};

export default SkillsPage;
