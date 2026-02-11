import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectSequenceCharacters } from '../../store/selectors';
import {
  selectIsPlayingHighlight,
  selectRepeatAgain,
} from '../../store/selectors/gameData.selectors';
import {
  setGameStarted,
  setRepeatAgain,
} from '../../store/slices/gameDataSlice';
import { playSequenceHighlight } from '../../store/thunks/gameData.thunks';

const RepeatSequence = () => {
  const dispatch = useAppDispatch();
  const repeatAgain = useAppSelector(selectRepeatAgain);
  const isPlayingHighlight = useAppSelector(selectIsPlayingHighlight);
  const sequence = useAppSelector(selectSequenceCharacters);

  const repeatSequence = () => {
    dispatch(setRepeatAgain(false));
    dispatch(playSequenceHighlight(sequence));
    dispatch(setGameStarted(true));
  };

  return (
    <button
      className="button"
      onClick={repeatSequence}
      disabled={!repeatAgain || isPlayingHighlight}
    >
      Repeat the sequence
    </button>
  );
};

export default RepeatSequence;
