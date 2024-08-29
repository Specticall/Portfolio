import Button from "../components/Button";
import ProjectCard from "./ProjectCard";
import Project1 from "/project-1.png";
import Project2 from "/project-2.png";
import Project3 from "/project-3.png";

export default function RecentWork() {
  return (
    <section className="section relative">
      <p className="text-darker lighter mb-4">RECENT WORK (3)</p>
      <div className="w-full h-[1px] bg-border mb-12"></div>
      <div className="grid gap-12">
        <ProjectCard
          data={{
            img: Project1,
            badge: "4th Place",
            title: "Mental Health Application.",
            content:
              "I was able to achieve 4th place, defeating 100+ competitors at UGM’s annual event FINDIT by developing a fullstack web application that helps patients with mental health issues",
            role: "DESIGNER & DEVELOPER",
          }}
          cta={
            <Button variant="main" href={"https://wecan-ten.vercel.app/"}>
              Visit Live Site <i className="bx bx-right-arrow-alt text-lg"></i>
            </Button>
          }
        />
        <ProjectCard
          swap
          data={{
            img: Project2,
            badge: "1st Place",
            title: "AI Powered Customer Support.",
            content:
              "I secured 1st place in Technoscape's 36 Hour Hackathon after successfully building a customer support website powered by artifical intelligence",
            role: "DEVELOPER",
          }}
          cta={
            <Button
              variant="secondary"
              href={"https://github.com/Specticall/Technoscape"}
            >
              Visit GitHub <i className="bx bx-right-arrow-alt text-lg"></i>
            </Button>
          }
        />
        <ProjectCard
          data={{
            img: Project3,
            title: "E-Commerce Application.",
            content:
              "I developed a professional front-end for an ecommerce application as a side project. The front-end was built using modern web technologies, including React, Tailwind and TypeScript",
            role: "DEVELOPER",
          }}
          cta={
            <Button variant="main" href={"https://audiophile-fem.netlify.app/"}>
              Visit Live Site <i className="bx bx-right-arrow-alt text-lg"></i>
            </Button>
          }
        />
      </div>
      <div className="bg-accent w-[50rem] h-[40rem] absolute rounded-[100%] opacity-30 blur-[10rem] left-[0rem] top-[30rem] "></div>
      <div className="bg-highlight w-[50rem] h-[40rem] absolute rounded-[100%] opacity-20 blur-[10rem] left-[-30rem] top-[15rem]"></div>
    </section>
  );
}
