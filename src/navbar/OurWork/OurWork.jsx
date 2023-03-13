import React from "react";
import "slick-carousel/slick/slick.css"; 
import "../OurWork/OurWork.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import tab31 from "../../images/tab31.jpg"
import tab32 from "../../images/tab32.jpg"
import tab35 from "../../images/tab35.jpg"


export const OurWork = ()=> {
     
    const [data, setData]=useState (
      [
        {
          img:tab31,
        },
        {
          img:tab32,
        },
        {
          img:tab35,
        }, 
         {
          img:tab31,
        },
        {
          img:tab32,
        },
        {
          img:tab35,
        },  
        {
          img:tab31,
        },
        {
          img:tab32,
        },
        {
          img:tab35,
        },
      ]
    )
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="happyClients">
        <div className="happyClients_top">
          <p>Portfolio</p>
          <h2>Our Great Work</h2>
          <ul>
            <li onClick={()=> data.slice(0,3)}>Website Optimization</li>
            <li onClick={()=> data.slice(3,6)}>Website Redesign</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
        <div className="happyClients_bottom">
        <Slider className="slider" {...settings}>
        {
          data.map((item) => {
            return(  
                 <div>
                    <div><img src={item.img} alt="" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Morbi cursus vitae tortor sapien, lectus scelerisque  porttitor. Dolor nulla bibendum </p>
                 </div>
              )
            })
          }

          </Slider>
          <div className="clas"><button className="happyClients_bottom_button">See All</button></div>
        </div>
      
      </div>
      
    );
  }
