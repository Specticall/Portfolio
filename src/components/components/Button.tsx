import { HTMLAttributes } from "react";
import { cn } from "../../utils/utils";

const variants = {
  main: "text-white bg-accent hover:bg-accent/80",
  secondary: "text-white bg-highlight hover:bg-highlight/80",
};

type Props = {
  variant: keyof typeof variants;
  href?: string;
};

export default function Button({
  variant,
  href,
  ...props
}: Props & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      onClick={(e) => {
        if (href) window.open(href, "_blank");
        if (props.onClick) props.onClick(e);
      }}
      className={cn(
        "rounded-full px-10 py-3 w-fit flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ",
        variants[variant],
        props.className
      )}
    ></button>
  );
}
