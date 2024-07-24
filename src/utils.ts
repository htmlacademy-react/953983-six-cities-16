import {CardProps} from '../src/components/item-card/item-card';

type OffersByCityType = {
  [key: string]: CardProps[];
}

export const getOfferCardByCity = (offersData: CardProps[]) => {
  const cardByCity: OffersByCityType = {};

  for (const card of offersData) {
    if (!cardByCity[card.city.name]) {
      cardByCity[card.city.name] = [];
    }

    cardByCity[card.city.name].push(card);
  }

  return cardByCity;
};
