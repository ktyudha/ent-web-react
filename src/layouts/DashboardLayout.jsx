import React from "react";
import backgroundImage from "../asset/pattern3.png";
const DashboardLayout = ({ children }) => {
  return (
    <div
      className="py-20 bg-sky-900"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="h-screen">{children}</div>
    </div>
  );
};

export default DashboardLayout;
