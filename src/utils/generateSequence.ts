import { KEYBOARD } from '../shared/constants';
import type { LevelProp } from '../store/slices/gameDataSlice';

export const generateSequence = (level: LevelProp, round: number) => {
  const keyboardByLevel = KEYBOARD[level];
  const randomCharArray = keyboardByLevel
    .slice()
    .sort(() => Math.random() - 0.5);

  return randomCharArray.slice(0, round * 2);
};
