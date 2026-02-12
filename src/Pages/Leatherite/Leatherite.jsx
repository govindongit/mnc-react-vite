import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";
export default function Leatherite() {
  const Leatherites = [
    {
      imgSrc: asset("leatherrite/writing-pad.png"),
      name: "Writing Pad",
    },
    {
      imgSrc: asset("leatherrite/cubic-calendar.png"),
      name: "Cubic Calendar",
    },
    {
      imgSrc: asset("leatherrite/multiple-organiser.png"),
      name: "Multiple Organiser",
    },
    {
      imgSrc: asset("leatherrite/chit-pad-pen-holder.png"),
      name: "Chit Pad, Mobile & Pen Holder ",
    },
    {
      imgSrc: asset("leatherrite/table-organiser.png"),
      name: "Table Organiser",
    },
    {
      imgSrc: asset("leatherrite/chit-pad-mobile-pen-holder1.png"),
      name: "Chit Pad & Pen Holder",
    },
  ];

  return (
    <>
      <Bread pageTitle={"Leatherite"} pagePath={"/leatherite"} />
      <ProductComp products={Leatherites} />
    </>
  );
}
