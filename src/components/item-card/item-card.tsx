import { RoutesValues } from '../routes-values';
import { Link } from 'react-router-dom';
export interface CardProps {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
      name: string;
      location: {
          latitude: number;
          longitude: number;
          zoom: number;
      };
  };
  location: {
      latitude: number;
      longitude: number;
      zoom: number;
  };
  maxAdults: number;
}

function ItemCard({ data }: { data: CardProps}): JSX.Element {
  return (
    <Link to={RoutesValues.OFFER}>
      <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>{data.type}</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{data.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{data.title}</a>
          </h2>
          <p className="place-card__type">{data.type}</p>
        </div>
      </article>
    </Link>
  );
}

export default ItemCard;
