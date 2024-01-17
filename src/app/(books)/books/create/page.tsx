import getSesion from "@/libs/actions/getSession";
import { redirect } from "next/navigation";
import InputFile from "./(component)/InputFile";
const page = async () => {
  const session = await getSesion();
  if (!session) redirect("/");
  const userId = session.user.id;
  console.log(session.user.role);

  return (
    <div className="h-screen">
      <div className="h-full flex justify-center items-center">
        <InputFile userId={userId} />
      </div>
    </div>
  );
};

export default page;
