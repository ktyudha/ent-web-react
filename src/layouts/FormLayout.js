import React from "react";
import Navbar from "../components/Common/NavbarComp";
import Footer from "../components/Common/Footer";

const FormLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default FormLayout;
