import PlayingField from '../PlayingField';
import StartGame from '../StartGame';
import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.app}>
      приложение
      <PlayingField />
      <StartGame />
    </div>
  );
};

export default App;
