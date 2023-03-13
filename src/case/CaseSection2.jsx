import "../case/CaseSection2.css"
import { useState } from "react"
import {BiSearch} from "react-icons/bi"


export const CaseSection2=()=>{

    const [data,setData]=useState([
        {
            des1:"Kevin Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
            
        },
        {
            des1:"John Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Ken Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Meri Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Daved Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Snop Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Arash Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Kevin Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Kevin Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Kevin Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },    {
            des1:"Kevin Jeppesen",
            des2:"Web Project Manager",
            button:"kevin@dacode.se",
        },    {
            des1:"Kim Jeppesen",
            des2:"Web Project Manager",
            des3:"in",
            button:"kevin@dacode.se",
        },
    
    ])

    const [casee,setCase]=useState(false);
    const [arr,setArr]=useState({})
    const CaseFunc=(mmm)=>{
            setArr(mmm)
            setCase(true) 
    }

    const [search, setSearch]=useState("")

    return(
           <>
           <div className="caseSection1">
            <h1>The Team</h1>
            <p>Our team members have over 15 years of experience within web development, <br /> SEO, content and design. We have an extensive portfolio of working with <br /> different companies and projects from various parts of the world.</p>
            <div className="input">
           <input type="text" placeholder="Search blog..." onChange={(e)=> ( setSearch(e.target.value.toLocaleLowerCase().trim()) )  } />
           <div><BiSearch/></div>
           </div>
           </div>
            <div className="CaseSection2_cards">
                {
                  search.length > 0 ? data.filter((item) => item.des1.toLocaleLowerCase().trim().indexOf(search) != -1) .length > 0 ?
                  data.filter((item)=> item.des1.toLocaleLowerCase().trim().indexOf(search) != -1).map((item)=>{
                        return(
                        <div className="CaseSection2_card">
                            <div></div>
                            <h4>{item.des1}</h4>
                            <p className="des2">{item.des2}</p>
                            <p className="des3">{item.des3}</p>
                            <button onClick={()=>CaseFunc(item)}>{item.button}</button>
                        </div>
                        )
                    }) : <div> <h1>No found</h1></div> : 
                    data.map((item)=>{
                        return(
                        <div className="CaseSection2_card">
                            <div></div>
                            <h4>{item.des1}</h4>
                            <p className="des2">{item.des2}</p>
                            <p className="des3">{item.des3}</p>
                            <button onClick={()=>CaseFunc(item)}>{item.button}</button>
                        </div>
                        )
                    })
                    
                }
                   
                    <div className= {`CaseSection2Modal ${casee ? "active" : ""}`}>
                          <h4 onClick={()=>setCase(false)}>X</h4>
                        <div className="modal_bodyy">
                            <h4>{arr.des1}</h4>
                            <p className="des2">{arr.des2}</p> 
                        </div>
                    </div>
              
            </div>
           </>
    )
}