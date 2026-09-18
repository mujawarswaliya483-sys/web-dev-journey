function PrintHello() {
    console.log("Hello");
}
function PrintBye(){
    console.log("Bye");
}
export default function Button(){
    return(
        <div>
            <button onClick={PrintHello()}>Click Me!</button>
            <button onClick={PrintBye}></button>
        </div>
    );
}