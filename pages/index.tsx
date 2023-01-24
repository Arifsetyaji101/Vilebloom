import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/organisms/Navbar";
import Layout from "../components/organisms/Layout";
import Header from "../components/organisms/Header";

export default function Home() {
  return (
    <>
      <Layout bgColor="blue-vb">
        <Header />
      </Layout>
    </>
  );
}
