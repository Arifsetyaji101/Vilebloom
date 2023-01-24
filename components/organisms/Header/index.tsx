import Image from "next/image";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
export default function Header() {
  return (
    <>
      <section className="header">
        <div className="flex">
          <HeaderLeft />

          <div className="">
            <Image
              src="/assets/images/vilebloom-2.png"
              width={200}
              height={194}
              alt="Keyboard"
            />
          </div>

          <HeaderRight />
        </div>
      </section>
    </>
  );
}
