// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
// import app from './apps.svg';

function App() {
  let [previousOperand, getName] = useState('0')
  let [currentOutput, eval] = 0;

  const getVal = (e) => {
    getName(previousOperand + e.target.textContent)
  }
  return (
    <div className="calculatorGrid">
      <div className="darkGreen">
        <div className="previousOperand">{previousOperand}</div>
        <div className="output">{currentOutput}</div>
      </div>
      <div className="row-1 fullBlock buttonGrid">
        <span className="column12 blocks center left" onClick={getVal}>AC</span>
        <span className="column11 blocks center" onClick={getVal}>DEL</span>
        <span className="column11 blocks center right" onClick={getVal}>÷</span>
      </div>
      <div className="row-2 fullBlock buttonGrid">
        <span className="column11 blocks center left" onClick={getVal}>1</span>
        <span className="column11 blocks center" onClick={getVal}>2</span>
        <span className="column11 blocks center" onClick={getVal}>3</span>
        <span className="column11 blocks center right" onClick={getVal}>*</span>
      </div>
      <div className="row-3 fullBlock buttonGrid">
        <span className="column11 blocks center left" onClick={getVal}>4</span>
        <span className="column11 blocks center" onClick={getVal}>5</span>
        <span className="column11 blocks center" onClick={getVal}>6</span>
        <span className="column11 blocks center right" onClick={getVal}>+</span>
      </div>
      <div className="row-4 fullBlock buttonGrid">
        <span className="column11 blocks center left" onClick={getVal}>7</span>
        <span className="column11 blocks center" onClick={getVal}>8</span>
        <span className="column11 blocks center" onClick={getVal}>9</span>
        <span className="column11 blocks center right" onClick={getVal}>-</span>
      </div>
      <div className="row-5 fullBlock buttonGrid">
        <span className="column11 blocks center left" onClick={getVal}>.</span>
        <span className="column11 blocks center" onClick={getVal}>0</span>
        <span className="column12 blocks center right">=</span>
      </div>
    </div>
  );
}

export default App;
