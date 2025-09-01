const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { ease: "easeIn" } },
  };


export { container, card }