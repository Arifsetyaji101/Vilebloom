import Image from "next/image";
import Link from "next/link";

interface ArticleVbItemProps {
  href: string;
  time: string;
  title: string;
  desc: string;
}

export default function ArticleVbItem(props: ArticleVbItemProps) {
  const { href = "/", time, title, desc } = props;
  return (
    <Link href={href}>
      <div className="article-card bg-blue-vb-80 p-2 rounded-4 mt-3 d-flex align-items-center">
        <div className="article-inner">
          <div className="time alegreya-sc-100 orange-vb-80 text-lg">
            {time}
          </div>
          <div className="title-article display-base gray-vb alegreya-sc-300">
            {title}
          </div>
          <div className="desc-article orange-vb-80 text-lg alegreya-sc-200">
            {desc}
          </div>
        </div>
        <div className="arrow ms-auto pe-4 d-none d-sm-block">
          <Image src="/arrow.svg" height={30} width={30} alt="arrow-icon" />
        </div>
      </div>
    </Link>
  );
}
