import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faSolidEnvelope } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer className="px-6 py-4 md:py-8 bg-slate-50 md:px-4">
        <div className="sm:flex mx-auto max-w-7xl sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0 mx-auto sm:mx-0">
            <a className="flex items-center justify-center">
              <img
                src={process.env.PUBLIC_URL + "/logoent2.png"}
                className="lg:h-52 md:h-40 h-32 pt-6 bg-sky-100 rounded-2xl p-2"
                alt="Logo ENT"
              />
            </a>
          </div>
          <div className="mt-4 text-center sm:mt-0 sm:text-left">
            <div className="mb-4 space-x-4 text-center">
              <a
                href="#"
                className="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-500 font-bold text-xs md:text-sm hover:text-sky-500"
              >
                Contact
              </a>
            </div>
            <div className="mb-4">
              <a href="https://www.facebook.com" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-xl hover:text-yellow-700 text-slate-400 mx-3 md:mt-8 sm:mt-1"
                />
              </a>
              <a href="https://www.instagram.com/entcrews" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl hover:text-yellow-700 text-slate-400 mx-3"
                />
              </a>
              <a href="mailto: ent@gmail.com" target="_blank">
                <FontAwesomeIcon
                  icon={faSolidEnvelope}
                  className="text-xl hover:text-yellow-700 text-slate-400 mx-3"
                />
              </a>
              <a href="https://www.twitter.com/entcrews" target="_blank">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-xl hover:text-yellow-700 text-slate-400 mx-3"
                />
              </a>
              <a href="https://www.youtube.com/@entcrews" target="_Blank">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-xl hover:text-yellow-700 text-slate-400 mx-3"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* <h2 className="my-2 font-semibold text-md">Location</h2> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.691977074115!2d112.79156701477496!3d-7.2758470947483636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sid!2sid!4v1675351583121!5m2!1sid!2sid"
              width="100%"
              height="168"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <span className="mt-4 text-center text-xs font-bold text-slate-400">
              @ 2023 EEPIS News and Network Team
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;