import aa from "./aa.png";
import charlie from "./charlie.png";
import sillyfish from "./sillyfish.png";
import spaceness from "./spaceness.png";
import yusof from "./yusof.png";
import stardust from "./stardust.png";
import tgt from "./tgt.png";
import bongo from "./bongo.png";
import kitti from "./kitti.png";
import { StaticImageData } from "next/image";

interface ButtonProps {
  url: string;
  button: StaticImageData;
}
export function Button(button: ButtonProps) {
  return (
    <a key={button.url} href={button.url}>
      <img
        className="rounded-sm transition-all hover:scale-125"
        src={button.button.src}
        alt={button.url}
        width="128"
      />
    </a>
  );
}

export default function Buttons() {
  return (
    <div>
      <h3>people</h3>
      <div className="grid grid-cols-6 grid-rows-1 gap-1 py-2">
        <Button url="https://yapping.monster" button={yusof} />
        <Button url="https://charlie.downgraded.uk" button={charlie} />
        <Button url="https://incognitotgt.me" button={tgt} />
        <Button url="https://aagaming.me" button={aa} />
        <Button url="https://github.com/ca-tay" button={bongo} />
      </div>
      <h3>other</h3>
      <div className="grid grid-cols-6 grid-rows-2 gap-1 py-2">
        <Button url="https://spaceness.one" button={spaceness} />
        <Button url="https://codeberg.org/kitti" button={kitti} />
        <Button url="https://stardust.spaceness.one" button={stardust} />
        <Button url="https://silly.support" button={sillyfish} />
      </div>
    </div>
  );
}
