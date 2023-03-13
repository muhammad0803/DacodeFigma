import navbar from '../navbar/navbar.jpg'
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons'
export const Navbar=()=>{
   const [nav, setnav]=useState(false)
   const sentt=()=>{
    setnav(!nav)
   }
    return(
        <div className="navbar">
          <div className='img'><img src={navbar} alt="" /></div>
          <div className={`links ${ nav ? 'active' : "" }` } >
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/services">Services</Link>
            <Link className='link' to="/case">Case</Link>
            <Link className='link' to="/code">DaCode Specialists</Link>
            <Link className='link' to="/blog">Blog</Link>
            <button className='link' >Request a quote</button>
          </div>
          <button className='sent' onClick={sentt}>send</button>
        </div>
    )
}