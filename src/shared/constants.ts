export const LEVELS = {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
};

export const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
export const LETTERS = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
];

export const KEYBOARD = {
  [LEVELS.easy]: NUMBERS,
  [LEVELS.medium]: LETTERS,
  [LEVELS.hard]: NUMBERS.concat(LETTERS),
};
export const MESSAGE = {
  victory: 'You passed the round!',
  completedGame: 'Congratulations! You won.',
  error: 'Error!',
};
