import { STORAGE_KEY } from '../shared/constants';
import type { GameDataState } from './slices/gameDataSlice';
import type { RootState } from './store';

export const loadState = (): { gameData: GameDataState } | undefined => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);

    if (!serialized) return undefined;

    return JSON.parse(serialized);
  } catch (error) {
    console.error('Failed to load state:', error);

    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const stateToSave = {
      gameData: {
        isGameStarted: state.gameData.isGameStarted,
        round: state.gameData.round,
        level: state.gameData.level,
        repeatAgain: state.gameData.repeatAgain,
        sequenceCharacters: state.gameData.sequenceCharacters,
        status: state.gameData.status,
        inputValue: state.gameData.inputValue,
      },
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  } catch (error) {
    console.error('Failed to save state to localStorage:', error);
  }
};
