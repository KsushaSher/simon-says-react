import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { generateSequence } from '../../utils/generateSequence';

export type LevelProp = 'easy' | 'medium' | 'hard';
export type StatusProp = 'pending' | 'win' | 'error' | 'completed game';
export interface GameDataState {
  isGameStarted: boolean;
  round: number;
  level: LevelProp;
  repeatAgain: boolean;
  sequenceCharacters: string[];
  activeCharacter: string | null;
  isPlayingHighlight: boolean;
  status: StatusProp;
  inputValue: string;
}

const initialState: GameDataState = {
  isGameStarted: false,
  round: 1,
  level: 'easy',
  repeatAgain: true,
  sequenceCharacters: [],
  activeCharacter: null,
  isPlayingHighlight: false,
  status: 'pending',
  inputValue: '',
};

const gameDataSlice = createSlice({
  name: 'gameData',
  initialState,
  reducers: {
    setGameStarted(state, action: PayloadAction<boolean>) {
      state.isGameStarted = action.payload;
    },
    setRound(state, action: PayloadAction<number>) {
      state.round = action.payload;
    },
    setLevel(state, action: PayloadAction<LevelProp>) {
      state.level = action.payload;
    },
    setRepeatAgain(state, action: PayloadAction<boolean>) {
      state.isGameStarted = action.payload;
    },
    setSequenceCharacters(state, action: PayloadAction<string[]>) {
      state.sequenceCharacters = action.payload;
    },
    setActiveCharacter(state, action: PayloadAction<string | null>) {
      state.activeCharacter = action.payload;
    },
    setIsPlayingHighlight(state, action: PayloadAction<boolean>) {
      state.isPlayingHighlight = action.payload;
    },
    checkValue(state) {
      const sequence = state.sequenceCharacters.join('');
      const contains = sequence.startsWith(state.inputValue);
      const fullMatch = sequence === state.inputValue;

      if (!contains) {
        state.status = 'error';
      } else if (fullMatch) {
        state.status = 'win';
      } else {
        state.status = 'pending';
      }
    },
    genSequenceСharacters(state) {
      state.sequenceCharacters = generateSequence(state.level, state.round);
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    switchNextLevel(state) {
      state.inputValue = '';
      state.status = 'pending';

      if (state.round < 5) {
        state.round += 1;
      } else if (state.round === 4) {
        state.status = 'completed game';
      }

      state.sequenceCharacters = generateSequence(state.level, state.round);
      state.repeatAgain = true;
    },
    startNewGame(state) {
      state.inputValue = '';
      state.status = 'pending';
      state.isGameStarted = false;
      state.round = 1;
      state.repeatAgain = true;
    },
  },
});

export const {
  setGameStarted,
  setRound,
  setLevel,
  setRepeatAgain,
  setSequenceCharacters,
  setActiveCharacter,
  setIsPlayingHighlight,
  checkValue,
  genSequenceСharacters,
  setInputValue,
  switchNextLevel,
  startNewGame,
} = gameDataSlice.actions;

export default gameDataSlice.reducer;
