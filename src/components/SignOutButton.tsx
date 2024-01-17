"use client";
import createSupabaseClient from "@/libs/supabase/client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const supabase = createSupabaseClient();
  const router = useRouter();
  const handlerSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    router.push("/");
    router.refresh();
  };
  return (
    <Button size="md" radius="lg" onClick={handlerSignOut}>
      Log out
    </Button>
  );
};

export default SignOutButton;
