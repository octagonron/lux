import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ScrollToSectionProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link";
}

export default function ScrollToSection({ 
  targetId, 
  children, 
  className = "", 
  variant = "default" 
}: ScrollToSectionProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Button 
        onClick={handleClick} 
        variant={variant}
        className={className}
      >
        {children}
      </Button>
    </motion.div>
  );
}
