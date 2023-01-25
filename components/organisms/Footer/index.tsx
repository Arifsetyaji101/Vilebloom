import FooterList from "./FooterList";

interface FooterProps {
  bgFooter: "bg-blue-vb" | "bg-blue-vb-80";
}
export default function Footer(props: FooterProps) {
  const { bgFooter } = props;
  return (
    <footer
      className={bgFooter}
      style={{
        height: "100px",
      }}
      id="Contact"
    >
      <div className="container">
        <div className="footer-inner">
          <div className="meltow-200 title position-absolute display-base gray-vb d-none d-lg-block">
            Contact
          </div>
          <div className="footer-nav">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <FooterList title="Github" href="/" />
              <FooterList title="LinkedIn" href="/" />
              <FooterList title="Youtube" href="/" />
              <FooterList title="Email" href="/" />
              <FooterList title="instagram" href="/" />
              <FooterList title="Resume" href="/" />
              <FooterList title="Timeline" href="/" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
