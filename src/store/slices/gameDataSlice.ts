import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type LevelProp = 'easy' | 'medium' | 'hard';
export type StatusProp = 'pending' | 'win' | 'error';
export interface GameDataState {
  isGameStarted: boolean;
  round: number;
  level: LevelProp;
  repeatAgain: boolean;
  sequenceСharacters: string[];
  activeСharacter: string | null;
  isPlayingHighlight: boolean;
  displaySymbols: boolean;
  isVictoryMessage: string;
  isErrorMessage: string;
  status: StatusProp;
}

const initialState: GameDataState = {
  isGameStarted: false,
  round: 1,
  level: 'easy',
  repeatAgain: true,
  sequenceСharacters: [],
  activeСharacter: null,
  isPlayingHighlight: false,
  displaySymbols: false,
  isVictoryMessage: '',
  isErrorMessage: '',
  status: 'pending',
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
      state.sequenceСharacters = action.payload;
    },
    setActiveCharacter(state, action: PayloadAction<string | null>) {
      state.activeСharacter = action.payload;
    },
    setIsPlayingHighlight(state, action: PayloadAction<boolean>) {
      state.isPlayingHighlight = action.payload;
    },
    setDisplaySymbols(state, action: PayloadAction<boolean>) {
      state.displaySymbols = action.payload;
    },
    setIsVictoryMessage(state, action: PayloadAction<string>) {
      state.isVictoryMessage = action.payload;
    },
    setIsErrorMessage(state, action: PayloadAction<string>) {
      state.isErrorMessage = action.payload;
    },
    checkValue(state, action: PayloadAction<string>) {
      const sequence = state.sequenceСharacters.join('');
      const contains = sequence.startsWith(action.payload);
      const fullMatch = sequence === action.payload;

      if (!contains) {
        state.status = 'error';
      } else if (fullMatch) {
        state.status = 'win';
      } else {
        state.status = 'pending';
      }
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
  setDisplaySymbols,
  setIsVictoryMessage,
  setIsErrorMessage,
  checkValue,
} = gameDataSlice.actions;

export default gameDataSlice.reducer;
