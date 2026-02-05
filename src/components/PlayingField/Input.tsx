import s from './PlayingField.module.scss';

interface InputProps {
  value: string;
}

const Input = ({ value }: InputProps) => {
  return (
    <>
      <input
        type="text"
        name="input"
        readOnly
        className={s['input']}
        value={value}
      />
    </>
  );
};

export default Input;
