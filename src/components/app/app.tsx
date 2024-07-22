import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../../private-route.tsx';
import {RoutesValues} from '../routes-values.ts';

import { DATA } from '../mocks/offers.ts';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesValues.ROOT} element={<MainPage offersData={DATA} />} />
        <Route path={RoutesValues.LOGIN} element={<LoginPage />} />
        <Route path={RoutesValues.FAVORITES} element={
          <PrivateRoute>
            <FavoritesPage offersData={DATA}/>
          </PrivateRoute>
        }
        />
        <Route path={RoutesValues.OFFER} element={<OfferPage offersData={DATA}/>} />
        <Route path={RoutesValues.NOTFOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
