import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import ArticlePageVb from "../../components/organisms/ArticlePageVb";
import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { getDetailArticle } from "../../services/article";

export default function ArticlePage() {
  const { query, isReady } = useRouter();
  const [articleList, setArticleList] = useState({
    attributes: {
      title: "",
      content: "",
      publishedAt: "",
    },
  });

  const getArticleDetailAPI = useCallback(async (id: any) => {
    const data = await getDetailArticle(id);
    console.log("data: ", data);
    setArticleList(data);
  }, []);

  useEffect(() => {
    if (isReady) {
      console.log("router sudah tersedia", query.id);
      getArticleDetailAPI(query.id);
    } else {
      console.log("router belum tersedia");
    }
  }, [isReady]);
  return (
    <>
      <div className="page bg-blue-vb-80">
        <Navbar activeMenu="article" bgNavbar="navbar-blue-vb-80-bg" />
        <main className="content">
          <div className="mx-auto">
            <ArticlePageVb data={articleList} />
          </div>
        </main>
        <Footer bgFooter="bg-blue-vb" />
      </div>
    </>
  );
}
