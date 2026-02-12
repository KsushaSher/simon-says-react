import { LETTERS, NUMBERS } from '../../shared/constants';
import { useAppSelector } from '../../store/hooks';
import {
  selectActiveСharacter,
  selectGameStarted,
  selectLevel,
  selectPendingStatus,
} from '../../store/selectors/gameData.selectors';
import Character from './Character';
import s from './PlayingField.module.scss';

interface KeyboardProps {
  onInput: (char: string) => void;
}

const Keyboard = ({ onInput }: KeyboardProps) => {
  const level = useAppSelector(selectLevel);
  const activeChar = useAppSelector(selectActiveСharacter);
  const gameStarted = useAppSelector(selectGameStarted);
  const pendingStatus = useAppSelector(selectPendingStatus);

  return (
    <>
      {level === 'easy' && (
        <div className={s['numbers']}>
          {NUMBERS.map((num) => (
            <Character
              char={num}
              key={num}
              active={activeChar === num}
              onClick={onInput}
              gameStarted={!gameStarted || !pendingStatus}
            />
          ))}
        </div>
      )}

      {level === 'medium' && (
        <div className={s['letters']}>
          {LETTERS.map((char) => (
            <Character
              char={char}
              key={char}
              active={activeChar === char}
              onClick={onInput}
              gameStarted={!gameStarted || !pendingStatus}
            />
          ))}
        </div>
      )}

      {level === 'hard' && (
        <>
          <div className={s['numbers']}>
            {NUMBERS.map((num) => (
              <Character
                char={num}
                key={num}
                active={activeChar === num}
                onClick={onInput}
                gameStarted={!gameStarted || !pendingStatus}
              />
            ))}
          </div>
          <div className={s['letters']}>
            {LETTERS.map((char) => (
              <Character
                char={char}
                key={char}
                active={activeChar === char}
                onClick={onInput}
                gameStarted={!gameStarted || !pendingStatus}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Keyboard;
