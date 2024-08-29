import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "../components/TextReveal";

export default function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const subtleY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref}>
      <section className="section relative pt-48 max-md:pt-48 pb-72 max-sm:pb-48">
        <motion.div style={{ y: heroY }} className="flex flex-col items-center">
          <motion.div className="flex items-center gap-4 mb-8">
            <p className="text-lighter">Designer</p>
            <div className="h-[1px] w-16 bg-lighter/50"></div>
            <p className="text-lighter">Developer</p>
          </motion.div>
          <TextReveal
            staggerDuration={0.05}
            breakType="words"
            text="Joseph Christian Yusmita."
            className="inline-block text-white font-normal text-[clamp(5rem,10vw,7rem)] text-center  leading-[100%] max-w-[50rem] relative z-10"
          />
        </motion.div>

        <motion.div
          className="bg-accent w-[50rem] h-[40rem] absolute rounded-[100%] opacity-40 blur-[10rem] top-[-20rem] right-[-12rem]"
          style={{ y: subtleY }}
        ></motion.div>
        <motion.div
          style={{ y: subtleY }}
          className="bg-highlight w-[50rem] h-[40rem] absolute rounded-[100%] opacity-30 blur-[10rem] top-[-32rem] right-[12rem]"
        ></motion.div>
      </section>
      <motion.div className="left-0 right-0 h-[40rem] absolute top-[40rem]">
        <div className="bg-bg z-10 w-screen h-[25rem] max-md:scale-[200%] scale-[150%] translate-y-[10rem] absolute rounded-t-[100%] left-0 right-0"></div>
        <div className="bg-accent w-screen h-[20rem] absolute rounded-[100%] opacity-40 blur-[10rem] left-0 right-0"></div>
      </motion.div>
    </div>
  );
}
