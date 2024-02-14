"use client";
import { Button } from "@/components/ui/button";
import { MessageSquarePlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  const router = useRouter();
  const createNewChat = async () => {
    // all logic here
    router.push("/chat/abc");
  };
  return (
    <Button title="Create" variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;
