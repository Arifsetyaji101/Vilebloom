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
            href="/"
            time="Senin, 1 Januari 2023 at 12:00"
            title="Pertama kali aku menulis sebuah artikel di website yang aku
                  kembangkan sendiri"
            desc="Artikel yang akan kutulis ini tentang diriku"
          />
          <ArticleVbItem
            href="/"
            time="Senin, 1 Januari 2023 at 12:00"
            title="Pertama kali aku menulis sebuah artikel di website yang aku
                  kembangkan sendiri"
            desc="Artikel yang akan kutulis ini tentang diriku"
          />
          <ArticleVbItem
            href="/"
            time="Senin, 1 Januari 2023 at 12:00"
            title="Pertama kali aku menulis sebuah artikel di website yang aku
                  kembangkan sendiri"
            desc="Artikel yang akan kutulis ini tentang diriku"
          />
        </div>
      </section>
    </>
  );
}
