import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setGameStarted,
  setRetryAvailable,
  setSequenceCharacters,
} from '../../store/slices/gameDataSlice';
import {
  selectLevel,
  selectRound,
} from '../../store/selectors/gameData.selectors';
import { genSequenceСharacters } from '../../utils/genSequenceСharacters';
import { playSequenceHighlight } from '../../store/thunks/gameData.thunks';

const StartGame = () => {
  const dispatch = useAppDispatch();
  const level = useAppSelector(selectLevel);
  const round = useAppSelector(selectRound);

  const startGame = () => {
    dispatch(setRetryAvailable(true));
    dispatch(setGameStarted(true));
    const sequenceСharacters = genSequenceСharacters(level, round);

    dispatch(setSequenceCharacters(sequenceСharacters));
    dispatch(playSequenceHighlight(sequenceСharacters));
  };

  return (
    <button className="button" onClick={startGame}>
      Start
    </button>
  );
};

export default StartGame;
