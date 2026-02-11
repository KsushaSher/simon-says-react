import { useAppSelector } from '../../store/hooks';
import { selectGameStarted } from '../../store/selectors';
import {
  selectErrorStatus,
  selectPendingStatus,
  selectWinStatus,
} from '../../store/selectors/gameData.selectors';
import Level from '../Level';
import NewGame from '../NewGame';
import NextRound from '../NextRound';
import PlayingField from '../PlayingField';
import RepeatSequence from '../RepeatSequence';
import Round from '../Round';
import StartGame from '../StartGame';
import s from './App.module.scss';

const App = () => {
  const isGameStarted = useAppSelector(selectGameStarted);
  const pending = useAppSelector(selectPendingStatus);
  const vin = useAppSelector(selectWinStatus);
  const error = useAppSelector(selectErrorStatus);

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
      {isGameStarted && pending && <RepeatSequence />}
      {!isGameStarted && pending && <StartGame />}
      {vin && <NextRound />}
      {error && <div />}
    </div>
  );
};

export default App;
