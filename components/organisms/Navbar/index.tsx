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

        {/* Navbar Mobile */}
        <nav className="navbar navbar-expand-lg d-sm-none d-sm-block fixed-top">
          <div
            className="w-100 d-flex justify-content-center align-items-center alert alert-light alert-dismissible fade show"
            role="alert"
            style={{
              height: 40,
            }}
          >
            Click Logo for Menu!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              style={{
                height: 0,
              }}
            ></button>
          </div>

          <div className="container">
            <button
              className="navbar-toggler border-0 mx-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "transparent" }}
            >
              <Image src="/logo-light.svg" width={50} height={50} alt="Logo" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav text-center mb-2 mb-lg-0">
                <NavItem title="Home" href="/" active={activeMenu === "home"} />
                <NavItem
                  title="About"
                  href="/about"
                  active={activeMenu === "about"}
                />
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
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
