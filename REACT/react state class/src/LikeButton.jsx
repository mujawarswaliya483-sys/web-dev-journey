import {useState} from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked] = useState(false);
    // let clicked = ()=>{console.log("clicked")}
    let toggleLike = ()=>{
       setIsLiked(!isLiked);
        
    };
    return(
        <div>
        <h1 onClick={toggleLike}>
            {
            isLiked ? (<i className="fa-regular fa-heart"></i>
                
            )
            }
            
        </h1>

        </div>
    )
}