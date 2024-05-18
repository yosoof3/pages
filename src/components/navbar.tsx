"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SwatchBook } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Socials from "./socials";

export function Logo({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  const { theme, systemTheme } = useTheme();
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    (image.current as HTMLImageElement).src = `/icons/yapcube-${theme}.svg`;
    if (theme == "system") {
      (
        image.current as HTMLImageElement
      ).src = `/icons/yapcube-${systemTheme}.svg`;
    } else {
      (image.current as HTMLImageElement).src = `/icons/yapcube-${theme}.svg`;
    }
  }, [theme, systemTheme]);

  return (
    <Image
      className={className}
      src={`/icons/yapcube-dark.svg`}
      width={size}
      height={size}
      alt=""
      ref={image}
    />
  );
}

export default function Navigation() {
  const { themes, setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between items-center pt-3 pb-1 mb-2">
      <div className="flex gap-2 items-center justify-center">
        <a href="/" className="flex gap-2 items-center">
          <Logo size={48} />
          <div className="flex flex-col leading-5">
            <p className="font-bold font">yusof</p>
            <p>master yapper</p>
          </div>
        </a>
      </div>
      <div className="flex gap-2 items-center">
        <Socials />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SwatchBook
              size="32"
              className="justify-self-center border-l-[2px] border-l-foreground pl-2"
            />
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>
              {themes.map((theme) => (
                <DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      </div>
    </div>
  );
}
