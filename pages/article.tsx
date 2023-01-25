import ArticleVb from "../components/organisms/ArticleVb";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

export default function Article() {
  return (
    <div className="page bg-blue-vb">
      <Navbar activeMenu="article" bgNavbar="navbar-blue-vb-bg" />
      <main className="content">
        <div className="mx-auto">
          <ArticleVb />
        </div>
      </main>
      <Footer bgFooter="bg-blue-vb-80" />
    </div>
  );
}
