import Image from "next/image";
import AboutVbLeft from "./AboutVbLeft";

export default function AboutVb() {
  return (
    <>
      <section className="about-vb pt-sm-5 pt-0 pb-3">
        <div className="container">
          <div className="row text-center text-lg-start">
            <AboutVbLeft />

            <div className="col-lg-6 text-center">
              <div className="home-vb-right">
                <Image
                  src="/assets/images/vilebloom-1.png"
                  width={180}
                  height={486}
                  alt="Keyboard"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
