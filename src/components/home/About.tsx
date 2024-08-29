import TextReveal from "../components/TextReveal";

export default function About() {
  return (
    <section className="mt-48 section mb-32 max-md:mb-24">
      <div className="grid grid-cols-[3fr_2fr] gap-16 max-md:grid-cols-1">
        <TextReveal
          breakType="words"
          text="Bridging the gap between design and code to create products that is both enganging and maintainable."
          className="text-4xl text-white leading-[150%]"
        />
        <TextReveal
          breakType="words"
          text="I seamlessly blend visual aesthetics with functional code to create engaging, user-friendly experiences."
          className="text-lighter text-lg leading-[200%]"
        />
      </div>
    </section>
  );
}
