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
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

function ItemCard({
  data,
  onHandlerChangeIdActiveCard,
  onHandlerRemoveActiveCard,
  className,
}: {
  data: CardProps;
  onHandlerChangeIdActiveCard?: () => void;
  onHandlerRemoveActiveCard?: () => void;
  className?: string;
}): JSX.Element {
  const imgWidth: string = className === 'favorites' ? '150' : '260';
  const imgHeight: string = className === 'favorites' ? '110' : '200';

  return (
    <Link
      className={`${className ? className : 'cities'}__card place-card`}
      to={`${RoutesValues.OFFER}/${data.id}` }
      onMouseEnter={onHandlerChangeIdActiveCard && onHandlerChangeIdActiveCard}
      onMouseLeave={onHandlerRemoveActiveCard && onHandlerRemoveActiveCard}
    >
      {data.isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        :
        null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={data.previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{data.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${data.isFavorite ? 'place-card__bookmark-button--active' : null}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${data.rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{data.title}</a>
        </h2>
        <p className="place-card__type">{data.type}</p>
      </div>
    </Link>
  );
}

export default ItemCard;
