import { motion } from 'framer-motion';
const variants = {
  pageInitial: { opacity: 0 },
  pageAnimate: { opacity: 1 },
};

interface FadeWrapperProps {
  children: any;
  keyOptional?: any;
}

const FadeWrapper = ({ children, keyOptional }: FadeWrapperProps) => {
  return (
    <motion.div
      initial="pageInitial"
      transition={{ duration: 0.5 }}
      animate="pageAnimate"
      variants={variants}
      key={keyOptional}
    >
      {children}
    </motion.div>
  );
};

export default FadeWrapper;
