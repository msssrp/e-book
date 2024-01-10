"use client";
import createSupabaseClient from "@/libs/supabase/client";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  const supabase = createSupabaseClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handlerSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      router.push("/auth/callback");
      router.refresh();
      console.log(data);
    }
  };
  return (
    <div className="w-full h-[850px] flex items-center justify-center mt-[-120px]">
      <div className="w-[340px] md:w-[500px]">
        <div className="w-full flex flex-col mb-5">
          <h1 className="font-bold text-[26px] mb-4">
            ลงทะเบียนเข้าใช้งานระบบ
          </h1>
          <p className="text-[14px]">
            ลงชื่อใช้งานระบบด้วยชื่อผู้ใช้ที่ได้มีการลงทะเบียนไว้ :
          </p>
        </div>
        <form
          onSubmit={handlerSignIn}
          className="flex flex-col w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Input
            size="md"
            type="email"
            label="Email"
            className="mb-2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            size="md"
            type="password"
            label="Password"
            className="mb-3"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          {error ? <div className="mb-3 mt-2 text-red-500">{error}</div> : null}
          <button
            type="submit"
            className="p-3 text-white bg-[#962825] rounded-sm">
            ลงชื่อเข้าใช้งานในระบบ
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
