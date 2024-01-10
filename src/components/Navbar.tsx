import React from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Navbar = () => {
  return (
    <NextNavbar className="bg-[#952124]">
      <NavbarBrand> 
        <Link>
          <img
            src="https://img2.pic.in.th/pic/517c1d0e-4584-4b92-8337-781e0ad74378d4287fd729ffcb7f.jpeg"
            alt=""
            className="h-[3.5rem]"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Link href="#" className="text-white">
            ลงทะเบียนเข้าใช้งาน
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
};

export default Navbar;
