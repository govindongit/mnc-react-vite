import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";

export default function Umbrella() {
  const Umbrellas = [
    {
      imgSrc: asset("umbrella/umbrella-01.png"),
      name: "Umbrella-01",
    },
    {
      imgSrc: asset("umbrella/umbrella-02.png"),
      name: "Umbrella-02",
    },
    {
      imgSrc: asset("umbrella/umbrella-03.png"),
      name: "Umbrella-03",
    },
    {
      imgSrc: asset("umbrella/umbrella-04.png"),
      name: "Umbrella-04",
    },
    {
      imgSrc: asset("umbrella/umbrella-05.png"),
      name: "Umbrella-05",
    },
  ];

  return (
    <>
      <Bread pageTitle={"Umbrella"} pagePath={"/umbrella"} />
      <ProductComp products={Umbrellas} />
    </>
  );
}
