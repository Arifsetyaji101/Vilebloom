import Link from "next/link";
import { title } from "process";

interface NavItemProps {
  href: string;
  title: string;
}
export default function NavItem(props: NavItemProps) {
  const { href = "/", title } = props;
  return (
    <li>
      <Link
        href={href}
        className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 text-gray-vb dark:text-gray-vb"
        aria-current="page"
      >
        {title}
      </Link>
    </li>
  );
}
