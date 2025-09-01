  const container = {
    hidden: {},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const card = {
    hidden: { opacity: 0},
    show: { opacity: 1},
  };

export { container, card }