import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  setActiveCharacter,
  setIsPlayingHighlight,
} from '../slices/gameDataSlice';

let isCancelled = false;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const playSequenceHighlight = createAsyncThunk<unknown, string[]>(
  'game/playSequenceHighlight',
  async (sequence, { dispatch }) => {
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
