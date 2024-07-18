import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route.tsx';

import { DATA } from '../mock-data/const.ts';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offersData={DATA} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites" element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
