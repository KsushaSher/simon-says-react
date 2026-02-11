import { useCallback, useEffect, useState } from 'react';
import Keyboard from './Keyboard';
import Input from './Input';
import s from './PlayingField.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { checkValue } from '../../store/slices/gameDataSlice';
import {
  selectErrorStatus,
  selectPendingStatus,
  selectWinStatus,
} from '../../store/selectors/gameData.selectors';

const PlayingField = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const addChar = useCallback(
    (char: string) => {
      setInputValue((prev) => {
        const newValue = prev + char;

        dispatch(checkValue(newValue));

        return newValue;
      });
    },
    [dispatch]
  );
  const pending = useAppSelector(selectPendingStatus);
  const vin = useAppSelector(selectWinStatus);
  const error = useAppSelector(selectErrorStatus);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1) {
        addChar(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [addChar]);

  return (
    <div className={s['playing-field']}>
      {error && 'error'}
      {vin && 'vin'}
      {pending && 'pending'}
      <Input value={inputValue} />
      <Keyboard onInput={addChar} />
    </div>
  );
};

export default PlayingField;
