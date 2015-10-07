import { Cards } from '../collections';

export function cardsChanged(docs) {
  return {
    type: 'CARDS_COLLECTION_CHANGED',
    collection: docs
  };
};

export function createCard() {
  Cards.insert({ label: 'Card created' });
  // TODO call FAILED action on error
  return { type: 'CREATE_CARD' };
};
