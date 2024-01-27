import React, { useState } from 'react';
import './App.css';



function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [conversionMode, setConversionMode] = useState(false);

  const handleButtonClick = (value) => {
    if (!conversionMode) {
      if (value === '=') {
        calculateResult();
      } else if (value === 'C') {
        clearInput();
      } else if (value === 'conv') {
        setConversionMode(true);
      } else {
        setInput((prevInput) => prevInput + value);
      }
    } else {
      // Handle conversion mode
      setInput(value); // For simplicity, set input directly
      setConversionMode(false); // Exit conversion mode after selecting conversion
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleConversion = (unit) => {
    // Perform conversion based on selected unit
    const value = parseFloat(input);

    switch (unit) {
      case 'cmToM':
        setResult((value / 100).toFixed(2) + ' m');
        break;
      case 'mToCm':
        setResult((value * 100).toFixed(2) + ' cm');
        break;
      case 'mToKm':
        setResult((value / 1000).toFixed(2) + ' km');
        break;
      case 'kmToM':
        setResult((value * 1000).toFixed(2) + ' m');
        break;
      case 'literToGallon':
        setResult((value * 0.264172).toFixed(2) + ' gal');
        break;
      case 'kgToPound':
        setResult((value * 2.20462).toFixed(2) + ' lbs');
        break;
      case 'minutesToHr':
        setResult((value / 60).toFixed(2) + ' hr');
        break;
      case 'secondToMinute':
        setResult((value / 60).toFixed(2) + ' min');
        break;
      case 'hrToDay':
        setResult((value / 24).toFixed(2) + ' days');
        break;
      case 'dayToHr':
        setResult((value * 24).toFixed(2) + ' hr');
        break;
      default:
        setResult('Invalid Conversion');
    }
    setConversionMode(false); // Exit conversion mode after conversion
  };

  return (
    <div className="calculator">
      <div/>
      <h1>MetricMaster</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter expression"
        disabled={conversionMode} // Disable input in conversion mode
      />
      <div className="buttons">
        {!conversionMode ? (
          <>
            <div className="row">
              <button className="gray" onClick={() => handleButtonClick('C')}>C</button>
              <button onClick={() => handleButtonClick('0')}>0</button>
              <button className="gray" onClick={() => handleButtonClick('conv')}>Conv</button>
              <button className="orange" onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('1')}>1</button>
              <button onClick={() => handleButtonClick('2')}>2</button>
              <button onClick={() => handleButtonClick('3')}>3</button>
              <button className="orange" onClick={() => handleButtonClick('%')}>%</button>
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('4')}>4</button>
              <button onClick={() => handleButtonClick('5')}>5</button>
              <button onClick={() => handleButtonClick('6')}>6</button>
              <button className="orange" onClick={() => handleButtonClick('-')}>-</button>
              
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('7')}>7</button>
              <button onClick={() => handleButtonClick('8')}>8</button>
              <button onClick={() => handleButtonClick('9')}>9</button>
              <button className="orange" onClick={() => handleButtonClick('*')}>*</button>
            </div>
            <div className="row">
              <button onClick={() => handleButtonClick('.')}>.</button>
              <button className="orange" onClick={() => handleButtonClick('/')}>/</button>
              <button className="blue" onClick={() => handleButtonClick('=')}>=</button>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <button onClick={() => handleConversion('cmToM')}>cm to m</button>
              <button onClick={() => handleConversion('mToCm')}>m to cm</button>
            </div>
            <div className="row">
              <button onClick={() => handleConversion('mToKm')}>m to km</button>
              <button onClick={() => handleConversion('kmToM')}>km to m</button>
            </div>
            <div className="row">
              <button onClick={() => handleConversion('literToGallon')}>liter to gal</button>
              <button onClick={() => handleConversion('kgToPound')}>kg to lbs</button>
            </div>
            <div className="row">
              <button onClick={() => handleConversion('minutesToHr')}>min to hr</button>
              <button onClick={() => handleConversion('secondToMinute')}>s to min</button>
            </div>
            <div className="row">
              <button onClick={() => handleConversion('hrToDay')}>hr to days</button>
              <button onClick={() => handleConversion('dayToHr')}>days to hr</button>
            </div>
            <div className="row">
              <button onClick={() => setConversionMode(false)}>Cancel</button>
            </div>
          </>
        )}
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default App;
