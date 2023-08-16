import React, { useState } from "react";

import axiosInstance from "../../utils/axiosInstance";

import FormLayout from "../../layouts/FormLayout";

const Axiostesting = () => {
  const [formData, setFormData] = useState({
    name: "Kurniawan Try Yudha",
    nrp: "222250003",
    strata: "d3",
    prodi: "teknik telekomunikasi",
    place_of_birth: "mojokerto",
    date_of_birth: "20082002",
    gender: "male",
    religion: "islam",
    boarding_address: "surabaya",
    home_address: "sidoarjo",
    email: "ktyiedha@gmail.com",
    phone: "085848250548",
    mbti: "estj",
    motto: "apa yak??",
    interest: "gatau",
    reason: "aku pingin ikut wwm",
    division: "Webmaster",
    description: "aku seorang web developer",
    url_portofolio: "dricve",
    experiences: [
      { start_date: "-", end_date: "-", organization_name: "-", position: "-" },
    ],
    achievements: [{ date: "-", title: "-", level: "-", achievement: "-" }],
  });
  // const [tesData, setTesData] = useState({
  //   name: "Kurniawan Try ",
  //   email: "yudha@gmail.com",
  //   password: "yudha123",
  // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axiosInstance.post("/recruitment", formData);
      console.log("Response:", response);
      // You can handle the response data here
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <FormLayout>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <br />
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
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
              placeholder="Enter your name..."
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </FormLayout>
    </div>
  );
};
export default Axiostesting;
