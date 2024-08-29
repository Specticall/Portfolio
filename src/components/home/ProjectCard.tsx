import { ReactNode } from "react";
import { cn } from "../../utils/utils";

type Props = {
  data: {
    img: string;
    title: string;
    badge?: string;
    content: string;
    role: string;
  };
  swap?: boolean;
  cta: ReactNode;
};

export default function ProjectCard({ data, swap, cta }: Props) {
  return (
    <article
      className={cn(
        "flex gap-12 p-6 bg-bg/50 border border-border rounded-md relative z-10 max-xl:flex-col max-xl:p-5",
        swap && "flex-row-reverse"
      )}
    >
      <div
        className={
          "row-span-3 min-h-[20rem] max-w-[30rem] w-full max-xl:max-w-full max-xl:max-h-[25rem] max-sm:h-[12.5rem] max-sm:min-h-0 "
        }
      >
        <img
          src={data.img}
          alt="Projects"
          className="h-full object-cover rounded-md w-full object-top max-sm:rounded-sm"
        />
      </div>
      <div className="flex flex-col justify-between p-4 max-sm:p-0">
        <div className="flex justify-between order-2 max-md:justify-center max-md:flex-col-reverse">
          <h2
            className={cn(
              "text-[clamp(2rem,5vw,2.75rem)] text-white max-w-[30rem] font-normal ",
              !data.badge && "max-w-full"
            )}
          >
            {data.title}
          </h2>
          {data.badge && (
            <p className="bg-gradient-to-br h-fit px-8 py-2 rounded-full from-[#272626] to-[#353434] border border-border text-white flex items-center justify-center text-nowrap max-xl:w-fit max-xl:mb-8">
              <i className="bx bx-trophy mr-2"></i>
              <span>{data.badge}</span>
            </p>
          )}
        </div>
        <p className="text-lighter leading-[200%] order-3 max-xl:mt-8">
          {data.content}
        </p>
        <div className="flex justify-between items-end text-sm order-4 max-xl:mt-16 max-sm:flex-col-reverse max-sm:items-start max-sm:gap-6 ">
          {cta}
          <p className="text-darker">ROLE - {data.role}</p>
        </div>
      </div>
    </article>
  );
}
