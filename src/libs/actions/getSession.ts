import createSupabaseServerClient from "../supabase/server";

export default async function getSesion() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}
