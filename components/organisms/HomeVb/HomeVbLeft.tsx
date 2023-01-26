import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const MeltowSan300 = localFont({
  src: "../../../public/meltow-font/MeltowSan300-Rust.woff2",
});

export default function HomeVbLeft() {
  return (
    <>
      <div className="col-lg-5 my-auto">
        <div className="home-vb-left">
          <div className={MeltowSan300.className}>
            <h1 className="display-xl gray-vb">
              Hi!,
              <br />
              I'am <span className="pink-vb">Vilebloom</span>
            </h1>
          </div>
          <h5 className="gray-vb display-base meltow-200">
            a Mechanical Keyboard Keycaps
          </h5>
          <form
            action="http://www.mechsupply.co.uk/product/sa-vilebloom"
            target="_blank"
          >
            <button className="py-2 px-3 bg-orange-vb border-0 mb-4 mb-lg-0 rounded-5 meltow-200 blue-vb">
              More Info
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
