import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";
function Acrylic() {
  const Acrylics = [
    {
      imgSrc: asset("acrylic/Acrylic-Tablet-Paper-Weight1.png"),
      name: "Acrylic Tablet Paper Weight",
    },
    {
      imgSrc: asset("acrylic/Smiley-Balancing-Paper-Weight.png"),
      name: "Smiley Balancing Paper Weight",
    },
    {
      imgSrc: asset("acrylic/smiley.png"),
      name: "3 in 1 Smiley Paper Weight",
    },
    {
      imgSrc: asset("acrylic/First-Aid-Kit.png"),
      name: "First Aid Kit",
    },
    {
      imgSrc: asset("acrylic/Diabetes-Eye-Table-Top.png"),
      name: "Diabetes Eye Table Top",
    },
    {
      imgSrc: asset("acrylic/Pyramid-Pen-Stand.png"),
      name: "Pyramid Pen Stand",
    },
    {
      imgSrc: asset("acrylic/Acrylic-Tablet-Paper-Weight2.png"),
      name: "Acrylic Tablet Paper Weight",
    },
    {
      imgSrc: asset("acrylic/Acrylic-Uterus-Education-Chart.png"),
      name: "Acrylic Uterus Education Chart",
    },
    {
      imgSrc: asset("acrylic/Mobile-Stand.png"),
      name: "NO. 1 Mobile Stand",
    },
    {
      imgSrc: asset("acrylic/Acrylic-Knee-Stages.png"),
      name: "Acrylic Knee Stages",
    },
    {
      imgSrc: asset("acrylic/Mascot-QR-Standee.png"),
      name: "Mascot QR Standee",
    },
    {
      imgSrc: asset("acrylic/Clock-with-Mobile-Pen-Stand.png"),
      name: "Clock with Mobile & Pen Stand",
    },
    {
      imgSrc: asset("acrylic/Allergic-Chit-Pad-Holder.png"),
      name: "Allergic Chit Pad Holder",
    },
    {
      imgSrc: asset("acrylic/Ampule-Cotton-Dispenser.png"),
      name: "Ampule Cotton Dispenser",
    },
    {
      imgSrc: asset("acrylic/Acrylic-Chit-Pad-Holder.png"),
      name: "Acrylic Chit Pad Holder",
    },
    {
      imgSrc: asset("acrylic/Calendar-With-Chit-Pad-Holder.png"),
      name: "Calendar With Chit Pad Holder",
    },
  ];
  return (
    <>
      <Bread pageTitle={"Acrylic And Plastics"} pagePath={"/acrylic"} />
      <ProductComp products={Acrylics} />
    </>
  );
}

export default Acrylic;
