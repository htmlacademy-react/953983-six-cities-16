import {Link} from 'react-router-dom';
import { Header } from '../../components/header';
import ItemCard, { CardProps } from '../../components/item-card/item-card';
import {getOfferCardByCity} from '../../utils.ts';
import { RoutesValues } from '../../components/routes-values.ts';

type OfferProps = {
  offersData: CardProps[];
};

function FavoritesPage({ offersData }: OfferProps): JSX.Element {
  const getFavotiteOfferCard = offersData.filter((offerCard: CardProps) => offerCard.isFavorite);
  const offerCardsByCity = getOfferCardByCity(getFavotiteOfferCard);

  return (
    <>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(offerCardsByCity).map(([cityName, offerCards]) => (
                <li className="favorites__locations-items" key={cityName}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{cityName}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {offerCards.map((offerCard: CardProps) => (
                      <ItemCard
                        key={offerCard.id}
                        data={offerCard}
                        className='favorites'
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={RoutesValues.ROOT}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </>
  );
}

export default FavoritesPage;
