import Project from "@/components/project";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactHTMLElement } from "react";

function Mention({
  href,
  className,
  children,
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`${className} p-1 rounded-lg bg-accent transition-all hover:p-1.5`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <h2 className="text-4xl font-bold mt-3">hello</h2>
      <p>
        My name is yusof, and I am the founder of{" "}
        <Mention href="https://spaceness.one">spaceness</Mention> where we just
        create things.
        <br />
        Im also a developer at{" "}
        <Mention href="https://codeberg.org/kitti">kitti</Mention>, a
        development group where we create projects of the silly variety.
      </p>
      <h2 className="text-4xl font-bold mt-3">projects</h2>
      <br />
      <div className="grid grid-cols-1 grid-rows-1 gap-3">
        <Project
          title="Stardust"
          description="Stardust is the platform for streaming isolated desktop containers."
          url="https://stardust.spaceness.one"
        />
      </div>
    </main>
  );
}
