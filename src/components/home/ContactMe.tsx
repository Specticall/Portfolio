import TextReveal from "../components/TextReveal";

export default function ContactMe() {
  return (
    <section className="section mb-48 mt-48 flex flex-col items-center justify-center">
      <TextReveal
        breakType="characters"
        staggerDuration={0.01}
        className="text-[clamp(2.25rem,5vw,4rem)] max-sm:mb-2 leading-[120%] text-white text-center"
        text="Let's work together."
      />
      <TextReveal
        breakType="words"
        staggerDuration={0.01}
        className="text-center text-lighter mb-6 text-lg"
        text=" Let’s build products that will captivate your audience"
      />

      <div className="w-full h-[1px] bg-border mt-4 mb-4"></div>
      <div className="flex items-center justify-center gap-6 mt-8 max-md:flex-col">
        <p className="bg-gradient-to-br h-fit px-8 py-2 rounded-full from-[#272626] to-[#353434] border border-border text-white flex items-center justify-center">
          <i className="bx bx-envelope mr-2"></i>
          <span>josephyusmita@gmail.com</span>
        </p>
        <p className="bg-gradient-to-br h-fit px-8 py-2 rounded-full from-[#272626] to-[#353434] border border-border text-white flex items-center justify-center">
          <i className="bx bx-phone mr-2"></i>
          <span>0812 1024 8515</span>
        </p>
      </div>
    </section>
  );
}
