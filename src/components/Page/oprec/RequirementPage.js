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
          <div className="my-8 w-full lg:mb-16">
            <h2 className="text-5xl text-center font-extrabold text-sky-900">
              REQUIREMENT DIVISION
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:mx-24">
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

          <Link to={"/registrasi"}>
            {" "}
            <Button className="text-center mx-auto lg:mt-20 my-10 lg:mb-0 bg-sky-900">
              Regist Now ..
            </Button>
          </Link>
          <Link to={"/participant"}>
            {" "}
            <Button className="text-center mx-auto lg:mt-10 my-10 lg:mb-0 bg-sky-900">
              Sudah daftar ?
            </Button>
          </Link>

          {isOpenModal1 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/DG.png" className="rounded-lg" alt="" />

                <button
                  className=" bg-sky-900 px-2 rounded-full text-white font-semibold  my-4 "
                  onClick={() => closeModal("modal1")}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {isOpenModal2 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/WM.png" className="rounded-lg" alt="" />
                <button
                  className=" bg-sky-900 px-2 rounded-full text-white font-semibold  my-4 "
                  onClick={() => closeModal("modal2")}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {isOpenModal3 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/RP.png" className="rounded-lg" alt="" />
                <button
                  className=" bg-sky-900 px-2 rounded-full text-white font-semibold  my-4 "
                  onClick={() => closeModal("modal3")}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {isOpenModal4 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/VG.png" className="rounded-lg" alt="" />
                <button
                  className=" bg-sky-900 px-2 rounded-full text-white font-semibold  my-4 "
                  onClick={() => closeModal("modal4")}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {isOpenModal5 && (
            <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-25 ">
              <div className="lg:w-3/4 w-full h-auto px-5 pt-8 bg-white rounded-xl">
                <img src="req/FG.png" className="rounded-lg" alt="" />
                <button
                  className=" bg-sky-900 px-2 rounded-full text-white font-semibold  my-4 "
                  onClick={() => closeModal("modal5")}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </FormLayout>
    </div>
  );
};
export default RequirementPage;
