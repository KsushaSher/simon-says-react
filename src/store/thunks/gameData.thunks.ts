import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setActiveCharacter,
  setIsPlayingHighlight,
} from '../slices/gameDataSlice';
import type { RootState } from '../store';

let isCancelled = false;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const playSequenceHighlight = createAsyncThunk(
  'game/playSequenceHighlight',
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const sequence = state.gameData.sequenceCharacters;

    if (!sequence.length) return;

    isCancelled = false;
    dispatch(setIsPlayingHighlight(true));

    for (const char of sequence) {
      if (isCancelled) break;

      dispatch(setActiveCharacter(char));
      await delay(600);

      dispatch(setActiveCharacter(null));
      await delay(200);
    }

    dispatch(setIsPlayingHighlight(false));
  }
);

// export const stopSequenceHighlight = createAsyncThunk(
//   'game/stopSequenceHighlight',
//   async (_, { dispatch }) => {
//     isCancelled = true;
//     dispatch(setActiveCharacter(null));
//     dispatch(setIsPlayingHighlight(false));
//   }
// );
