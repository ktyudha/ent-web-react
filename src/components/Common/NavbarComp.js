import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <nav className="bg-slate-50 p-4 border fixed top-0 w-full z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-sky-900 font-bold text-lg">
              <img
                src={process.env.PUBLIC_URL + "/logoent.png"}
                alt="Logo-1"
                border="0"
                width="60px"
              />
            </div>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <ul className=" flex space-x-4">
              <li className=" py-1">
                <a
                  href="https://ent.pens.ac.id"
                  className="block py-2 px-4 text-sky-900 font-bold "
                >
                  Home
                </a>
              </li>
              <li className="py-1">
                <a
                  href="https://ent.pens.ac.id/#about-us"
                  className="block py-2 px-4 text-sky-900 font-bold"
                >
                  About
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="block py-2 px-4 text-sky-900 font-bold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={this.toggleMenu}
              className="text-white border rounded bg-sky-900 focus:outline-none hover:bg-teal-500"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 md:hidden ">
            <ul className="bg-white">
              <li className="bg-sky-900 rounded mb-1">
                <a
                  href="https://ent.pens.ac.id"
                  className="block py-2 px-4 text-white font-bold text-center hover:bg-teal-500"
                >
                  Home
                </a>
              </li>

              <li className="bg-sky-900 rounded mb-1">
                <a
                  href="https://ent.pens.ac.id/#about-us"
                  className="block py-2 px-4 text-white font-bold text-center hover:bg-teal-500"
                >
                  About
                </a>
              </li>
              <li className="bg-sky-900 rounded mb-1">
                <a
                  href="#"
                  className="block py-2 px-4 text-white font-bold text-center hover:bg-teal-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}
export default Navbar;
