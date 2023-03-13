import { useState } from "react";
import "../code/CodeSection2.css"
import mask from '../images/Mask.jpg'
import {BiSearch} from "react-icons/bi"
import '../code/code.css'
export const CodeSection2=()=>{
   
    const [data,setData]=useState([
        {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            category:"iphone"

        },
        {
            img:mask,
            des1:"Dooo millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            category:"samsung"

        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
            ,
            category:"iphone"


        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"samsung"
        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"iphone"

        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"samsung"
        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"iphone"

        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"samsung"
        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"iphone"

        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"samsung"
        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"iphone"

        }, {
            img:mask,
            des1:"Do millennials care about saving?",
            des2:"Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna."
,
            category:"samsung"
        },
    ])
      
      const [modal , setModal]=useState(false)
      const[show , setShow]=useState({})
      const[input,Setinput]=useState("")
      const func=(func)=>{
        setShow(func)
        setModal(true)
      }
    return(
         <>
        <div className="code_section1">
        <h1>News & Articles</h1>
        <p className="p">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy eirmod tempor invidunt ut labore et.</p>
        <div className="input">
        <input type="text" placeholder="Search blog…" onChange={(e)=> Setinput((e.target.value.toLocaleLowerCase().trim()))} />
        <div><BiSearch /></div>
        </div>
      </div>
             
        <div className="codeSection2_cards">
            { 
                input.length > 0 ? data.filter(item =>
                     (item.category.toLocaleLowerCase().trim().indexOf(input) != -1) ||
                     (item.des1.toLocaleLowerCase().trim().indexOf(input) !=-1)
                     ) .length > 0 ?  data.filter(item =>
                        (item.category.toLocaleLowerCase().trim().indexOf(input) != -1) ||
                        (item.des1.toLocaleLowerCase().trim().indexOf(input) !=-1)
                        ).map((item)=>{
                    return(
                    <div className="codeSection2_card">
                        <div className="codeSection2_card_img"> <img src={item.img} alt="" /></div>
                        <h5>{item.des1}</h5>
                        <p>{item.des2}</p>
                        <button onClick={()=>func(item)}>Read More</button>
                    </div>
                    )
                }) : <div><h1>No found</h1></div> : data.map((item)=>{
                    return(
                    <div className="codeSection2_card">
                        <div className="codeSection2_card_img"> <img src={item.img} alt="" /></div>
                        <h5>{item.des1}</h5>
                        <p>{item.des2}</p>
                        <button onClick={()=>func(item)}>Read More</button>
                    </div>
                    )
                })
            }
            
            <div className={`modal ${modal ? "active" : ""}`}>
                <h3  onClick={()=>setModal(false)}>X</h3>
                <div className="codeSection2_modal_body">
                    <h5>{show.des1}</h5>
                    <p>{show.des2}</p>
                </div>
            </div>
            
        </div>
 

         </>

    )
}