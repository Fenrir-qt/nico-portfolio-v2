  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
  };

export { container, card }