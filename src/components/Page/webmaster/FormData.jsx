import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import backgroundImage from "../../../asset/pattern3.png";

const Login = () => {
  //   const navigate = useNavigate();
  const [formData, setFormData] = useState({
    url_github: "",
    name: "",
    email: "",
    nrp: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      //   const response = await axios.post(
      //     "https://cirt.pens.ac.id/api/api/challange",
      //     formData
      //   );

      //   if (response.status === 200) {
      //     navigate("/challange");
      //   }
    } catch (error) {
      alert("Mohon maaf data anda sudah terdaftar.");
      console.error("Error:", error);
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post(
  //         "https://cirt.pens.ac.id/api/api/auth/login",
  //         formData
  //       );
  //       const data = response.data;
  //       localStorage.setItem("token", "Bearer " + data.token);
  //       navigate("/challange");
  //     } catch (error) {
  //       alert("Mohon maaf data Anda tidak terdaftar");

  //       console.error("Error:", error);
  //     }
  //   };
  return (
    <div>
      <div
        className="h-screen pt-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="mt-8">
          <div className="m-4 lg:m-0">
            <div className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white shadow-md rounded-3xl px-6 pt-6 pb-2">
              <h2 className="md:text-2xl text-lg font-bold mb-4 text-center">
                Webmaster
              </h2>
              <form
                onSubmit={handleSubmit}
                className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white px-8 pt-6 pb-8"
              >
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="url_github"
                  >
                    Url Github
                  </label>
                  <input
                    autoComplete="off"
                    className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="url_github"
                    name="url_github"
                    value={formData.url_github}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your Url Github Repository ..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    autoComplete="off"
                    className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name ..."
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Net ID
                  </label>
                  <input
                    autoComplete="off"
                    className="text-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your Net ID ..."
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
                    placeholder="Enter your NRP ..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 mt-2 w-full bg-teal-500 text-white rounded-md hover:bg-blue-600"
                >
                  <span className="font-bold">Submit</span>
                </button>
                <p className="mt-4">
                  <Link to={"/challange/list"} className="text-sm md:text-md">
                    <span className="text-yellow-400 text-sm md:text-md font-bold hover:text-slate-500 underline underline-offset-1">
                      Click Here
                    </span>{" "}
                    List Data Challange WEBMASTER
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
