import { LEVELS } from '../../shared/constants';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectLevel } from '../../store/selectors/gameData.selectors';
import { setLevel, type LevelProp } from '../../store/slices/gameDataSlice';

const Level = () => {
  const dispatch = useAppDispatch();
  const level = useAppSelector(selectLevel);

  return (
    <label>
      Level:{' '}
      <select
        name="level"
        value={level}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(setLevel(e.target.value as LevelProp))
        }
      >
        <option value={LEVELS.easy}>{LEVELS.easy}</option>
        <option value={LEVELS.medium}>{LEVELS.medium}</option>
        <option value={LEVELS.hard}>{LEVELS.hard}</option>
      </select>
    </label>
  );
};

export default Level;
