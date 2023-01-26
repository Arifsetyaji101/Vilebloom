import type { NextPage } from "next";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import HomeVb from "../components/organisms/HomeVb";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
};
export default Home;
