import React from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import getSesion from "@/libs/actions/getSession";
import SignOutButton from "./SignOutButton";
const Navbar = async () => {
  const session = await getSesion();
  return (
    <NextNavbar className="bg-[#952124]">
      <NavbarBrand>
        <Link href={"/"}>
          <img
            src="https://img2.pic.in.th/pic/517c1d0e-4584-4b92-8337-781e0ad74378d4287fd729ffcb7f.jpeg"
            alt=""
            className="h-[3.5rem]"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="">
          {session ? (
            <>
              {session.user.email}
              <Link
                className="p-2 mr-2 ml-2 text-white border rounded-lg"
                href={"/books/create"}>
                create
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link href="/login" className="text-white">
              ลงทะเบียนเข้าใช้งาน
            </Link>
          )}
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
};

export default Navbar;
