import '../Tab/Tab.css'
import { useState } from 'react'
export const Tab=()=>{
    const [tab,settab]=useState(1)
    return(
        <div className="tab">
            <div className="tab_head">
                <div onClick={()=> settab(1)}>tab1</div>
                <div onClick={()=> settab(2)}>tab2</div>
                <div onClick={()=>settab(3)}>tab3</div>
            </div>
            <div className="tab_body">
                <div className={`tabs ${tab===1 ? "active" : ""}`}>
                    <h2>Tab1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio ducimus optio! Animi labore dolores fugiat dolorum ipsa officia deleniti repellat mollitia tempora porro minus facere aliquid veniam nesciunt suscipit nemo, iure eos excepturi adipisci. In inventore voluptatem odit sit nostrum, laboriosam possimus, enim doloremque, aspernatur tempora vero numquam ex?</p>

                </div>
                <div className={`tabs ${tab===2 ? "active" : ""}`}>
                    <h2>Tab2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio ducimus optio! Animi labore dolores fugiat dolorum ipsa officia deleniti repellat mollitia tempora porro minus facere aliquid veniam nesciunt suscipit nemo, iure eos excepturi adipisci. In inventore voluptatem odit sit nostrum, laboriosam possimus, enim doloremque, aspernatur tempora vero numquam ex?</p>
                    
                </div>
                <div className={`tabs ${tab===3 ? "active" : ""}`}>
                    <h2>tab3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio ducimus optio! Animi labore dolores fugiat dolorum ipsa officia deleniti repellat mollitia tempora porro minus facere aliquid veniam nesciunt suscipit nemo, iure eos excepturi adipisci. In inventore voluptatem odit sit nostrum, laboriosam possimus, enim doloremque, aspernatur tempora vero numquam ex?</p>
                    
                </div>
            </div>
        </div>
    )
}