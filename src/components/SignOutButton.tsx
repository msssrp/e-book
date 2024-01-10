"use client";
import createSupabaseClient from "@/libs/supabase/client";
import { Button } from "@nextui-org/react";

const SignOutButton = () => {
  const supabase = createSupabaseClient();

  const handlerSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    location.reload();
  };
  return (
    <Button size="md" radius="lg" onClick={handlerSignOut}>
      Log out
    </Button>
  );
};

export default SignOutButton;
