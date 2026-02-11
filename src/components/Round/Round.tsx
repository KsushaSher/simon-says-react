import { useAppSelector } from '../../store/hooks';
import { selectRound } from '../../store/selectors/gameData.selectors';
import s from './Round.module.scss';

const Round = () => {
  const round = useAppSelector(selectRound);

  return <div className={s.round}>Round: {round}/5 </div>;
};

export default Round;
