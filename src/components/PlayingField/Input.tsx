import { useAppSelector } from '../../store/hooks';
import {
  selectGameStarted,
  selectIsPlayingHighlight,
  selectPendingStatus,
} from '../../store/selectors/gameData.selectors';
import s from './PlayingField.module.scss';

interface InputProps {
  value: string;
}

const Input = ({ value }: InputProps) => {
  const isPlayingHighlight = useAppSelector(selectIsPlayingHighlight);
  const pending = useAppSelector(selectPendingStatus);
  const gameStarted = useAppSelector(selectGameStarted);

  return (
    <>
      <input
        type="text"
        name="input"
        readOnly
        className={s['input']}
        value={value}
        disabled={!pending || isPlayingHighlight || !gameStarted}
      />
    </>
  );
};

export default Input;
