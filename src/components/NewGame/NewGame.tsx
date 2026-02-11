import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import {
  setGameStarted,
  setRepeatAgain,
} from '../../store/slices/gameDataSlice';
import { selectIsPlayingHighlight } from '../../store/selectors/gameData.selectors';

const NewGame = () => {
  const dispatch = useAppDispatch();
  const isPlayingHighlight = useSelector(selectIsPlayingHighlight);

  const startNewGame = () => {
    dispatch(setRepeatAgain(true));
    dispatch(setGameStarted(false));
  };

  return (
    <button
      className="button"
      onClick={startNewGame}
      disabled={isPlayingHighlight}
    >
      New game
    </button>
  );
};

export default NewGame;
