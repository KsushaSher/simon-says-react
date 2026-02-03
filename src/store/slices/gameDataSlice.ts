import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface GameDataState {
  isGameStarted: boolean;
  round: number;
  retryAvailable: boolean;
  sequenceСharacters: number[] | null;
  displaySymbols: boolean;
}

const initialState: GameDataState = {
  isGameStarted: false,
  round: 1,
  retryAvailable: true,
  sequenceСharacters: null,
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
    setRetryAvailable(state, action: PayloadAction<boolean>) {
      state.isGameStarted = action.payload;
    },
    setSequenceСharacters(state, action: PayloadAction<number[]>) {
      state.sequenceСharacters = action.payload;
    },
    setDisplaySymbols(state, action: PayloadAction<boolean>) {
      state.displaySymbols = action.payload;
    },
  },
});

export const {
  setGameStarted,
  setRound,
  setRetryAvailable,
  setSequenceСharacters,
  setDisplaySymbols,
} = gameDataSlice.actions;

export default gameDataSlice.reducer;
