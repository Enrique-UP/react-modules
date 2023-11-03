import {useEffect} from "react";
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import One from "./assets/images/banner1.jpg";
import Two from "./assets/images/banner2.jpg";
import Three from "./assets/images/banner3.jpg";
import Four from "./assets/images/banner4.jpg";
import Five from "./assets/images/banner5.jpg";
import Six from "./assets/images/banner6.jpg";

function Slider() {
    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        dots: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items:3,
            }
        },
    };
    return (
        <>
            <OwlCarousel className="slider-items owl-carousel" {...options}>
                <div><img src={One} alt="" /></div>
                <div><img src={Two} alt="" /></div>
                <div><img src={Three} alt="" /></div>
                <div><img src={Four} alt="" /></div>
                <div><img src={Five} alt="" /></div>
                <div><img src={Six} alt="" /></div>
            </OwlCarousel>
        </>
    )
}
export default Slider;