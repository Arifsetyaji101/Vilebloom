import ArticlePageVb from "../components/organisms/ArticlePageVb";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

export default function ArticlePage() {
  return (
    <>
      <div className="page bg-blue-vb-80">
        <Navbar activeMenu="article" bgNavbar="navbar-blue-vb-80-bg" />
        <main className="content">
          <div className="mx-auto">
            <ArticlePageVb />
          </div>
        </main>
        <Footer bgFooter="bg-blue-vb" />
      </div>
    </>
  );
}
