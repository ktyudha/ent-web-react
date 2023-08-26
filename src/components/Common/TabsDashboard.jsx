"use client";

import { Tabs } from "flowbite-react";
// import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";
import TableDashobard from "./TableDashboard";

export default function TabsWithIcons({ data }) {
  const tabsData = [
    {
      division: "Graphic Designer",
      title: "DG",
      icon: "HiUserCircle",
    },

    {
      division: "Webmaster",
      title: "WM",
      icon: "HiClipboardList",
    },

    {
      division: "Reporter",
      title: "RP",
      icon: "HiAdjustments",
    },
    {
      division: "Photographer",
      title: "FG",
      icon: "HiAdjustments",
    },
    {
      division: "Videographer",
      title: "VG",
      icon: "HiAdjustments",
    },
  ];

  return (
    <Tabs.Group
      style="underline"
      className="text-center mx-auto bg-white rounded-lg"
    >
      {tabsData.map((item, index) => {
        return (
          <Tabs.Item key={index} title={item.title} className="font-bold">
            <TableDashobard
              data={data.filter(
                (dataFilter) => dataFilter.division === item.division
              )}
            />
          </Tabs.Item>
        );
      })}
    </Tabs.Group>
  );
}
