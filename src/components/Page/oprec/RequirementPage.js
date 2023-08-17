import React, { useState } from "react";

import axiosInstance from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
// import { Carousel } from "flowbite";
const RequirementPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    nrp: "",
  });

  // Handle Input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        "/cekrecruitment",
        formData,
        {}
      );
      console.log("Response:", response.data.id);
      if (response.status === 200) {
        navigate("/participant/" + response.data.id);
      }
      // You can handle the response data here
    } catch (error) {
      alert("Mohon maaf data Anda tidak terdaftar");

      console.error("Error:", error);
    }
  };

  return (
    <div>
      <br />
      <br />

      {/* <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>

          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>

          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div> */}
      <div className="mt-8 lg:mt-16">
        <div className="m-4 lg:m-0">
          <div className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-lg font-bold mb-4 text-center">
              {" "}
              APAKAH SUDAH TERDAFTAR?
            </h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white px-8 pt-6 pb-8"
            >
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  autoComplete="off"
                  className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your name..."
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="nrp">
                  NRP
                </label>
                <input
                  autoComplete="off"
                  className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="nrp"
                  name="nrp"
                  value={formData.nrp}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your name..."
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 mt-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="">Ini Carousel</div>
        </div>
      </div>
    </div>
  );
};
export default RequirementPage;
