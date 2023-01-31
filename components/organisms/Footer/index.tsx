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
        height: "80px",
      }}
    >
      <div className="container">
        <div className="footer-inner">
          <div className="meltow-200 title position-absolute display-base gray-vb d-none d-lg-block">
            Contact
          </div>
          <div className="footer-nav">
            <div className="d-flex flex-wrap justify-content-md-center align-items-md-center">
              <FooterList
                title="Github"
                href="https://github.com/Arifsetyaji101"
              />
              <FooterList
                title="LinkedIn"
                href="https://www.linkedin.com/in/arifsetyaji101"
              />
              <FooterList
                title="Youtube"
                href="https://www.youtube.com/@arifsetyaji62"
              />
              <FooterList
                title="Email"
                href="mailto:arifsetyaji101@gmail.com"
              />
              <FooterList
                title="instagram"
                href="https://www.instagram.com/arifsetyaji_"
              />
              <FooterList title="Resume" href="#" />
              <FooterList title="Timeline" href="#" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
