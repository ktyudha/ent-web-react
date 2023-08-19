import { Navbar } from "flowbite-react";

export default function NavbarWithCTAButton() {
  return (
    <Navbar className="bg-hero  fixed w-full z-20 top-0 left-0  ">
      <nav className="bg-hero text-white fixed w-full z-20 top-0 left-0  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Navbar.Brand href="/" className="flex items-center">
            <img
              alt="ENT Logo"
              className="mr-3 h-6 sm:h-9"
              src={process.env.PUBLIC_URL + "/logo/ENT (Terang).svg"}
            />
            <span className="self-center whitespace-nowrap lg:text-xl md:text-md text-xs font-semibold text-white">
              EEPIS News and Network Team
            </span>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Navbar.Link href="/" className="md:text-lg text-md">
              <p className="text-white hover:text-yellow-700">Home</p>
            </Navbar.Link>
            <Navbar.Link href="/#about" className=" md:text-lg text-md">
              <p className="text-white hover:text-yellow-700">About</p>
            </Navbar.Link>
            <Navbar.Link href="/#division" className="md:text-lg text-md">
              <p className="text-white hover:text-yellow-700">Division</p>
            </Navbar.Link>
            <Navbar.Link href="/#team" className=" md:text-lg text-md">
              <p className="text-white  hover:text-yellow-700">Team</p>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </nav>
    </Navbar>
  );
}
