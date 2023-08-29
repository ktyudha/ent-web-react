// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../../layouts/DashboardLayout";
import TableDashobard from "../../Common/TableDashboard";

const ListAll = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  //   const divisions = [
  //     {
  //       division: "Graphic Designer",
  //       title: "DG",
  //     },

  //     {
  //       division: "Webmaster",
  //       title: "WM",
  //     },

  //     {
  //       division: "Reporter",
  //       title: "RP",
  //     },
  //     {
  //       division: "Photographer",
  //       title: "FG",
  //     },
  //     {
  //       division: "Videographer",
  //       title: "VG",
  //     },
  //   ];

  const logout = () => {
    // localStorage.removeItem("token");

    navigate("/challange/form");
  };

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       navigate("/login");
  //     }
  //   }, [navigate]);

  useEffect(() => {
    axios
      .get("https://cirt.pens.ac.id/api/api/recruitment")
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
        <div className="mb-10 mx-10">
          <div className="mb-10">
            <h2 className="text-white text-xl mx-auto text-center md:text-2xl">
              REKAPITULASI CHALLANGE
            </h2>
            <h4 className="text-white font-bold text-lg mx-auto text-center md:text-2xl">
              WEBMASTER
            </h4>

            {/* <div className="text-center mt-6 mx-auto">
          <h2 className="text-white text-5xl my-2">{formData.length}</h2>

          {divisions.map((item, index) => {
            return (
              <span key={index} className="mx-2 text-white text-sm">
                {item.title} :{" "}
                {
                  formData.filter(
                    (dataFilter) => dataFilter.division === item.division
                  ).length
                }
              </span>
            );
          })}
        </div> */}
            <div className="text-center mx-auto mt-6">
              <button
                onClick={logout}
                className="bg-yellow-700  py-1 px-4  rounded-full  mx-auto text-center"
              >
                <p className=" text-white text-md">Back To Form</p>
              </button>
            </div>
          </div>
          {/* <div className="lg:mx-20 mx-10 md:py-10 py-10">
          <TabsDashboard data={formData} />
        </div> */}
          <TableDashobard data={formData} />
        </div>
      </DashboardLayout>
    </div>
  );
};
export default ListAll;
