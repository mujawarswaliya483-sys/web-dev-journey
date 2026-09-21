import {useState} from "react";
export default function LikeButton(){
    let [isLiked,setIsLiked] = useState(false);
    // let clicked = ()=>{console.log("clicked")}
    let toggleLike = ()=>{
       setIsLiked(!isLiked);
    };


    let likeStyle = {color: "red"};
    return(
        <div>
        <h1 onClick={toggleLike}>
           {
            isLiked ? <i class="fa-solid fa-heart-circle-check" style={likeStyle}></i>:
            <i className="fa-regular fa-heart"></i>
            
           }
           
        </h1>

        </div>
    );
}