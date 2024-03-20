"use client";

import React from "react";
import { SimpleWidget } from "..";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  const widgets = [
    {
      title: count.toString(),
      subtitle: "Product in cart",
      label: "Contador",
      icon: <IoCartOutline size={70} className=" text-blue-500" />,
      href: "Href",
    },
  ];

  return (
    <div className=" flex flex-wrap p-2 items-center justify-center">
      {widgets.map((widget) => (
        <SimpleWidget {...widget} />
      ))}
    </div>
  );
};
