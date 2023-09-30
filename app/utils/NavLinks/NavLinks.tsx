import Link from "next/link";
import { nav_links } from "@/app/constants";

export default function NavLinks() {
  return (
    <div className="hidden md:block">
      {nav_links.map(({ id, name, href }) => (
        <Link
          key={id}
          href={href}
          className="p-2 mx-2 text-lg rounded-lg transition duration-500 hover:bg-gray-100"
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
