import {ADD_ITEMS} from '../constants';

export default function addItems(items) {
  return {
    type: ADD_ITEMS,
    payload: items,
  };
}
