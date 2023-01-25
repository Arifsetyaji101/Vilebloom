import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

interface NavbarProps {
  bgNavbar: "navbar-blue-vb-bg" | "navbar-blue-vb-80-bg";
  activeMenu: "home" | "about" | "article" | "message";
}

export default function Navbar(props: NavbarProps) {
  const { bgNavbar, activeMenu } = props;
  return (
    <>
      {/* navbar */}
      <header>
        <nav
          className={`navbar fixed-top navbar-expand-sm d-none d-sm-block ${bgNavbar}`}
        >
          <div className="container-fluid">
            <div
              className="navbar-mobile collapse navbar-collapse"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav justify-content-center align-items-center mx-auto">
                <NavItem title="Home" href="/" active={activeMenu === "home"} />
                <NavItem
                  title="About"
                  href="/about"
                  active={activeMenu === "about"}
                />
                <Link className="nav-link" href="/">
                  <Image
                    src="/logo-light.svg"
                    width={50}
                    height={50}
                    alt="Logo"
                  />
                </Link>
                <NavItem
                  title="Article"
                  href="/article"
                  active={activeMenu === "article"}
                />
                <NavItem
                  title="Message"
                  href="/message"
                  active={activeMenu === "message"}
                />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
