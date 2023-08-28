// import { Table } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function HoverState({ data }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              NRP
            </th>
            <th scope="col" className="px-6 py-3">
              Net ID
            </th>
            <th scope="col" className="px-6 py-3">
              Division
            </th>
            <th scope="col" className="px-6 py-3">
              Portofolio
            </th>
            <th scope="col" className="px-6 py-3">
              PDF
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <td className="px-6 py-4"> {index + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="px-6 py-4"> {item.nrp}</td>
              <td className="px-6 py-4"> {item.email}</td>
              <td className="px-6 py-4"> {item.division}</td>
              <td className="px-6 py-4">
                {" "}
                <a
                  href={item.url_portofolio}
                  className="underline underline-offset-1 hover:text-yellow-700 text-sky-900"
                  target="_blank"
                  rel="noreferrer"
                >
                  click here
                </a>
              </td>
              <td className="px-6 py-4">
                <Link
                  to={/participant/ + item.id}
                  target="_blank"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Download
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
