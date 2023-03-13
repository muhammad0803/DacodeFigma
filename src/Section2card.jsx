import section2card from './images/section2card.jpg'
import section3card from './images/tab31.jpg'
import React ,{ useState }  from 'react'
const  data2=[
  {
    img:section2card,
    des1:"WordPress Site",
    des2:"Lorem ipsum dolor sit amet,  consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut ",
    des3:"Read More",
  },
  {
    img:section2card,
    des1:"WordPress Site",
    des2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam me nonumy eirmod tempor invidunt ut ",
    des3:"Read More",
  },{
    img:section2card,
    des1:"WordPress Site",
    des2:"Lorem ipsum dolor sit amet,  consetetur sadipscing elitr, sed diam me nonumy eirmod tempor invidunt ut ",
    des3:"Read More",
  },{
    img:section2card,
    des1:"WordPress Site",
    des2:"Lorem ipsum dolor sit amet,  consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut ",
    des3:"Read More",
  },{
    img:section2card,
    des1:"WordPress Site",
    des2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  nonumy eirmod tempor invidunt ut ",
    des3:"Read More",
  },{
    img:section2card,
    des1:"WordPress Site",
    des2:"Lorem ipsum dolor sit amet,  consetetur sadipscing elitr, sed diam me nonumy eirmod tempor invidunt ",
    des3:"Read More",

  },
]


export const Section2card=()=>{
  const [modal,setmodal] =useState(false)
  const [shov,setshov]=useState({})

   const show=(mot)=>{
   setmodal(true)
   setshov(mot)

  }

  return(
    <div className='section2_cards'>
     {
      data2.map((item)=>{
        return(
        <div className='section2card'>
          <div className='mmmm'></div>
          <div className='item'><img src={item.img} alt="" /></div>
          <h3>{item.des1}</h3>
          <p className='des2'>{item.des2}</p>
          <p onClick={()=>show(item)}>{item.des3}</p>
        </div>
        )
      })
     }
          
          <div className={`modal ${modal ? "active" : "" }`}>
       <div className="modal_body">
        <h4 onClick={()=> setmodal(false) }>X</h4>
        <div>
          <p className='des1'>{shov.des1}</p>
          <p className='des2'>{shov.des2}</p>
        </div>
       </div>
          </div>
    
    </div>
  )
}

const data3=[
  {
    img:section3card,
    des1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Morbi cursus vitae tortor sapien, lectus scelerisque   <br /> porttitor. Dolor nulla bibendum "
  },{
    img:section3card,
    des1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Morbi cursus vitae tortor sapien, lectus scelerisque   <br /> porttitor. Dolor nulla bibendum "
  },{
    img:section3card,
    des1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Morbi cursus vitae tortor sapien, lectus scelerisque   <br /> porttitor. Dolor nulla bibendum "
  },
  
  ]

export const Section3card=()=>{
  return(
    <div className='section3cards'>

    {
       data3.map((item)=>{
          <div className="section3card">
            <div><img src={item.img} alt="" /></div>
            <p>{item.des1}</p>
          </div>
       })   
    }
    </div>
  )
}