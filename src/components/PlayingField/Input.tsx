import { useAppSelector } from '../../store/hooks';
import {
  selectInputValue,
  selectIsPlayingHighlight,
  selectPendingStatus,
} from '../../store/selectors/gameData.selectors';
import s from './PlayingField.module.scss';

const Input = () => {
  const isPlayingHighlight = useAppSelector(selectIsPlayingHighlight);
  const pending = useAppSelector(selectPendingStatus);
  const value = useAppSelector(selectInputValue);

  return (
    <input
      type="text"
      name="input"
      readOnly
      className={s['input']}
      value={value}
      disabled={!pending || isPlayingHighlight}
    />
  );
};

export default Input;
