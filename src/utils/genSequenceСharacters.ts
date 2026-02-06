import { keyboardByLevel } from '../shared/constants';
import type { LevelProp } from '../store/slices/gameDataSlice';

export const genSequenceСharacters = (
  level: LevelProp,
  round: number
): string[] => {
  const sourceArray = keyboardByLevel[level];
  const randomCharArray = sourceArray.slice().sort(() => Math.random() - 0.5);
  const randomCharArrayByRound = randomCharArray.slice(0, round * 2);

  return randomCharArrayByRound;
};
