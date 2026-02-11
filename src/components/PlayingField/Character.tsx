import type { JSX } from 'react';
import clsx from 'clsx';
import s from './PlayingField.module.scss';

interface CharacterProps {
  char: string;
  active: boolean;
  onClick: (char: string) => void;
  gameStarted: boolean;
}

const Character = ({
  char,
  active,
  onClick,
  gameStarted,
}: CharacterProps): JSX.Element => {
  return (
    <button
      className={clsx(s.char, active && s['active-char'])}
      onClick={() => onClick(char)}
      disabled={gameStarted}
    >
      {char}
    </button>
  );
};

export default Character;
