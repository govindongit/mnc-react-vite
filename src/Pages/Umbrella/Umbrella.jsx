import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductComp from '../../Components/ProductComp/ProductComp'

export default function Umbrella() {

    const Umbrellas = [
        {
            imgSrc: "./src/assets/img/umbrella/umbrella-01.png",
            name: "Umbrella-01",
        },
        {
            imgSrc: "./src/assets/img/umbrella/umbrella-02.png",
            name: "Umbrella-02",
        },
        {
            imgSrc: "./src/assets/img/umbrella/umbrella-03.png",
            name: "Umbrella-03",
        },
        {
            imgSrc: "./src/assets/img/umbrella/umbrella-04.png",
            name: "Umbrella-04",
        },
        {
            imgSrc: "./src/assets/img/umbrella/umbrella-05.png",
            name: "Umbrella-05",
        },
    ];

    return (
        <>
            <Bread pageTitle={'Umbrella'} pagePath={'/umbrella'} />
            <ProductComp products={Umbrellas} />
        </>
    )
}
