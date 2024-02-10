import { useState } from 'react';
import '../css/calcc.css';

const Calc = () => {
  const[height,setHeight]=useState("");
   const[weight,setWeight]=useState("");
   const[bmi,setBmi]=useState(null);
   const[bmistatus,setBmistatus]=useState('');
   const[error,setError]=useState('');
  

   const CalculateBmi=()=> {
    const isvalidHeight= /^\d+$/.test(height);
    const isvalidWeight= /^\d+$/.test(weight);
      if(isvalidHeight && isvalidWeight)  {
         const heightInMeter= height/100;
         const bmiValue= weight/(heightInMeter * heightInMeter);
         setBmi(bmiValue.toFixed(2));
         if(bmiValue < 18.5){
          setBmistatus('underweight');
         }else if(bmiValue>= 18.5  && bmiValue < 24.9){
          setBmistatus('Normal weight');
         }else if(bmiValue>= 25  && bmiValue < 29.9){
          setBmistatus('Over weight');
         }else if(bmiValue>= 30  && bmiValue < 39.9){
          setBmistatus('Obese weight');
         }else {
          setBmistatus('Morbidly obese');
         }
          setError('');
         }else{
        setBmi(null);
        setBmistatus('');
        setError('Please Enter the valid numeric value for height and weight');
      }
    };
    const reset=()=>{
      setHeight("");
      setWeight("");
      setBmi(null);
      setBmistatus("");
    }
   
  return (
    <div className='container'>
      <div className='box'></div>
      <div className="fcalc">

        <h2>BMI CALCULATOR</h2>
        {error  && <p className='error'>{error} </p>}
        <div className='height'>
        <label htmlFor='inputht' className="inputdata" >Height(cm)</label>
        <input type="number" placeholder="Enter height" id="inputht"  onChange={(e)=>setHeight(e.target.value)} value={height} ></input>
        </div>
        <div className='weight'>
        <label htmlFor='inputwt' className="inputdata" >Weight(kg)</label>
        <input type="number" placeholder="Enter weight" value={weight} id="inputwt"onChange={(e)=>setWeight(e.target.value)} ></input>
        </div>
        <button className="calculate" onClick={CalculateBmi}>CALCULATE BMI</button>
        <button className='clear' onClick={reset}>Reset</button>
          {bmi!== null && (
            <div className="result">
              <p>Your BMI is {bmi} </p>
              <p>Status  {bmistatus}</p>
            </div>)}
            
      </div>
     </div>
  );
}

export default Calc
