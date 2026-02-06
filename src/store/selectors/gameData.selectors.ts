import type { RootState } from '../store';
import { createSelector } from 'reselect';

const selectGameData = (state: RootState) => state.gameData;

export const selectGameStarted = createSelector(
  selectGameData,
  (data) => data.isGameStarted
);
export const selectRound = createSelector(selectGameData, (data) => data.round);
export const selectLevel = createSelector(selectGameData, (data) => data.level);
export const selectRetryAvailable = createSelector(
  selectGameData,
  (data) => data.retryAvailable
);
export const selectSequenceCharacters = createSelector(
  selectGameData,
  (data) => data.sequenceСharacters
);
export const selectActiveСharacter = createSelector(
  selectGameData,
  (data) => data.activeСharacter
);
export const selectIsPlayingHighlight = createSelector(
  selectGameData,
  (data) => data.isPlayingHighlight
);
export const selectDisplaySymbols = createSelector(
  selectGameData,
  (data) => data.displaySymbols
);
