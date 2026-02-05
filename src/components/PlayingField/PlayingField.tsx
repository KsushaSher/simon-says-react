import { useEffect, useState } from 'react';
import Keyboard from './Keyboard';
import Input from './Input';

const PlayingField = () => {
  const [inputValue, setInputValue] = useState('');

  const addChar = (char: string) => {
    setInputValue((prev) => prev + char);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        addChar(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Input value={inputValue} />
      <Keyboard onInput={addChar} />
    </>
  );
};

export default PlayingField;
