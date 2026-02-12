import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";

export default function ShirtandTShirt() {
  const Shirts = [
    {
      imgSrc: asset("shirt-t-shirt/t-shirt-01.png"),
      name: "T-Shirt 01",
    },
    {
      imgSrc: asset("shirt-t-shirt/t-shirt-02.png"),
      name: "T-Shirt 02",
    },
    {
      imgSrc: asset("shirt-t-shirt/t-shirt-03.png"),
      name: "T-Shirt 03",
    },
    {
      imgSrc: asset("shirt-t-shirt/t-shirt-04.png"),
      name: "T-Shirt 04",
    },
    {
      imgSrc: asset("shirt-t-shirt/t-shirt-05.png"),
      name: "T-Shirt 05",
    },
    {
      imgSrc: asset("shirt-t-shirt/shirt-01.png"),
      name: "Shirt 01",
    },
    {
      imgSrc: asset("shirt-t-shirt/shirt-02.png"),
      name: "Shirt 02",
    },
  ];

  return (
    <>
      <Bread pageTitle={"Shirt & T-Shirts "} pagePath={"/shirtandtShirt"} />
      <ProductComp products={Shirts} />
    </>
  );
}
