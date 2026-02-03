import type { RootState } from '../store';
import { createSelector } from 'reselect';

const selectGameData = (state: RootState) => state.gameData;

export const selectGameStarted = createSelector(
  selectGameData,
  (data) => data.isGameStarted
);
export const selectRound = createSelector(selectGameData, (data) => data.round);
export const selectRetryAvailable = createSelector(
  selectGameData,
  (data) => data.retryAvailable
);
export const selectSequenceСharacters = createSelector(
  selectGameData,
  (data) => data.sequenceСharacters
);
export const selectDisplaySymbols = createSelector(
  selectGameData,
  (data) => data.displaySymbols
);
