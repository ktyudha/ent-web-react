import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-slate-50">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex items-center sm:justify-between ">
            <a
              href="https://flowbite.com/"
              className="flex items-center justify-center mb-4 sm:mb-0"
            >
              <img
                src="logo/ENT (Gelap).svg"
                className="h-12 mr-3"
                alt="Flowbite Logo"
              />
            </a>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="https://www.youtube.com/@entcrews"
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-xl hover:text-yellow-700 text-slate-800 mx-3"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/entcrews"
                  className="mr-4 hover:underline md:mr-6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-xl hover:text-yellow-700 text-slate-800 mx-3"
                  />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-xs font-bold text-slate-500 sm:text-center">
            © 2023 All Rights Reserved
          </span>
        </div>
      </footer>

      // <footer classNameName="px-6 py-4 md:py-8 bg-slate-50 md:px-4">
      //   <div classNameName="sm:flex mx-auto max-w-7xl sm:items-center sm:justify-between">
      //     <div classNameName="mb-4 sm:mb-0 mx-auto sm:mx-0">
      //       <a classNameName="flex items-center justify-center">
      //         <img
      //           src={process.env.PUBLIC_URL + "/logoent2.png"}
      //           classNameName="lg:h-52 md:h-40 h-32 pt-6 bg-sky-100 rounded-2xl p-2"
      //           alt="Logo ENT"
      //         />
      //       </a>
      //     </div>
      //     <div classNameName="mt-4 text-center sm:mt-0 sm:text-left">
      //       <div classNameName="mb-4 space-x-4 text-center">
      //         <a
      //           href="#"
      //           classNameName="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500"
      //         >
      //           Home
      //         </a>
      //         <a
      //           href="#"
      //           classNameName="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500"
      //         >
      //           About
      //         </a>
      //         <a
      //           href="#"
      //           classNameName="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500"
      //         >
      //           Contact
      //         </a>
      //       </div>
      //       <div classNameName="mb-4">
      //         <a href="https://www.facebook.com" target="_blank">
      //           <FontAwesomeIcon
      //             icon={faFacebookF}
      //             classNameName="text-xl hover:text-yellow-700 text-slate-400 mx-3 md:mt-8 sm:mt-1"
      //           />
      //         </a>
      //         <a href="https://www.instagram.com/entcrews" target="_blank">
      //           <FontAwesomeIcon
      //             icon={faInstagram}
      //             classNameName="text-xl hover:text-yellow-700 text-slate-400 mx-3"
      //           />
      //         </a>
      //         <a href="mailto: ent@gmail.com" target="_blank">
      //           <FontAwesomeIcon
      //             icon={faSolidEnvelope}
      //             classNameName="text-xl hover:text-yellow-700 text-slate-400 mx-3"
      //           />
      //         </a>
      //         <a href="https://www.twitter.com/entcrews" target="_blank">
      //           <FontAwesomeIcon
      //             icon={faTwitter}
      //             classNameName="text-xl hover:text-yellow-700 text-slate-400 mx-3"
      //           />
      //         </a>
      //         <a href="https://www.youtube.com/@entcrews" target="_Blank">
      //           <FontAwesomeIcon
      //             icon={faYoutube}
      //             classNameName="text-xl hover:text-yellow-700 text-slate-400 mx-3"
      //           />
      //         </a>
      //       </div>
      //     </div>
      //     <div classNameName="flex flex-col items-center">
      //       {/* <h2 classNameName="my-2 font-semibold text-md">Location</h2> */}
      //       <iframe
      //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.691977074115!2d112.79156701477496!3d-7.2758470947483636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1675351583121!5m2!1sid!2sid"
      //         width="100%"
      //         height="168"
      //         style={{ border: 0 }}
      //         allowFullScreen=""
      //         loading="lazy"
      //         classNameName="rounded-xl"
      //         referrerPolicy="no-referrer-when-downgrade"
      //       ></iframe>
      //       <span classNameName="mt-4 text-center text-xs font-bold text-slate-400">
      //         @ 2023 EEPIS News and Network Team
      //       </span>
      //     </div>
      //   </div>
      // </footer>
    );
  }
}
export default Footer;
