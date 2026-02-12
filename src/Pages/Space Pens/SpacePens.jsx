import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductCompSpace from "../../Components/ProductCompSpace/ProductCompSpace";
import { asset } from "../../utils/asset";

export default function SpacePens() {
  const Spacepens = [
    {
      imgSrc: asset("writing-constuction/1.png"),
    },
    {
      imgSrc: asset("writing-constuction/2.png"),
    },
    {
      imgSrc: asset("writing-constuction/3.png"),
    },
    {
      imgSrc: asset("writing-constuction/4.png"),
    },
    {
      imgSrc: asset("writing-constuction/5.png"),
    },
    {
      imgSrc: asset("writing-constuction/6.png"),
    },
    {
      imgSrc: asset("writing-constuction/7.png"),
    },
    {
      imgSrc: asset("writing-constuction/8.png"),
    },
    {
      imgSrc: asset("writing-constuction/9.png"),
    },
    {
      imgSrc: asset("writing-constuction/10.png"),
    },
    {
      imgSrc: asset("writing-constuction/11.png"),
    },
    {
      imgSrc: asset("writing-constuction/12.png"),
    },
    {
      imgSrc: asset("writing-constuction/13.png"),
    },
    {
      imgSrc: asset("writing-constuction/14.png"),
    },
    {
      imgSrc: asset("writing-constuction/15.png"),
    },
  ];
  return (
    <>
      <Bread pageTitle={"Space Pens"} pagePath={"/spacepens"} />
      <ProductCompSpace products={Spacepens} />
    </>
  );
}
