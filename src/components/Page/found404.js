import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="mt-8">
        <div className="m-4 lg:m-0">
          <div className="max-w-md lg:max-w-4xl mx-auto my-auto text-white shadow-md rounded px-8 pb-8">
            <img src={process.env.PUBLIC_URL + "404.png"} alt="" />
          </div>
          <Button className="text-center mx-auto my-10 bg-sky-900">
            <Link to={"/"}>Kembali ke ent.pens.ac.id</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotfoundPage;
