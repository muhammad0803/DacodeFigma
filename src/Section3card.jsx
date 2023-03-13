import tab31 from "./images/tab31.jpg";
import tab32 from "./images/tab32.jpg";
import tab33 from "./images/tab33.jpg";
import { useState } from "react";

import Slider from "react-slick";

import "./Section3card.css";

export const Section3card = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      
      };

  const [tab, setTab] = useState(1);

  const [mott, setMott] = useState(false);
  const close = (close) => setMott(!mott);

  const [data3] = useState([
    {
      img: tab31,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab32,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab33,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab31,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab32,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab33,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab31,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab32,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      img: tab33,
      des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
  ]);
  return (
    // <div className="tab3">
    //     <div className="tab3_head">
    //         <ul>
    //             <li onClick={()=>setTab(1)}>Website Optimization</li>
    //             <li onClick={()=>setTab(2)}>Website Redesign</li>
    //             <li onClick={()=>setTab(3)}>Search Engine Optimization</li>
    //         </ul>
    //     </div>

    //     <div className="sliders">

    //     </div>

    // </div>
    <Slider {...settings}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
    <div>
      <h3>7</h3>
    </div>
    <div>
      <h3>8</h3>
    </div>
  </Slider>
  );
};
