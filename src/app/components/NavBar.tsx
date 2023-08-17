import Link from "next/link";
import { ReactNode } from "react";
import {
  HiOutlineBookOpen,
  HiOutlineHome,
  HiPlus,
  HiOutlineUsers,
} from "react-icons/hi2";

interface NavItemProps {
  href: string;
  icon: ReactNode;
}

function NavItem({ href, icon }: NavItemProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-gray-800 md:h-12 md:w-12"
    >
      {icon}
    </Link>
  );
}

export default function NavBar() {
  return (
    <nav
      role="navigation"
      className="fixed inset-x-0 bottom-0 z-10 flex h-20 items-center justify-center gap-8 border-t border-gray-500 bg-gray-400 md:inset-y-0 md:left-0 md:right-auto md:h-full md:w-20 md:flex-col md:justify-start md:border-r md:py-6"
    >
      <HiOutlineBookOpen className="hidden h-10 w-10 text-gray-500 md:block" />

      <NavItem href="/" icon={<HiOutlineHome className="h-8 w-8" />} />
      <NavItem href="/" icon={<HiPlus className="h-8 w-8" />} />
      <NavItem href="/" icon={<HiOutlineUsers className="h-8 w-8" />} />
    </nav>
  );
}
