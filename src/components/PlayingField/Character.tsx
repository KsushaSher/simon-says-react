import type { JSX } from 'react';
import s from './PlayingField.module.scss';

interface CharacterProps {
  char: string;
  onClick: (char: string) => void;
}

const Character = ({ char, onClick }: CharacterProps): JSX.Element => {
  return (
    <div className={s.char} data-key={char} onClick={() => onClick(char)}>
      {char}
    </div>
  );
};

export default Character;
