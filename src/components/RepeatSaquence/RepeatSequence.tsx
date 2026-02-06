import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectRetryAvailable,
  selectSequenceCharacters,
} from '../../store/selectors';
import { setRetryAvailable } from '../../store/slices/gameDataSlice';
import { playSequenceHighlight } from '../../store/thunks/gameData.thunks';

const RepeatSequence = () => {
  const dispatch = useAppDispatch();
  const retryAvailable = useAppSelector(selectRetryAvailable);
  const sequence = useAppSelector(selectSequenceCharacters);

  const startGame = () => {
    dispatch(setRetryAvailable(false));
    dispatch(playSequenceHighlight(sequence));
  };

  return (
    <button className="button" onClick={startGame} disabled={retryAvailable}>
      Repeat the sequence
    </button>
  );
};

export default RepeatSequence;
