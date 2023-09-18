
import { useState} from "react";
export default function App() {
  return(
    <DateCounter/>
    )
}

function DateCounter()
{
  
  const [step,setStep]=useState(1);
  const [count,setCount]=useState(0);
  
  function handleChangeStep(e)
  {
      setStep( Number(e.target.value))
  }



  function handleCountIncrease()
  {
        setCount((c)=>c+step);
  }
  function handleCountDecrease()
  {
        setCount((c)=>c-step);
  }

  function handleCountChange(e)
  {
        setCount(e.target.value)
  }

  function handleReset()
  {
    setCount(0)
    setStep(1)
  }

   
    
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + count);
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const month = monthsOfYear[currentDate.getMonth()];
      const dayOfMonth = currentDate.getDate();
      const year = currentDate.getFullYear();
      const formattedDate = `${dayOfWeek} ${month} ${dayOfMonth} ${year}`;
      
 

    
  
  return (
  <center>
    <div >

    <div >
     <input type="range" min="0" max="10" value={step} onChange={  (e)=>handleChangeStep(e)}></input> <span>{step}</span>
    </div>
    <div >
      <button onClick={handleCountDecrease} >-</button>
      <input type="text" value={count} onChange={(e)=>handleCountChange(e)} ></input>
      <button onClick={handleCountIncrease}> +</button>
    </div>
     {
      count>0 && ( <p>{count} days from today is {formattedDate} </p>)
     }
     {
      count==0 && ( <p> Today is {formattedDate} </p>)
     }
     {
      count<0 && ( <p> {count} days ago was {formattedDate}</p>)
     }

     {
       (count!=0 || step!=1)? <button onClick={handleReset}>Reset</button>:""
     }
    </div>
    </center>

  )
}
