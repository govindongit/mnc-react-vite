import React from 'react'
import Bread from '../../Components/Bread/Bread'
import ProductCompSpace from '../../Components/ProductCompSpace/ProductCompSpace'

export default function SpacePens() {

    const Spacepens = [
        {
            imgSrc: "./src/assets/img/writing-constuction/1.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/2.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/3.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/4.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/5.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/6.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/7.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/8.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/9.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/10.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/11.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/12.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/13.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/14.png",
        },
        {
            imgSrc: "./src/assets/img/writing-constuction/15.png",
        },

    ];
    return (
        <>
            <Bread pageTitle={'Space Pens'} pagePath={'/spacepens'} />
            <ProductCompSpace products={Spacepens} />
        </>
    )
}
