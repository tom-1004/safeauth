"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <nav className={`${scrolling ? "hero shadow-md" : ""}`}>
      <div className="relative max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/assets/safeauth-logo.png"}
            alt="logo"
            height={150}
            width={150}
          />
        </Link>
        <div className="hidden md:flex items-center gap-10 text-white text-sm">
          <Link href={"/node-sync"}>Node Sync</Link>
          <Link href={"/developers"}>Developers</Link>
          <Link href={"/connection-sync"} className="button-gradient rounded-full px-8 py-4">
            Connect Wallet
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            type="button"
            onClick={() => setIsMenu(!isMenu)}
            className="text-white text-[23px]"
          >
            {isMenu ? <IoClose /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>
      {/* Sidebar */}
      {isMenu && (
        <div className="md:hidden absolute flex flex-col items-center py-8 px-8 space-y-10 hero sm:w-auto sm:self-center right-0 left-0 h-screen drop-shadow-md animate__animated animate__fadeInDown">
          <Link onClick={() => setIsMenu(false)} href={"/node-sync"} className="text-white text-xl font-medium hover:translate-x-2">
            Node Sync
          </Link>
          <Link onClick={() => setIsMenu(false)} href={"/developers"} className="text-white text-xl font-medium">
            Developers
          </Link>
          <Link onClick={() => setIsMenu(false)} href={"/connection-sync"} className="button-gradient text-white text-xl font-medium rounded-full px-8 py-4">
            Connect Wallet
          </Link>{" "}
        </div>
      )}
    </nav>
  );
};

export default Header;
