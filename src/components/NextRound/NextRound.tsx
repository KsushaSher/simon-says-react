import { useAppDispatch } from '../../store/hooks';
import { switchNextLevel } from '../../store/slices/gameDataSlice';
import { playSequenceHighlight } from '../../store/thunks/gameData.thunks';

const NextRound = () => {
  const dispatch = useAppDispatch();

  const startNextRound = () => {
    dispatch(switchNextLevel());
    dispatch(playSequenceHighlight());
  };

  return (
    <button className="button" onClick={startNextRound}>
      Next
    </button>
  );
};

export default NextRound;
