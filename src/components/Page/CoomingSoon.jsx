import React from "react";
import backgroundImage from "../../asset/bg.jpg";
const CoomingSoon = () => {
  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      <main className="flex h-screen items-center justify-center">
        <div className="space-y-16 text-center">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold tracking-wider">
              Open Recruitment ENT
            </h2>
            <h1 className="text-8xl font-medium uppercase tracking-widest">
              CLOSED
            </h1>
          </div>
          <div className="space-y-2">
            <h3 className="tracking-wide">
              {/* Registration Will be */} Thank you for your registration
              {/* <span className="font-semibold"> Opened on 2024</span> */}
            </h3>
            <p className="tracking-wide">
              For More Information, Follow{" "}
              <a
                href="https://www.instagram.com/entcrews/"
                className="underline transition-all hover:text-light-blue"
              >
                @entcrews on Instagram
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CoomingSoon;
