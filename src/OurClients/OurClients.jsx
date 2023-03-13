import "../OurClients/OurClients.css"
import { useState } from "react"
import React from "react";
import {AiFillStar} from "react-icons/ai"
import Slider from "react-slick";
export const OurClients=()=>{

    const [data,setData]=useState([
        
        {
            des1:"5.0",
            des2:"We tried several agencies before we found daCode. Has been a pleasure to work  with and will soon start the next project with our second brand."
        }, {
            des1:"5.0",
            des2:"We tried several agencies before we found daCode. Has been a pleasure to work  with and will soon start the next project with our second brand."
        }, {
            des1:"5.0",
            des2:"We tried several agencies before we found daCode. Has been a pleasure to work  with and will soon start the next project with our second brand."
        }, {
            des1:"5.0",
            des2:"We tried several agencies before we found daCode. Has been a pleasure to work  with and will soon start the next project with our second brand."
        }, {
            des1:"5.0",
            des2:"We tried several agencies before we found daCode. Has been a pleasure to work  with and will soon start the next project with our second brand."
        },
    ])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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

    }
    return(
          <div className="OurClients">
            <p className="our">Testiomonials</p>
            <h3>Our Happy Clients</h3>
            <div>
                <div  className="OurClients_bottom">
                     <Slider  {...settings}>
                               {
                                 data.map((item)=>{
                                     return(
                                         <div  className="OurClient">
                                             <p>{item.des1}</p>
                                             <div>
                                                 <AiFillStar className="star"/>
                                                 <AiFillStar className="star"/>
                                                 <AiFillStar className="star"/>
                                                 <AiFillStar className="star"/>
                                                 <AiFillStar className="star"/>
                                             </div>
                                             <p>{item.des2}</p>
                                         </div>
                                     )
                                 })
                               }
                     </Slider>

                </div>
      </div>
          </div>
    )
}   