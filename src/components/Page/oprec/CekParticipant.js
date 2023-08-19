import React, { useState } from "react";
// import FormLayout from "../../../layouts/FormLayout";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../asset/pattern3.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

const CekParticipant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      <div
        className="h-screen pt-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="mt-8 lg:mt-16">
          <div className="m-4 lg:m-0">
            <div className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white shadow-md rounded px-8 pt-6 pb-8">
              <h2 className="text-lg font-bold mb-4 text-center">
                {" "}
                Cetak Formulir
              </h2>
              <form
                onSubmit={handleSubmit}
                className="max-w-md md:max-w-lg mx-auto bg-sky-900 text-white px-8 pt-6 pb-8"
              >
                <div className="mb-4">
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
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
          </div>

          <Link to={"/registrasi"}>
            {" "}
            <Button className="text-center mx-auto lg:mt-10 my-10 lg:mb-0 bg-sky-900">
              Regist Now ..
            </Button>
          </Link>
          <Link to={"/requirement"}>
            {" "}
            <Button className="text-center mx-auto lg:mt-10 my-10 lg:mb-0 bg-sky-900">
              Requirement
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CekParticipant;
