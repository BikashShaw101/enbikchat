import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";

interface UserAvatarProps {
  name?: string | null;
  image?: string | null;
  className?: string | "";
}
export default function UserAvatar({
  name,
  image,
  className,
}: UserAvatarProps) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={name || "user"}
          width={50}
          height={40}
          className="rounded-full"
        />
      )}
      {!image && (
        <AvatarFallback className="dark:bg-white dark:text-black ">
          {name
            ?.split(" ")
            .map((c) => c[0])
            .join("")}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
