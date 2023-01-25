import Footer from "../components/organisms/Footer";
import MessageVb from "../components/organisms/MessageVb";
import Navbar from "../components/organisms/Navbar";

export default function Message() {
  return (
    <>
      <div className="page bg-blue-vb-80">
        <Navbar activeMenu="message" bgNavbar="navbar-blue-vb-80-bg" />
        <main className="content">
          <div className="mx-auto">
            <MessageVb />
          </div>
        </main>
        <Footer bgFooter="bg-blue-vb" />
      </div>
    </>
  );
}
