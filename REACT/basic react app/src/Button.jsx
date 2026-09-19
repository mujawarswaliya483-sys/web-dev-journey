function PrintHello(event) {
    console.log("Hello");
    // console.log(event);
}
function PrintBye(){
    console.log("Bye");
}
export default function Button(){
    return(
        <div>
            <button onClick={PrintHello()}>Click Me!</button>
            {/* <button onMouseOver={}></button> */}
        </div>
    );
}