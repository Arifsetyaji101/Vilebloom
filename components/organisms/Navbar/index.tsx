import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <>
      {/* navbar */}
      <header>
        <nav className="bg-blue-vb meltow-100 border-gray-200 px-2 sm:px-4 py-2.5">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Image
                src="/burger.svg"
                height={24}
                width={24}
                alt="icon-burger"
              />
            </button>
            <div
              className="hidden w-full md:block md:w-auto mx-auto"
              id="navbar-default"
            >
              <ul className="m-auto flex justify-center items-center border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NavItem title="Home" href="/" />
                <NavItem title="About" href="/about" />
                <li>
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo-light.svg"
                      height={45}
                      width={45}
                      alt="Logo"
                    />
                  </Link>
                </li>
                <NavItem title="Article" href="/article" />
                <NavItem title="Contact" href="/contact" />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
