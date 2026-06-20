"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex w-full items-center justify-between px-10 pt-8 pb-4 font-barlow sm:px-16">
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={124} height={24} priority />
      </Link>

      <nav className="hidden items-center gap-6 md:flex md:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="rounded-full bg-white px-5 py-2 text-base font-medium text-blue-600 transition-colors hover:bg-white/90"
        >
          Contact
        </Link>
      </nav>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="text-white md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute right-10 top-full z-20 flex w-56 flex-col items-center gap-5 rounded-2xl bg-white p-8 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-900 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-blue-600 px-6 py-2 text-lg font-medium text-white transition-colors hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
