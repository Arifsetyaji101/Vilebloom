import Link from "next/link";

interface FooterListProps {
  title: string;
  href: string;
}

export default function FooterList(props: FooterListProps) {
  const { title, href = "/" } = props;
  return (
    <Link
      className="gray-vb text-md meltow-100 px-2"
      aria-current="page"
      href={href}
    >
      {title}
    </Link>
  );
}
