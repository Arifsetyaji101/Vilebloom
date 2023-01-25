import Link from "next/link";

interface FooterListProps {
  title: string;
  href: string;
}

export default function FooterList(props: FooterListProps) {
  const { title, href = "/" } = props;
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="gray-vb text-md alegreya-sc-100 px-2"
      aria-current="page"
      href={href}
    >
      {title}
    </Link>
  );
}
