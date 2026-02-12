import { useCallback, useEffect } from 'react';
import Keyboard from './Keyboard';
import Input from './Input';
import s from './PlayingField.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { checkValue, setInputValue } from '../../store/slices/gameDataSlice';
import {
  selectCompletedGame,
  selectErrorStatus,
  selectGameStarted,
  selectInputValue,
  selectPendingStatus,
  selectWinStatus,
} from '../../store/selectors/gameData.selectors';
import { MESSAGE } from '../../shared/constants';

const PlayingField = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector(selectInputValue);
  const gameStarted = useAppSelector(selectGameStarted);
  const vin = useAppSelector(selectWinStatus);
  const error = useAppSelector(selectErrorStatus);
  const completedGame = useAppSelector(selectCompletedGame);
  const pendingStatus = useAppSelector(selectPendingStatus);

  const addChar = useCallback(
    (char: string) => {
      const newValue = inputValue + char;

      dispatch(setInputValue(newValue));
      dispatch(checkValue());
    },
    [dispatch, inputValue]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length !== 1) {
        return;
      }

      if (e.key.length === 1) {
        addChar(e.key);
      }
    };

    if (gameStarted && pendingStatus) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [addChar, gameStarted, pendingStatus]);

  return (
    <div className={s['playing-field']}>
      {error && <div className={s['error-message']}>{MESSAGE.error}</div>}
      {vin && <div className={s['victory-message']}>{MESSAGE.victory}</div>}
      {completedGame && (
        <div className={s['victory-message']}>{MESSAGE.completedGame}</div>
      )}
      {gameStarted && <Input />}

      <Keyboard onInput={addChar} />
    </div>
  );
};

export default PlayingField;
