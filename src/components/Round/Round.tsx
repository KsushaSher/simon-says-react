import { useAppSelector } from '../../store/hooks';
import { selectRound } from '../../store/selectors/gameData.selectors';

const Round = () => {
  const round = useAppSelector(selectRound);

  return <div>Round: {round}/5 </div>;
};

export default Round;
