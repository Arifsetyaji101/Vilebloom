import { ArticleListTypes } from "../../../services/data-types";
import ArticleVbItem from "./ArticleVbItem";
import { useCallback, useEffect, useState } from "react";
import { getArticle } from "../../../services/article";

export default function ArticleVb() {
  const [articleList, setArticleList] = useState([]);
  const getFeatureArticleList = useCallback(async () => {
    const data = await getArticle();
    setArticleList(data);
  }, [getArticle]);
  useEffect(() => {
    getFeatureArticleList();
  }, []);
  return (
    <>
      <section className="article-vb pt-sm-5 pt-0 pb-3">
        <div className="container">
          <div className="title meltow-200 title display-base gray-vb">
            Writings
          </div>
          {articleList.map((item: ArticleListTypes) => {
            return (
              <ArticleVbItem
                key={item.id}
                title={item.attributes.title}
                time={item.attributes.publishedAt}
                id={item.id}
                desc={item.attributes.content}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
