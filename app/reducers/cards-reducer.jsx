import R from 'ramda';

export function cardsReducer(state = [], action) {
  switch (action.type) {
  case 'CARDS_COLLECTION_CHANGED' :
    const docs = R.clone(action.collection);
    return docs;
  default :
    return state;
  }
}
