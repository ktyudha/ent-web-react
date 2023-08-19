import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex items-center sm:justify-between ">
          <a
            href="https://ent.pens.ac.id"
            className="flex items-center justify-center mb-4 sm:mb-0"
          >
            <img
              src={process.env.PUBLIC_URL + "/logo/ENT (Gelap).svg"}
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
        <p className="block text-xs font-bold justify-center text-slate-500 text-center">
          © 2023 Webmaster - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
