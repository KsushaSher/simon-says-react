import { useAppSelector } from '../../store/hooks';
import { selectGameStarted } from '../../store/selectors';
import {
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
  const win = useAppSelector(selectWinStatus);

  return (
    <div className={s.app}>
      <h1 className={s.title}>Simon Says</h1>
      <div className={s.options}>
        <div className={s['right-options']}>{isGameStarted && <NewGame />}</div>
        <div>
          <Level />
          {isGameStarted && <Round />}
        </div>
      </div>
      <PlayingField />
      <div className={s['button-wrapper']}>
        {isGameStarted && pending && <RepeatSequence />}
        {!isGameStarted && pending && <StartGame />}
        {win && <NextRound />}
      </div>
    </div>
  );
};

export default App;
