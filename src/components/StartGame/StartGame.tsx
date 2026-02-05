import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setGameStarted,
  setSequenceСharacters,
} from '../../store/slices/gameDataSlice';
import {
  selectLevel,
  selectRound,
} from '../../store/selectors/gameData.selectors';
import { genSequenceСharacters } from '../../utils/genSequenceСharacters';

const StartGame = () => {
  const dispatch = useAppDispatch();
  const level = useAppSelector(selectLevel);
  const round = useAppSelector(selectRound);

  const startNewGame = () => {
    dispatch(setGameStarted(true));
    const sequenceСharacters = genSequenceСharacters(level, round);

    dispatch(setSequenceСharacters(sequenceСharacters));
  };

  return (
    <div className="button" onClick={startNewGame}>
      START
    </div>
  );
};

export default StartGame;
