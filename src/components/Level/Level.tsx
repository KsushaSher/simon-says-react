import { LEVELS } from '../../shared/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  selectGameStarted,
  selectLevel,
} from '../../store/selectors/gameData.selectors';
import { setLevel, type LevelProp } from '../../store/slices/gameDataSlice';
import s from './Level.module.scss';

const Level = () => {
  const dispatch = useAppDispatch();
  const level = useAppSelector(selectLevel);
  const isGameStarted = useAppSelector(selectGameStarted);

  return (
    <label>
      Level:{' '}
      <select
        className={s.level}
        name="level"
        value={level}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setLevel(e.target.value as LevelProp))
        }
        disabled={isGameStarted}
      >
        <option value={LEVELS.easy}>{LEVELS.easy}</option>
        <option value={LEVELS.medium}>{LEVELS.medium}</option>
        <option value={LEVELS.hard}>{LEVELS.hard}</option>
      </select>
    </label>
  );
};

export default Level;
