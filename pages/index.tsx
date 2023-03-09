import type { NextPage } from "next";

import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import HomeVb from "../components/organisms/HomeVb";
import { useEffect } from "react";

const Home: NextPage = () => {
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
