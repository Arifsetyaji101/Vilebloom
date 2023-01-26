import Image from "next/image";
import Link from "next/link";
import ArticleVbItem from "./ArticleVbItem";

export default function ArticleVb() {
  return (
    <>
      <section className="article-vb pt-sm-5 pt-0 pb-3">
        <div className="container">
          <div className="title meltow-200 title display-base gray-vb">
            Writings
          </div>
          <ArticleVbItem
            href="/article-page"
            time="Kamis, 26 Januari 2023 at 13:00"
            title="Hello World!"
            desc="Artikel yang akan kutulis ini tentang diriku"
          />
        </div>
      </section>
    </>
  );
}
