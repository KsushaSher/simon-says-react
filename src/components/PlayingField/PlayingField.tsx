import { useEffect, useState } from 'react';
import Keyboard from './Keyboard';
import Input from './Input';
import s from './PlayingField.module.scss';

const PlayingField = () => {
  const [inputValue, setInputValue] = useState<string>('');

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
    <div className={s['playing-field']}>
      <Input value={inputValue} />
      <Keyboard onInput={addChar} />
    </div>
  );
};

export default PlayingField;
