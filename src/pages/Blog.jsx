import "../App.css"
import { useState } from "react"
import blog from "../images/blog.jpg"
import {BsArrowDownSquareFill} from "react-icons/bs"
export const Blog=()=>{

    const [data,setData]=useState([
        {   
            id:1,
            des1:"Lunar Strategy SaaS Marketing Agency - Rebranding of website ",
            des2:"We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves."
        }, { 
            id:2,
            des1:"Lunar Strategy SaaS Marketing Agency - Rebranding of website ",
            des2:"We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves."
        }, {
            id:3,
            des1:"Lunar Strategy SaaS Marketing Agency - Rebranding of website ",
            des2:"We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves."
        }, {
            id:4,
            des1:"Lunar Strategy SaaS Marketing Agency - Rebranding of website ",
            des2:"We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves."
        },
    ])
    

    const [mot ,setMot]=useState(false)
    const [show,setShow]=useState('')
    const shov =(mmm)=>{

        return(
            setMot(!mot),
            setShow(mmm)
        )
    }
    return(
        <div>
        <div className="blog_section1">
        <h1>Some of our SaaS clients</h1>
        <p>We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after  brainstorming on branding and strategy we are going into the details of what what and why the you want to create a  website. In order to make the creation process as smooth and effective as possible then we are working in an  agile/scrum way in order to make sure we can deliver on time and within budget for our clients.</p>
        </div>
        <div className="blog_section2">
            {
                data.map((item,index)=>{
                    console.log(item.id);
                    return(
                    
                    <div key={item.id} className="blog_section2_card">
                      <div className="blog_section2_carddd">
                           <div></div>
                          <div>
                           <h5 onClick={()=> shov(item.id) }>{item.des1}  <h5 className="h5"> <BsArrowDownSquareFill/></h5> </h5>
                           <p className={ `pp  ${item.id===show ? "active" : ""}`}>{item.des2} </p>
                           </div>
                       </div>
                    </div>
                    )
                })
            }
        </div>
         
         <div className="blog_Section3">
            <h2>Interested to work with us ?</h2>
            <p>Send a line here get and update daily</p>
            <button>DaCode@example.com</button>
         </div>
          

          <div className="blog_Section4">
            <div className="blog_Section4_left">
                <h2>Establishing online presence</h2>
                <p>Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage andguide visitors in a smooth way towards call-to-actions. 
                   This goes hand in hand with a responsive design, meaning it needs to be apt for different devices. <br /> <br />
                   We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.
                   The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how <br /> <br /> high it will rank among search results. We also make sure that your website is indexed properly.
                   We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.</p>
            </div>
                   <div className="blog_Section4_right">
                       <h5>Schedule a free session</h5>
                       <div><img src={blog} alt="" /></div>
                   </div>
          </div>
        </div>
    )
}