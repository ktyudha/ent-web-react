import { Navbar } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar container className="bg-hero  fixed w-full z-20 top-0 left-0  ">
      <nav class="bg-hero dark:bg-gray-900 fixed w-full z-20 top-0 left-0  ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Navbar.Brand href="/" class="flex items-center">
            <img
              alt="Flowbite React Logo"
              className="mr-3 h-6 sm:h-9"
              src="logo/ENT (Terang).svg"
            />
            <span className="self-center whitespace-nowrap lg:text-xl text-xs font-semibold text-white">
              EEPIS News and Network Team
            </span>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Navbar.Link href="#" className="text-white">
              <p>Home</p>
            </Navbar.Link>
            <Navbar.Link href="#" className="text-white">
              About
            </Navbar.Link>
            <Navbar.Link href="#" className="text-white">
              Services
            </Navbar.Link>
            <Navbar.Link href="#" className="text-white">
              Pricing
            </Navbar.Link>
            <Navbar.Link href="#" className="text-white">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </nav>
    </Navbar>
  );
}
