export const popUp = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 1,
      staggerChildren: 1,
      staggerDirection: 1,
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 300,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 1,
      staggerChildren: 1,
      staggerDirection: 1,
      duration: 1,
      type: "spring",
      damping: 20,
      stiffness: 200,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
