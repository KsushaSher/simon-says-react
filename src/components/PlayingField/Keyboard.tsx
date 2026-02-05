import { LETTERS, NUMBERS } from '../../shared/constants';
import { useAppSelector } from '../../store/hooks';
import { selectLevel } from '../../store/selectors/gameData.selectors';
import Character from './Character';
import s from './PlayingField.module.scss';

interface KeyboardProps {
  onInput: (char: string) => void;
}

const Keyboard = ({ onInput }: KeyboardProps) => {
  const level = useAppSelector(selectLevel);

  return (
    <>
      {level === 'easy' && (
        <div className={s['numbers']}>
          {NUMBERS.map((num) => (
            <Character char={num} key={num} onClick={onInput} />
          ))}
        </div>
      )}

      {level === 'medium' && (
        <div className={s['letters']}>
          {LETTERS.map((char) => (
            <Character char={char} key={char} onClick={onInput} />
          ))}
        </div>
      )}

      {level === 'hard' && (
        <>
          <div className={s['numbers']}>
            {NUMBERS.map((num) => (
              <Character char={num} key={num} onClick={onInput} />
            ))}
          </div>
          <div className={s['letters']}>
            {LETTERS.map((char) => (
              <Character char={char} key={char} onClick={onInput} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Keyboard;
