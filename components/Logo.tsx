import Shawcapital from "@logos/enbikchat.svg";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-52 h-14">
        <AspectRatio
          className="flex items-center justify-center"
          ratio={16 / 9}
        >
          <Image
            priority
            src={Shawcapital}
            alt="logo"
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
