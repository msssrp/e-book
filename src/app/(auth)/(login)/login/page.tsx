import createSupabaseServerClient from "@/libs/supabase/server";
import Login from "../(component)/Login";
import { redirect } from "next/navigation";
import getSesion from "@/libs/actions/getSession";
const page = async () => {
  const session = await getSesion();
  if (session) {
    redirect("/");
  }
  return (
    <>
      <Login />
    </>
  );
};

export default page;
