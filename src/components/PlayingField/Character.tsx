import type { JSX } from 'react';
import clsx from 'clsx';
import s from './PlayingField.module.scss';

interface CharacterProps {
  char: string;
  active: boolean;
  onClick: (char: string) => void;
}

const Character = ({ char, active, onClick }: CharacterProps): JSX.Element => {
  return (
    <div
      className={clsx(s.char, active && s['active-char'])}
      onClick={() => onClick(char)}
    >
      {char}
      {active}
    </div>
  );
};

export default Character;
