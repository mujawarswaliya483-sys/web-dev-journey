const { createElement } = require("react");

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

     let delbtn=document.createElement("button");
     delbtn.innerText="delete";
     delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    console.log(event.target);
    console.log("button clicked");
})

let delbtn = document.querySelectorAll(".delete");
for(delbtn of delbtns){
    delbtn.addEventListener("click",function(){
        let parent = this.parentElement;
        console.log(parent);
        parent.remove();

    });
}