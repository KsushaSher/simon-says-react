import { useAppSelector } from '../../store/hooks';
import { selectGameStarted } from '../../store/selectors';
import Level from '../Level';
import NewGame from '../NewGame';
import PlayingField from '../PlayingField';
import RepeatSequence from '../RepeatSaquence';
import Round from '../Round';
import StartGame from '../StartGame';
import s from './App.module.scss';

const App = () => {
  const isGameStarted = useAppSelector(selectGameStarted);

  return (
    <div className={s.app}>
      <div className={s.options}>
        <div className={s['right-options']}>{isGameStarted && <NewGame />}</div>
        <div>
          <Level />
          {isGameStarted && <Round />}
        </div>
      </div>
      <PlayingField />
      {isGameStarted ? <RepeatSequence /> : <StartGame />}
    </div>
  );
};

export default App;
