import { Button } from "./ui/button";

export default function Project({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <div className="border-accent border-2 p-5 rounded-sm">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
      <br />

      <a href={url} target="_blank">
        <Button className="w-full">Check it out</Button>
      </a>
    </div>
  );
}
