import Link from "next/link";
import React from "react";
import {
  HiOutlineBookOpen,
  HiOutlineHome,
  HiPlus,
  HiOutlineUser,
} from "react-icons/hi2";

export default function NavBar() {
  return (
    <nav role="navigation">
      <HiOutlineBookOpen className="hidden h-10 w-10 text-gray-500 md:block" />
      <Link href="/">
        <HiOutlineHome className="h-8 w-8" />
      </Link>
      <Link href="/">
        <HiPlus className="h-8 w-8" />
      </Link>
      <Link href="/">
        <HiOutlineUser className="h-8 w-8" />
      </Link>
    </nav>
  );
}
