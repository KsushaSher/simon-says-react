import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type LevelProp = 'easy' | 'medium' | 'hard';
export interface GameDataState {
  isGameStarted: boolean;
  round: number;
  level: LevelProp;
  retryAvailable: boolean;
  sequenceСharacters: string[] | [];
  activeСharacter: string | null;
  isPlayingHighlight: boolean;
  displaySymbols: boolean;
}

const initialState: GameDataState = {
  isGameStarted: false,
  round: 1,
  level: 'easy',
  retryAvailable: true,
  sequenceСharacters: [],
  activeСharacter: null,
  isPlayingHighlight: false,
  displaySymbols: false,
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
    setRetryAvailable(state, action: PayloadAction<boolean>) {
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
  },
});

export const {
  setGameStarted,
  setRound,
  setLevel,
  setRetryAvailable,
  setSequenceCharacters,
  setActiveCharacter,
  setIsPlayingHighlight,
  setDisplaySymbols,
} = gameDataSlice.actions;

export default gameDataSlice.reducer;
