import Image from "next/image";
import Link from "next/link";
import HomeVbLeft from "./HomeVbLeft";
import HomeVbRight from "./HomeVbRight";
export default function HomeVb() {
  return (
    <>
      <section className="home-vb pt-sm-5 pt-0 pb-5">
        <div className="container">
          <div className="row text-center text-lg-start">
            <HomeVbLeft />

            <div className="col-lg-2">
              <div className="home-vb-middle">
                <Image
                  src="/assets/images/vilebloom-2.png"
                  width={194}
                  height={500}
                  alt="Keyboard"
                  className="img-fluid"
                />
              </div>
            </div>

            <HomeVbRight />
          </div>
        </div>
      </section>
    </>
  );
}
