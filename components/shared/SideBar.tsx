"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignedIn,SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            alt="logo"
            src="/assets/images/logo-text.svg"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0,6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group
                        ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                            : "text-gray-700"
                        }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              </ul>

              <ul>
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group
                        ${
                          isActive
                            ? "bg-purple-gradient text-white"
                            : "text-gray-700"
                        }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-left cursor-pointer gap-2 p-4">
                <UserButton showName/>
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-gradient-to-r from-blue-500 to-blue-700 bg-cover">
                <Link href="/sign-in">Login</Link>
            </Button>


          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
