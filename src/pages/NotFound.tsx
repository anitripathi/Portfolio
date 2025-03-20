
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/theme-provider";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <Layout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[85vh] flex items-center justify-center bg-background"
        >
          <div className="text-center max-w-md px-4">
            <h1 className="text-7xl font-bold mb-6 text-primary">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page not found</h2>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="group">
              <a href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </Layout>
    </ThemeProvider>
  );
};

export default NotFound;
