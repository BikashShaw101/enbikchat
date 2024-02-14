import Logo from "./Logo";

import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";

async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="sticky z-50 top-0 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center  p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex flex-1  items-center justify-end space-x-4">
          {/**languageselect */}
          {session ? (
            <>
              <Link title="Chats" href={"/chat"} prefetch={false}>
                <MessageSquareIcon />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <>
              <Link href={"/pricing"}>Pricing</Link>
            </>
          )}

          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>
      {/** upgrade banner */}
    </header>
  );
}

export default Header;
