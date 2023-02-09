import React, { useState } from "react";
import './style/CalcStyle.css'

function App() {
  const [calc, setCalc] = useState("");
  const calcBut = [];
  
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "00", "000"].forEach((element) => {
    calcBut.push(
      
      <button
        onClick={(eve) => {setCalc(calc + eve.target.value)}}
        value={element}
        key={element}>
            {element}
      </button>

    );
  });

  return (
    <div className="all">
      <div>
          <input placeholder="0" disabled value={calc} />
      </div>
      <div className="allNumber">{calcBut}</div>
      <div className="allBut">
            <button style={{backgroundColor:'rgb(248, 255, 224)'}} onClick={() => setCalc("")} value="0">
              AC
            </button>
            <button onClick={eve => setCalc(calc + eve.target.value)} value='.'>
              .
            </button>
            <button onClick={eve => setCalc(calc + eve.target.value)} value="+">
              +
            </button>
            <button onClick={eve => setCalc(calc + eve.target.value)} value="-">
              -
            </button>
            <button onClick={eve => setCalc(calc + eve.target.value)} value="*">
              *
            </button>
            <button onClick={eve => setCalc(calc + eve.target.value)} value="/">
              /
            </button>
            
      
            <button style={{width: "282px"}}
                onClick={(err) => {
            try {
              setCalc(
                String(eval(calc)).length > 3 &&
                  String(eval(calc)).includes(".")
                  ? String(eval(calc).toFixed(3))
                  : String(eval(calc))
              );
            } catch (err) {
              console.log(err);
            }
          }}
          value="=">
              =
           </button>
      </div>
    </div>
  );
}
export default App;
