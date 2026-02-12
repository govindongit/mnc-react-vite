import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";
export default function Metal() {
  const Metals = [
    {
      imgSrc: asset("metal/indian-flag-with-table-clock.png"),
      name: "Indian Flag With Table Clock",
    },
    {
      imgSrc: asset("metal/metal-heart-pen-stand.png"),
      name: "Metal Heart Pen Stand",
    },
    {
      imgSrc: asset("metal/peacock-table-clock.png"),
      name: "Peacock Table Clock",
    },
    {
      imgSrc: asset("metal/dr-logo-metal-pen-stand.png"),
      name: "Dr. Logo Metal Pen Stand",
    },
    {
      imgSrc: asset("metal/flexible-spring-pen-stand.png"),
      name: "Flexible Spring Pen Stand",
    },
  ];

  return (
    <>
      <Bread pageTitle={"Metal"} pagePath={"/metal"} />
      <ProductComp products={Metals} />
    </>
  );
}
