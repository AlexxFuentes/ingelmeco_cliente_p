"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, MouseEvent } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e: MouseEvent | any) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav className="w-full flex flex-wrap items-center justify-between px-3 lg:px-10  py-1 bg-[#202020]">
      <div className="flex pt-2">
        <Link href="/">
          <Image
            className="cursor-pointer h-11 w-40"
            alt="Logo INGELMECO"
            src="/images/logo.webp"
            width={900}
            height={100}
            priority
          />
        </Link>
      </div>

      <div className="space-x-8 hidden w-full md:block md:w-auto">
        <Link href="/" className="font-medium text-white">
          Nuestros Productos
        </Link>
        <Link href="/Nosotros" className="font-medium text-white">
          Sobre Nosotros
        </Link>
      </div>

      <button
        type="button"
        className="ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={toggleMenu}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 h-screen z-20 w-3/5 bg-opacity-80 bg-[#1E1E1E] backdrop-blur"
        >
          <div className="h-screen flex flex-col justify-start p-4">
            <Link
              href="/"
              className="text-white font-bold text-1xl my-4"
            >
              Nuestros Productos
            </Link>
            <Link href="/Nosotros" className="text-white font-bold text-1xl my-4">
              Sobre Nosotros
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
