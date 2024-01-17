"use client";
import React, { ChangeEvent } from "react";
import createSupabaseClient from "@/libs/supabase/client";
import { createProps } from "@/type";
const InputFile: React.FC<createProps> = ({ userId }) => {
  const supabase = createSupabaseClient();

  const handlerUploads = async (e: ChangeEvent<HTMLInputElement>) => {
    let file;
    if (e.target.files) file = e.target.files[0];

    const { data, error } = await supabase.storage
      .from("book-pdf")
      .upload(userId + "/" + "post" + "/" + file?.name, file as File);
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };
  return <input type="file" onChange={(e) => handlerUploads(e)} />;
};

export default InputFile;
