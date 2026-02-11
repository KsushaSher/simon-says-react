import type { RootState } from '../store';
import { createSelector } from 'reselect';

const selectGameData = (state: RootState) => state.gameData;

export const selectGameStarted = createSelector(
  selectGameData,
  (data) => data.isGameStarted
);
export const selectRound = createSelector(selectGameData, (data) => data.round);
export const selectLevel = createSelector(selectGameData, (data) => data.level);
export const selectRepeatAgain = createSelector(
  selectGameData,
  (data) => data.repeatAgain
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
export const selectIsVictoryMessage = createSelector(
  selectGameData,
  (data) => data.isVictoryMessage
);
export const selectIsErrorMessage = createSelector(
  selectGameData,
  (data) => data.isErrorMessage
);
export const selectPendingStatus = createSelector(
  selectGameData,
  (data) => data.status === 'pending'
);
export const selectWinStatus = createSelector(
  selectGameData,
  (data) => data.status === 'win'
);
export const selectErrorStatus = createSelector(
  selectGameData,
  (data) => data.status === 'error'
);
