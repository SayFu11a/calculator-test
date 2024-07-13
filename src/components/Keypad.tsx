import React from 'react';
import Button from './Button';

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onButtonClick }) => {
  const buttons = [
    { value: 'C', className: 'special' },
    { value: '√', className: 'special' },
    { value: '%', className: 'special' },
    { value: '/', className: '' },
    { value: '7', className: '' },
    { value: '8', className: '' },
    { value: '9', className: '' },
    { value: '*', className: '' },
    { value: '4', className: '' },
    { value: '5', className: '' },
    { value: '6', className: '' },
    { value: '-', className: '' },
    { value: '1', className: '' },
    { value: '2', className: '' },
    { value: '3', className: '' },
    { value: '+', className: '' },
    { value: '00', className: 'double' },
    { value: '0', className: '' },
    { value: '.', className: '' },
    { value: '=', className: 'equals' },
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, idx) => (
        <Button key={idx} value={btn.value} onClick={onButtonClick} className={btn.className} />
      ))}
    </div>
  );
};

export default Keypad;
