import { motion, useInView } from "framer-motion";
import { cn } from "../../utils/utils";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  breakType?: "words" | "characters";
  staggerDuration?: number;
};

export default function TextReveal({
  text,
  className,
  breakType,
  staggerDuration = 0.01,
}: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={isInView ? "reveal" : "hidden"}
      transition={{ staggerChildren: staggerDuration }}
      className={cn("inline", className)}
    >
      {text.split(breakType === "words" ? " " : "").map((char, i) => {
        return (
          <>
            <span className="overflow-hidden inline-block">
              <motion.span
                className="inline-block whitespace-break-spaces "
                key={i}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { y: 100 },
                  reveal: { y: 0 },
                }}
              >
                {char}
              </motion.span>
            </span>
            {breakType === "words" && (
              <span className="w-2 inline-block"></span>
            )}
          </>
        );
      })}
    </motion.p>
  );
}
