import MainPage from '../../pages/main-page/main-page';
import { DATA } from '../mock-data/const.ts';

function App(): JSX.Element {
  return (
    <MainPage offersData={DATA} />
  );
}

export default App;
