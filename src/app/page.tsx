"use client";

import { Icon } from "@iconify/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <article>
        <h2 className="text-4xl font-bold mt-3">hello</h2>
        <p>
          My name is yusof, and I am the founder of{" "}
          <a
            href="https://spaceness.one"
            target="_blank"
            className={`${inter.className} inline-flex gap-1 text-sm items-center font-bold`}
          >
            <Icon
              icon="streamline:galaxy-2"
              width="24"
              className="align-middle"
            />
            spaceness
          </a>{" "}
          where we create things.
          <br />
          Im also a developer at{" "}
          <Mention href="https://codeberg.org/kitti">kitti</Mention>, a
          development group where we create projects of the silly variety.
        </p>
      </article>
      <article></article>
    </main>
  );
}
