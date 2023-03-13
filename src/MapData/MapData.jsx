import { useState } from "react";
import '../MapData/MapData.css'
export const MapData=()=>{
    const[data]=useState([
        {
            id:"0",
            name:"Ali",
            age:80,
        },
        {
            id:"1",
            name:"Vali",
            age:23,
        },  
        {
            id:"2",
            name:"komil",
            age:27,
        },  
        {
            id:"3",
            name:"qodir",
            age:29,
        },  
        {
            id:"4",
            name:"botir",
            age:25,
        },
        {
            id:"5",
            name:"botir",
            age:26,
        },
    ])
    const [modal,setModal]=useState(false)
    const [showData , setShowData]=useState({});
    const show =(user)=>{
        setShowData(user) 
        setModal(!modal)
    }
   return(
    <div className="grid">
        {
            data?.map((item,index)=>(
                <div>
                    <h3>{item.id}</h3>
                    <h1>{item?.name}</h1>
                    <button onClick={()=>show(item)}>Show</button>
                </div>
                
                
            ))
        }
        
        <div className={`modal ${modal ? 'active' : ''}`}>
                <div className="modal_body">    
                    <button className="close" onClick={()=>setModal(false)}>X</button>
                    <h1>{showData?.name}</h1>
                    <p>{showData?.age}</p>
                    <p>{showData?.id}</p>
                </div>
        </div>

    </div>
   )
}