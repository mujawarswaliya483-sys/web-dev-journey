// to-do-app

// list-to show all todos
// add - to add a todo
// delet - to delet a task
// quit - to exit the to do

let todo = [];

let request = prompt("please enter your request");

while(true){
    if(request == "quit"){
        console.log("quiting the app");
        break;
}
   if(request == "list"){
    console.log("**********");
    for(let i=0; i<todo.length; i++){
        console.log(`${i}: ${todo[i]}`);
    }
    console.log("**********");
   }else if(request == "add"){
    let newTask = prompt("please enter the new task");
    todo.push(newTask);
    console.log("task added");
} else if(request == "delet"){
    let index = prompt("please enter the index of the task to delet");
    todo.splice(index, 1);
    console.log("task deleted");
}else{
    console.log("invalid request");
}
request = prompt("please enter your request");
}
