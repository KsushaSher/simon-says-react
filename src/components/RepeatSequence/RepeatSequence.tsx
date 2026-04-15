import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectIsPlayingHighlight,
  selectRepeatAgain,
} from '../../store/selectors/gameData.selectors';
import {
  setGameStarted,
  turnOffRepeat,
} from '../../store/slices/gameDataSlice';
import { playSequenceHighlight } from '../../store/thunks/gameData.thunks';

const RepeatSequence = () => {
  const dispatch = useAppDispatch();
  const repeatAgain = useAppSelector(selectRepeatAgain);
  const isPlayingHighlight = useAppSelector(selectIsPlayingHighlight);

  const repeatSequence = () => {
    dispatch(turnOffRepeat());
    dispatch(playSequenceHighlight());
    dispatch(setGameStarted(true));
  };

  return (
    <button
      className="game-button green-btn"
      onClick={repeatSequence}
      disabled={!repeatAgain || isPlayingHighlight}
    >
      Repeat
    </button>
  );
};

export default RepeatSequence;
