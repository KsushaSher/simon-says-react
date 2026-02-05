import { useAppSelector } from '../../store/hooks';
import { selectGameStarted } from '../../store/selectors';
import Level from '../Level';
import PlayingField from '../PlayingField';
import RepeatSequence from '../RepeatSaquence';
import Round from '../Round';
import StartGame from '../StartGame';
import s from './App.module.scss';

const App = () => {
  const isGameStarted = useAppSelector(selectGameStarted);

  return (
    <div className={s.app}>
      <Level />
      {isGameStarted && <Round />}
      <PlayingField />
      {isGameStarted ? <RepeatSequence /> : <StartGame />}
    </div>
  );
};

export default App;
