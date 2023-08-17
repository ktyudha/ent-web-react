import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PDFTemplate from "../../Common/PdfTemplateComp";
import { useParams } from "react-router-dom";
// import FormLayout from "../../../layouts/FormLayout";

const SearchParticipant = () => {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get("http://ent-api.test/api/recruitment/" + id) // Ganti dengan URL API yang benar
      .then((response) => {
        const fetchedData = response.data.data; // Data yang diterima dari API
        setFormData(fetchedData);
        console.log(response.data.data.id);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <PDFViewer width="1000" height="600">
        <PDFTemplate dataCetak={formData} />
      </PDFViewer>
      <br />
      <br />
      <br />
      <br />
      <span className="text-lg mx-auto">Ini RequirementPage</span>
    </div>
  );
};
export default SearchParticipant;
