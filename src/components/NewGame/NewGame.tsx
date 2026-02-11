import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { selectIsPlayingHighlight } from '../../store/selectors/gameData.selectors';
import { startNewGame } from '../../store/slices/gameDataSlice';

const NewGame = () => {
  const dispatch = useAppDispatch();
  const isPlayingHighlight = useSelector(selectIsPlayingHighlight);

  const handleStartNewGame = () => {
    dispatch(startNewGame());
  };

  return (
    <button
      className="button"
      onClick={handleStartNewGame}
      disabled={isPlayingHighlight}
    >
      New game
    </button>
  );
};

export default NewGame;
