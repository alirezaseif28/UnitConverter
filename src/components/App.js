import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [amount, setAmount] = useState(0);
  
  const items=[{id:1,factor:"1",name:'Meter'},{id:2,factor:"100",name:'CetiMeter'},{id:3,factor:"1000",name:'Millimeter'},{id:4,factor:"0.001",name:'Kilometer'}];
const [frominput, setFrom] = useState("1");
const [to, setTo] = useState("1");

  const handleChange = (event,setValue) => {
        setValue(event.target.value);
    };

const Convert =()=>{
let itemFrom = items.find(x=>x.factor == frominput);
let itemTo = items.find(x=>x.factor == to);
let fromFactor=itemFrom.factor;
let toFactor=itemTo.factor;
let amountInput=!!parseFloat(amount)?parseFloat(amount):0;
setResult((amountInput * parseFloat(toFactor) / parseFloat(fromFactor)).toString());
}
  return (
    <>
      <div className="converter-form">
       {<Input label="Amount" onChange={event => handleChange(event,setAmount)}></Input>}

        <div className="row">
          <Select label="From" items={items} onChange={event => handleChange(event,setFrom)}></Select>
          <Select label="To" items={items} onChange={event => handleChange(event,setTo)}></Select>

          <button onClick={Convert}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
