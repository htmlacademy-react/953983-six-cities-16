import { useState } from 'react';
import ItemCard, { CardProps } from '../item-card/item-card';

const OffersList = ({ offersData } : { offersData : CardProps[] }) => {
  const [activeCard, setActiveCard] = useState<undefined | string>(undefined);

  const changeIdActiveCard = (id: string) => {
    setActiveCard(id);
  };

  const removeIdActiveCard = () => {
    setActiveCard(undefined);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((item) => (
        <ItemCard
          type='cities'
          onHandlerChangeIdActiveCard={() => changeIdActiveCard(item.id)}
          onHandlerRemoveActiveCard={removeIdActiveCard}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};

export default OffersList;
