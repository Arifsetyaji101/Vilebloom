import Link from "next/link";

import cx from "classnames";

interface NavItemProps {
  href: string;
  title: string;
  active?: boolean;
}
export default function NavItem(props: NavItemProps) {
  const { href = "/", title, active } = props;
  const activeClass = cx({
    "nav-link alegreya-sc-100 text-lg gray-vb px-4": true,
    active: active,
  });
  return (
    <Link className={activeClass} aria-current="page" href={href}>
      {title}
    </Link>
  );
}
