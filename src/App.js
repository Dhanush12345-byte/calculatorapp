import React,{useState} from 'react';
import './App.css';
const App = () =>{
    const[input,setInput] = useState('');
    const[result,setResult] = useState(0);
    const changeHandler = e =>{
        setInput(e.target.value)
    }
    return(
        <div>
            <center>
                <input type='text' size='50' name='input' value={input} onChange={changeHandler}/><br   /><br   />
                <button onClick={()=>setResult(eval(input))}>Result</button><br   /><br   />
                <h1>Result is: {result}</h1>
                <button onClick={()=>setInput(input+'0')}>0</button>
                <button onClick={()=>setInput(input+'1')}>1</button>
                <button onClick={()=>setInput(input+'2')}>2</button>
                <button onClick={()=>setInput(input+'3')}>3</button>
                <button onClick={()=>setInput(input+'4')}>4</button><br   /><br   />
                <button onClick={()=>setInput(input+'5')}>5</button>
                <button onClick={()=>setInput(input+'6')}>6</button>
                <button onClick={()=>setInput(input+'7')}>7</button>
                <button onClick={()=>setInput(input+'8')}>8</button>
                <button onClick={()=>setInput(input+'9')}>9</button><br   /><br   />
                <button onClick={()=>setInput(input+'+')}>+</button>
                <button onClick={()=>setInput(input+'-')}>-</button>
                <button onClick={()=>setInput(input+'*')}>*</button>
                <button onClick={()=>setInput(input+'/')}>/</button>
                <button onClick={()=>setInput('')}>CLEAR</button>
            </center>
        </div>
    )
}
export default App;