import React , {useState} from 'react';
import './App.css';

function App() {

const [minVal, setminVal] = useState(0);
const [maxVal, setMaxVal] = useState(10);
const [randomNumber, setRandomNumber] = useState(5);
const giveRandomNumber=()=>{
  setRandomNumber(Math.floor(Math.random()*(maxVal-minVal +1)+minVal))
}

  return (
    <div className="hero">
    <div className="container">
      <div className="randomNumber">
        <p>Random Number: <span> {randomNumber} </span></p>
      </div>
      <div className="numContainer">
        <div>
        <p>Min:</p>
        <input type="text"
        value={minVal}
        onChange={(e)=>setminVal(e.target.value)}  />
        <div>
        <p>Max:</p>
        <input type="text"
        value={maxVal}
        onChange={(e)=>setMaxVal(e.target.value)} />
      </div>
        </div>
      </div>
      
      <div >
        <button onClick={giveRandomNumber}>Get Random Number</button>
      </div>
    </div>
    </div>
  );
}

export default App;
