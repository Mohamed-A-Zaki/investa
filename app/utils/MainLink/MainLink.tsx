import Link from "next/link";

export type MainLinkProps = {
  id: number;
  name: string;
  href: string;
  className?: string;
};
export default function MainLink({ id, name, href, className ="" }: MainLinkProps) {
  return (
    <Link
      key={id}
      href={href}
      className={`p-2 text-lg rounded-lg transition duration-500 hover:bg-gray-100 ${className}`}
    >
      {name}
    </Link>
  );
}
