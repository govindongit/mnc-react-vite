import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
// import './bags.css'
function Anatomy() {
    const AnatomyModels = [
        {
            imgSrc: "./src/assets/img/anatomy-models/esophagus-model.png",
            name: "Esophagus Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/sinus-model.png",
            name: "Sinus Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/thyroid-model.png",
            name: "Thyroid Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/lungs-model.png",
            name: "Lungs Model 1",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/lungs-model-1.png",
            name: "Lungs Model 2",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/bladder-model.png",
            name: "Bladder Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/uterus-model.png",
            name: "Uterus Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/breast-model.png",
            name: "Breast Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/pancreas-table-top.png",
            name: "Pancreas Table Top",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/female-pelvis.png",
            name: "Female Pelvis",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/rectum-model.png",
            name: "Rectum Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/skin-model.png",
            name: "Skin Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/teeth-with-braces-model.png",
            name: "Teeth with Braces Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/normal-teeth-model.png",
            name: "Normal Teeth Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/knee-model.png",
            name: "Knee Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/palm.png",
            name: "Palm Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/elbow-model.png",
            name: "Elbow Model",
        },
        {
            imgSrc: "./src/assets/img/anatomy-models/acrylic-prostate-model.png",
            name: "Acrylic And Plastics Prostate Model",
        },
    ]
    return (
        <>
            <Bread pageTitle={'Anatomy Models'} pagePath={'/anatomy'} />
            <ProductComp products={AnatomyModels} />
        </>
    )
}

export default Anatomy
