export default function HomeVbLeft() {
  return (
    <>
      <div className="col-lg-5 my-auto">
        <div
          className="home-vb-left"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h1 className="display-xl gray-vb meltow-300" data-aos="fade-down">
            Hi!,
            <br />
            I'am <span className="pink-vb">Vilebloom</span>
          </h1>
          <h5 className="gray-vb display-base meltow-200">
            a Mechanical Keyboard Keycaps
          </h5>
          <form
            action="http://www.mechsupply.co.uk/product/sa-vilebloom"
            target="_blank"
          >
            <button className="shadow py-2 px-3 bg-orange-vb border-0 mb-4 mb-lg-0 rounded-5 meltow-200 blue-vb">
              More Info
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
