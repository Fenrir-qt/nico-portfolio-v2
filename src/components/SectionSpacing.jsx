export default function Section({ id, children }) {
  return (
    <section id={id} className="py-20 px-5 md:px-0 md:max-w-175 xl:max-w-5xl w-full mx-auto">
      {children}
    </section>
  );
}