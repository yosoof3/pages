import {
  SimpleIcon,
  siCodeberg,
  siDiscord,
  siFirefish,
  siGithub,
  siNixos,
} from "simple-icons";

export default function Socials() {
  const socials: {
    name: string;
    icon: SimpleIcon;
    href: string;
  }[] = [
    {
      name: "@yosoof3",
      icon: siGithub,
      href: "https://github.com/yosoof3",
    },
    {
      name: "@yosoof",
      icon: siCodeberg,
      href: "https://codeberg.org/yosoof",
    },
    {
      name: "github:yosoof3/commafolders",
      icon: siNixos,
      href: "https://github.com/yosoof3/commafolders",
    },
    {
      name: "@yosoof",
      icon: siDiscord,
      href: "https://discord.com/users/1209715386489114645",
    },
    {
      name: "@yusof@silly.support",
      icon: siFirefish,
      href: "https://silly.support/@yusof",
    },
  ];

  const iconSize = 24;

  return (
    <div className="flex flex-row gap-2 items-center">
      {socials.map((social, index) => {
        return (
          <a
            key={`${social.name} ${index}`}
            href={social.href}
            title={`${social.name} on ${social.icon.title}`}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: social.icon.svg
                  .replace(
                    `role="img"`,
                    `role="none" width="${iconSize}" height="${iconSize}" class="social"`
                  )
                  .replace(new RegExp("<title>.*</title>"), ""),
              }}
            ></span>
          </a>
        );
      })}
    </div>
  );
}
