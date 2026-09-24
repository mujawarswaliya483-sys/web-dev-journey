import { useState } from "react";
export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0});
    
    let incCount=()=>{
        
        console.log('moves.blue = ${moves.blue}');
        setMoves({...moves, blue : moves.blue + 1});
    }
    return(

        <div>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onclick={incCount}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button>+1</button>
                <p>Green moves = {moves.green}</p>
                <button>+1</button>
                <p>Red moves = {moves.red}</p>
                <button>+1</button>
            </div>
        </div>
    );
}