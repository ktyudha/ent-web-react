import React, { useState } from "react";

import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import FormLayout from "../../../layouts/FormLayout";
import backgroundImage from "../../../asset/pattern3.png";

const RequirementPage = () => {
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const [isOpenModal5, setIsOpenModal5] = useState(false);

  // Handle Input

  const openModal = (modalId) => {
    switch (modalId) {
      case "modal1":
        setIsOpenModal1(true);
        break;
      case "modal2":
        setIsOpenModal2(true);
        break;
      case "modal3":
        setIsOpenModal3(true);
        break;
      case "modal4":
        setIsOpenModal4(true);
        break;
      case "modal5":
        setIsOpenModal5(true);
        break;
      // ... tambahkan kasus lain untuk setiap modal
      default:
        break;
    }
  };

  const closeModal = (modalId) => {
    switch (modalId) {
      case "modal1":
        setIsOpenModal1(false);
        break;
      case "modal2":
        setIsOpenModal2(false);
        break;
      case "modal3":
        setIsOpenModal3(false);
        break;
      case "modal4":
        setIsOpenModal4(false);
        break;
      case "modal5":
        setIsOpenModal5(false);
        break;
      // ... tambahkan kasus lain untuk setiap modal
      default:
        break;
    }
  };

  return (
    <div>
      <FormLayout>
        <div
          className="lg:mx-10 mx-0 md:py-28 py-16"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="my-12 w-full lg:mb-20">
            <h2 className="text-5xl text-center font-extrabold text-sky-900">
              REQUIREMENT DIVISION
            </h2>
            <p className="text-sm mt-4 text-center font-semibold md:text-xl text-yellow-700">
              Tap for more details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:mx-24">
            <div className="mx-16 hover:drop-shadow-xl  md:mx-0">
              <a
                href="https://drive.google.com/drive/folders/1lYQQUINZvBpZKXBtEuyftUDNR28QygiC?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="req/INFORMATION.png"
                  alt=""
                />
              </a>
            </div>
            <div className="mx-16 hover:drop-shadow-xl  md:mx-0">
              <button onClick={() => openModal("modal1")}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="req/reqDg.jpg"
                  alt=""
                />
              </button>
            </div>
            <div className="mx-16 hover:drop-shadow-xl md:mx-0">
              <button onClick={() => openModal("modal2")}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="req/reqWm.jpg"
                  alt=""
                />
              </button>
            </div>
            <div className="mx-16 hover:drop-shadow-xl md:mx-0">
              <button onClick={() => openModal("modal3")}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="req/reqRp.jpg"
                  alt=""
                />
              </button>
            </div>
            <div className="mx-16 hover:drop-shadow-xl md:mx-0">
              <button onClick={() => openModal("modal4")}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="req/reqVg.jpg"
                  alt=""
                />
              </button>
            </div>
            <div className="mx-16 hover:drop-shadow-xl md:mx-0">
              <button onClick={() => openModal("modal5")}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="req/reqFg.jpg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Link to={"/registration"}>
              {" "}
              <Button className="text-center  lg:mt-10 mt-10 mx-2 lg:mb-0 bg-sky-900">
                Register Now !
              </Button>
            </Link>
            <a
              href="https://forms.gle/9ooLs698Nr3tS9uX8"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Button className="text-center underline underline-offset-1 lg:mt-10 mt-10 mx-2 lg:mb-0 bg-yellow-700">
                Register Now ! (alt)
              </Button>
            </a>
            <Link to={"/participant"}>
              {" "}
              <Button className="text-center  lg:mt-10 mt-10 mx-2 lg:mb-0 bg-teal-500">
                Already Registered ?
              </Button>
            </Link>
          </div>

          {isOpenModal1 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/GD.jpeg" className="rounded-lg" alt="" />
                <div className="mx-auto text-center">
                  <button
                    className=" bg-sky-900  py-2 px-4 text-xl rounded-full text-white font-semibold  my-4 "
                    onClick={() => closeModal("modal1")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {isOpenModal2 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/WM.png" className="rounded-lg" alt="" />
                <div className="mx-auto text-center">
                  <button
                    className=" bg-sky-900  py-2 px-4 text-xl rounded-full text-white font-semibold  my-4 "
                    onClick={() => closeModal("modal2")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {isOpenModal3 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/RP.jpeg" className="rounded-lg" alt="" />
                <div className="mx-auto text-center">
                  <button
                    className=" bg-sky-900 py-2 px-4 text-xl rounded-full text-white font-semibold  my-4 "
                    onClick={() => closeModal("modal3")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {isOpenModal4 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/VG.jpeg" className="rounded-lg" alt="" />
                <div className="mx-auto text-center">
                  <button
                    className=" bg-sky-900  py-2 px-4 text-xl rounded-full text-white font-semibold  my-4 "
                    onClick={() => closeModal("modal4")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
          {isOpenModal5 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/FG.png" className="rounded-lg" alt="" />
                <div className="mx-auto text-center">
                  <button
                    className=" bg-sky-900 rounded-full py-2 px-4 text-xl  text-white font-semibold  my-4 "
                    onClick={() => closeModal("modal5")}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </FormLayout>
    </div>
  );
};
export default RequirementPage;
