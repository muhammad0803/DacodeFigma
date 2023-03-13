import '../App.css'
import {Section2card} from '../Section2card'
import { Section3card } from '../Section3card'
import section4 from '../images/section4.jpg'
import section1 from '../images/section1.jpg'
import { OurWork } from "../navbar/OurWork/OurWork"
import{OurClients} from "../OurClients/OurClients.jsx"
export const  Home=()=>{
  return(
 
      <>
        <div className="section1">
          <div className="section1_left">
          <h1>We help you create <br/>your website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis <br /> adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. <br /> At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
        <div className="buttons">
          <button>Get Started</button>
          <button>Get Started</button>
        </div>
          </div>
          <div className="section1_right">
            <div><img src={section1} alt="" /></div>
          </div>
        </div>
      
        <div className="section2" >
          <h2>Our Services</h2>
          <p className='ipsum'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br /> 
           tempor invidunt ut labore et.</p>
            <Section2card/>
        </div>
           
        <OurWork/>

          <div className="section4">
            <h2>Your idea into reality</h2>
            <p className='we'>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>
            <div className="section44">
            <div className="section4_left">
              <div className="section4_card">
                <div>1</div>
                <div>
                  <h3>Your idea</h3>
                  <p>In order for us at daCode to know that we are a good fit for your project  we always start with screening questions in order to make sure that we  are a suitable match for your company.</p>
                </div>
              </div>

              <div className="section4_card">
                <div>2</div>
                <div>
                  <h3>Your idea</h3>
                  <p>In order for us at daCode to know that we are a good fit for your project  we always start with screening questions in order to make sure that we  are a suitable match for your company.</p>
                </div>
              </div>
              <div className="section4_card">
                <div>3</div>
                <div>
                  <h3>Your idea</h3>
                  <p>In order for us at daCode to know that we are a good fit for your project  we always start with screening questions in order to make sure that we  are a suitable match for your company.</p>
                </div>
              </div>
              <div className="section4_card">
                <div>4</div>
                <div>
                  <h3>Your idea</h3>
                  <p>In order for us at daCode to know that we are a good fit for your project  we always start with screening questions in order to make sure that we  are a suitable match for your company.</p>
                </div>
              </div>
            </div>
            <div className='section4_right'><div><img src={section4} alt="" /></div></div>
            </div>
           
          </div>

          <div className="section5">
            <h2>Interested to work with us ?</h2>
            <p>Send a line here get and update daily</p>
            <button>DaCode@example.com</button>
          </div>
         <OurClients/>

      </>
  )
}

