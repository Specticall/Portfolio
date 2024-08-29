import { formatTime } from "../../utils/utils";

export default function Footer() {
  return (
    <footer className="section">
      <div className="flex justify-between gap-8 mb-6 max-md:flex-col-reverse">
        <div className="flex gap-8 max-md:justify-between">
          <div>
            <p className="text-darker mb-1 text-[0.75rem]">VERSION</p>
            <p className="text-white">2024 Edition</p>
          </div>
          <div>
            <p className="text-darker mb-1 text-[0.75rem]">LOCAL TIME</p>
            <p className="text-white">{formatTime(new Date())}</p>
          </div>
        </div>
        <div className="max-md:block hidden h-[1px] w-full bg-border"></div>
        <div className="justify-self-end ">
          <p className="text-darker mb-1 text-[0.75rem] col-span-2">
            EXPERIENCES
          </p>
          <div className="flex gap-4">
            <p className="text-white mr-8">Curriculum Vitae</p>
            <p className="text-white">LinkedIn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
