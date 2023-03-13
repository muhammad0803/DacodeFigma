import "../App.css"
import { Section2card } from "../Section2card"
import blog from "../images/blog.jpg"
export const Services=()=>{
    return(
          <div>
          <div className="section2">
          <h2>Our Services</h2>
          <p className='ipsum'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br /> 
           tempor invidunt ut labore et.</p>
           <Section2card/>
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