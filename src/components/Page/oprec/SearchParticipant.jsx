import React, { useState, useEffect } from "react";
import axios from "axios";

import { PDFViewer } from "@react-pdf/renderer";
import PDFTemplate from "../../Common/PdfTemplateComp";
import { useParams } from "react-router-dom";
import backgroundImage from "../../../asset/pattern3.png";

import FormLayout from "../../../layouts/FormLayout";

const SearchParticipant = () => {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get("https://ent.pens.ac.id/api/api/recruitment/" + id) // Ganti dengan URL API yang benar
      .then((response) => {
        const fetchedData = response.data.data; // Data yang diterima dari API
        setFormData(fetchedData);
        // console.log(response.data.data.id);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div>
      <FormLayout>
        <div
          className="bg-sky-900 "
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="lg:mx-10 mx-0 md:py-28 py-16">
            <PDFViewer className="w-full h-screen">
              <PDFTemplate dataCetak={formData} />
            </PDFViewer>
          </div>
        </div>
      </FormLayout>
    </div>
  );
};
export default SearchParticipant;
