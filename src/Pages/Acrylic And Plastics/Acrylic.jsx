import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'
function Acrylic() {
    const Acrylics = [
        {
            imgSrc: "./src/assets/img/acrylic/Acrylic-Tablet-Paper-Weight1.png",
            name: "Acrylic Tablet Paper Weight",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Smiley-Balancing-Paper-Weight.png",
            name: "Smiley Balancing Paper Weight",
        },
        {
            imgSrc: "./src/assets/img/acrylic/smiley.png",
            name: "3 in 1 Smiley Paper Weight",
        },
        {
            imgSrc: "./src/assets/img/acrylic/First-Aid-Kit.png",
            name: "First Aid Kit",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Diabetes-Eye-Table-Top.png",
            name: "Diabetes Eye Table Top",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Pyramid-Pen-Stand.png",
            name: "Pyramid Pen Stand",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Acrylic-Tablet-Paper-Weight2.png",
            name: "Acrylic Tablet Paper Weight",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Acrylic-Uterus-Education-Chart.png",
            name: "Acrylic Uterus Education Chart",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Mobile-Stand.png",
            name: "NO. 1 Mobile Stand",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Acrylic-Knee-Stages.png",
            name: "Acrylic Knee Stages",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Mascot-QR-Standee.png",
            name: "Mascot QR Standee",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Clock-with-Mobile-Pen-Stand.png",
            name: "Clock with Mobile & Pen Stand",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Allergic-Chit-Pad-Holder.png",
            name: "Allergic Chit Pad Holder",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Ampule-Cotton-Dispenser.png",
            name: "Ampule Cotton Dispenser",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Acrylic-Chit-Pad-Holder.png",
            name: "Acrylic Chit Pad Holder",
        },
        {
            imgSrc: "./src/assets/img/acrylic/Calendar-With-Chit-Pad-Holder.png",
            name: "Calendar With Chit Pad Holder",
        },
    ]
    return (
        <>
            <Bread pageTitle={'Acrylic And Plastics'} pagePath={'/acrylic'} />
            <ProductComp products={Acrylics} />
        </>
    )
}

export default Acrylic
