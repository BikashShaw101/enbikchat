import Shawcapital from "@logos/shawcapital.svg";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"}>
      <div>
        <AspectRatio
          className="flex items-center justify-center"
          ratio={16 / 9}
        >
          <Image
            priority
            src={Shawcapital}
            alt="logo"
            className="rounded-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
