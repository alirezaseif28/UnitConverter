import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(0);
  
  
const [frominput, setFrom] = useState("1");
const [to, setTo] = useState("1");

  const handleChange = (event,setValue) => {
        setValue(event.target.value);
    };

const Convert =(e)=>{
e.preventDefault();
let itemFrom = units.find(x=>x.factor == frominput);
let itemTo = units.find(x=>x.factor == to);
let fromFactor=itemFrom.factor;
let toFactor=itemTo.factor;
let amountInput=!!parseFloat(amount)?parseFloat(amount):0;
setResult((amountInput * parseFloat(fromFactor) / parseFloat(toFactor)).toString());
}

  return (
    <>
      <div className="converter-form">
       <Input label="Amount" onChange={event=>handleChange(event,setAmount)} />
        <div className="row">
          <Select label="From" items={units} onChange={event=>handleChange(event,setFrom)} />
          <Select label="To" items={units} onChange={event=>handleChange(event,setTo)} />
          <button type="button" onClick={Convert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
