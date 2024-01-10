import { NextResponse } from "next/server";
import createSupabaseServerClient from "@/libs/supabase/server";
import getSesion from "@/libs/actions/getSession";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  const next = "/";
  const session = await getSesion();
  if (session) {
    return NextResponse.redirect(`${origin}${next}`);
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
