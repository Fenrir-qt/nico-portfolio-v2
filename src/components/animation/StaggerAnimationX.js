const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        ease: "easeOut"
      },
    },
  };

  const card = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };


export { container, card }