import moment from "moment";

interface ArticlePageVbProps {
  data: {
    attributes: {
      title: string;
      content: string;
      publishedAt: string;
    };
  };
}

export default function ArticlePageVb(props: ArticlePageVbProps) {
  const { data } = props;
  return (
    <>
      <section className="home-vb pt-sm-5 pt-0 pb-5">
        <div className="container">
          <div className="article-inner text-center">
            <div className="title-article display-base gray-vb meltow-300">
              {data.attributes.title}
            </div>
            <hr className="gray-vb border border-2 opacity-100 rounded-5 w-25 mx-auto" />
            <div className="time meltow-100 orange-vb-80 text-lg pb-3">
              ({moment(`${data.attributes.publishedAt}`).fromNow()}){" "}
              {moment(`${data.attributes.publishedAt}`).format("dddd")},{" "}
              {moment(`${data.attributes.publishedAt}`).format("LL")}
              <br />
              {moment(`${data.attributes.publishedAt}`).format("LTS")}
            </div>
            <div
              className="desc-article orange-vb-80 text-lg meltow-200"
              style={{ textAlign: "justify" }}
            >
              {data.attributes.content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
