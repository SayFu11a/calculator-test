import React, { useState, useEffect } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import { parseExpression } from './utils/parser';
import './App.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      setInput(parseExpression(input));
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      setInput(parseExpression(input));
    } else if (event.key === 'Escape') {
      setInput('');
    } else {
      const validKeys = '0123456789+-*/.%()';
      if (validKeys.includes(event.key)) {
        setInput((prev) => prev + event.key);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [input]);

  return (
    <div className="app">
      <Display value={input} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default App;
