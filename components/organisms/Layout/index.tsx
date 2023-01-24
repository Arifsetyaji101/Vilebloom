import { ReactNode } from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
  bgColor:
    | "blue-vb"
    | "purple-vb"
    | "pink-vb"
    | "orange-vb"
    | "gray-vb"
    | "blue-vb-80"
    | "purple-vb-80"
    | "pink-vb-80"
    | "orange-vb-80"
    | "neutral";
}

export default function Layout(props: LayoutProps) {
  const { children, bgColor } = props;
  return (
    <>
      <div className="page">
        <Navbar />
        <main className={`content bg-${bgColor}`}>
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
      ;
    </>
  );
}
