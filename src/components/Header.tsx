import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-10 pt-8 pb-4 font-barlow sm:px-16">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={124}
          height={24}
          priority
        />
      </Link>

      <nav>
        <ul className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white sm:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-white/90 sm:text-base"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
