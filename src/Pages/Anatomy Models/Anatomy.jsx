import React from "react";
import Bread from "../../Components/Bread/Bread";
import ProductComp from "../../Components/ProductComp/ProductComp";
import { asset } from "../../utils/asset";
// import './bags.css'
function Anatomy() {
  const AnatomyModels = [
    {
      imgSrc: asset("anatomy-models/esophagus-model.png"),
      name: "Esophagus Model",
    },
    {
      imgSrc: asset("anatomy-models/sinus-model.png"),
      name: "Sinus Model",
    },
    {
      imgSrc: asset("anatomy-models/thyroid-model.png"),
      name: "Thyroid Model",
    },
    {
      imgSrc: asset("anatomy-models/lungs-model.png"),
      name: "Lungs Model 1",
    },
    {
      imgSrc: asset("anatomy-models/lungs-model-1.png"),
      name: "Lungs Model 2",
    },
    {
      imgSrc: asset("anatomy-models/bladder-model.png"),
      name: "Bladder Model",
    },
    {
      imgSrc: asset("anatomy-models/uterus-model.png"),
      name: "Uterus Model",
    },
    {
      imgSrc: asset("anatomy-models/breast-model.png"),
      name: "Breast Model",
    },
    {
      imgSrc: asset("anatomy-models/pancreas-table-top.png"),
      name: "Pancreas Table Top",
    },
    {
      imgSrc: asset("anatomy-models/female-pelvis.png"),
      name: "Female Pelvis",
    },
    {
      imgSrc: asset("anatomy-models/rectum-model.png"),
      name: "Rectum Model",
    },
    {
      imgSrc: asset("anatomy-models/skin-model.png"),
      name: "Skin Model",
    },
    {
      imgSrc: asset("anatomy-models/teeth-with-braces-model.png"),
      name: "Teeth with Braces Model",
    },
    {
      imgSrc: asset("anatomy-models/normal-teeth-model.png"),
      name: "Normal Teeth Model",
    },
    {
      imgSrc: asset("anatomy-models/knee-model.png"),
      name: "Knee Model",
    },
    {
      imgSrc: asset("anatomy-models/palm.png"),
      name: "Palm Model",
    },
    {
      imgSrc: asset("anatomy-models/elbow-model.png"),
      name: "Elbow Model",
    },
    {
      imgSrc: asset("anatomy-models/acrylic-prostate-model.png"),
      name: "Acrylic And Plastics Prostate Model",
    },
  ];
  return (
    <>
      <Bread pageTitle={"Anatomy Models"} pagePath={"/anatomy"} />
      <ProductComp products={AnatomyModels} />
    </>
  );
}

export default Anatomy;
