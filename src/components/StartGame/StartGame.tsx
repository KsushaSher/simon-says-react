import { useAppDispatch } from '../../store/hooks';
import { setGameStarted } from '../../store/slices/gameDataSlice';
import { playSequenceHighlight } from '../../store/thunks/gameData.thunks';
import { useEffect } from 'react';
import { genSequenceСharacters } from '../../store/slices/gameDataSlice';

const StartGame = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(genSequenceСharacters());
  }, [dispatch]);

  const startGame = () => {
    dispatch(setGameStarted(true));
    dispatch(playSequenceHighlight());
  };

  return (
    <button className="button" onClick={startGame}>
      Start
    </button>
  );
};

export default StartGame;
