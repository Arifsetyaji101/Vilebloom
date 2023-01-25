import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import HomeVb from "../components/organisms/HomeVb";

export default function Home() {
  return (
    <>
      <div className="page bg-blue-vb">
        <Navbar activeMenu="home" bgNavbar="navbar-blue-vb-bg" />
        <main className="content">
          <div className="mx-auto">
            <HomeVb />
          </div>
        </main>
        <Footer bgFooter="bg-blue-vb-80" />
      </div>
    </>
  );
}
