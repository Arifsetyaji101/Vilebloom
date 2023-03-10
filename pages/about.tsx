import Footer from "../components/organisms/Footer";
import Layout from "../components/organisms/Layout";
import Image from "next/image";
import Navbar from "../components/organisms/Navbar";
import AboutVb from "../components/organisms/AboutVb";

export default function About() {
  return (
    <>
      <div className="page bg-blue-vb-80">
        <Navbar activeMenu="about" bgNavbar="navbar-blue-vb-80-bg" />
        <main className="content">
          <div className="mx-auto">
            <AboutVb />
          </div>
        </main>
        <Footer bgFooter="bg-blue-vb" />
      </div>
    </>
  );
}
