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
  (data) => data.sequenceCharacters
);
export const selectActiveСharacter = createSelector(
  selectGameData,
  (data) => data.activeCharacter
);
export const selectIsPlayingHighlight = createSelector(
  selectGameData,
  (data) => data.isPlayingHighlight
);
export const selectPendingStatus = createSelector(
  selectGameData,
  (data) => data.status === 'pending'
);
export const selectWinStatus = createSelector(
  selectGameData,
  (data) => data.round < 5 && data.status === 'win'
);
export const selectCompletedGame = createSelector(
  selectGameData,
  (data) => data.round === 5 && data.status === 'win'
);
export const selectErrorStatus = createSelector(
  selectGameData,
  (data) => data.status === 'error'
);
export const selectInputValue = createSelector(
  selectGameData,
  (data) => data.inputValue
);
