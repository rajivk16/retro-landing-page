import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="min-h-screen flex items-center justify-center py-20"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    variants={sectionVariants}
  >
    <div className="text-center space-y-4 p-8 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg">
      <h2 className="text-3xl font-retro text-gradient">{title}</h2>
      <div className="text-xl">{children}</div>
    </div>
  </motion.section>
);

export default Section;
