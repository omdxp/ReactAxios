import {ADD_ITEMS} from '../constants';

const initialState = {items: []};

function addItemsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEMS:
      state.items.push(action.payload);
      return {
        items: state.items,
      };

    default:
      return state;
  }
}

export default addItemsReducer;
