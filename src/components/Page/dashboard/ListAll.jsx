// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../../layouts/DashboardLayout";
import TabsDashboard from "../../Common/TabsDashboard";

const ListAll = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get("https://cirt.pens.ac.id/api/api/recruitment/")
      .then((response) => {
        const fetchedData = response.data.data;
        setFormData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <DashboardLayout>
        <h2 className="text-white text-xl mx-auto text-center md:text-2xl">
          REKAPITULASI
        </h2>
        <h4 className="text-white font-bold text-lg mx-auto text-center md:text-2xl">
          OPREC ENT Gen 18
        </h4>
        <div className="text-center mx-auto mt-6">
          <button
            onClick={logout}
            className="bg-yellow-700  py-1 px-4  rounded-full  mx-auto text-center"
          >
            <p className=" text-white text-md"> Logout</p>
          </button>
        </div>
        <div className="lg:mx-20 mx-10 md:py-10 py-10">
          <TabsDashboard data={formData} />
        </div>
      </DashboardLayout>
    </div>
  );
};
export default ListAll;
