"use client";
import Buttons from "@/components/buttons";
import { Inter } from "next/font/google";

interface MentionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  image: string;
}

function Mention({ href, className, children, image }: MentionProps) {
  return (
    <a
      href={href}
      className={`${className} rounded-lg bg-accent inline-flex flex-row items-center align-middle pr-1 gap-1`}
    >
      <img className="rounded-md" alt="" src={image} width="24" height="24" />
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <article>
        <p>
          My name is yusof, and I am the founder of{" "}
          <Mention
            href="https://spaceness.one"
            image="https://avatars.githubusercontent.com/u/139939928?s=200&v=4"
            target="_blank"
          >
            spaceness
          </Mention>{" "}
          where we create things.
          <br />
          Im also a developer at{" "}
          <Mention
            image="https://codeberg.org/avatars/714b0c65202f695c9985dda4118c7a16149d88baa3fd1c606e3b330cc707b9be?size=200"
            href="https://codeberg.org/kitti"
          >
            kitti
          </Mention>
          , a development group where we create projects of the silly variety.
        </p>
      </article>
      <article>
        <h2>buttons</h2>
        <Buttons />
      </article>
    </main>
  );
}
