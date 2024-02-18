"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;
    setLoading(true);
    //push a document into firebase firestore db
    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_session"),
      {
        price: "",
        success_url:window.location.origin,
        cancel_url:window.location.origin
      }
    );
    // .. stripe extension on firebse will create a checkout session
  };
  return (
    <div className="flex flex-col space-y-2">
      {/** if subscrbed show me the subscribed */}
      <Button
        onClick={() => createCheckoutSession()}
        className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-within:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor:pointer disabled:opacity-80 disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default"
      >
        sign up
      </Button>
    </div>
  );
}

export default CheckoutButton;
