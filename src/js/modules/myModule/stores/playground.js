/**
 * Created by zoltanincze on 04/08/2016.
 */
import {Store, toImmutable} from 'nuclear-js';
import * as ActionTypes from '../actionTypes.js'

const initialState = toImmutable({
  value: ''
});

class SearchingStore extends Store  {
  getInitialState() {
    return initialState;
  }

  initialize()  {
    this.on(ActionTypes.FILTER, filter)
    this.on(ActionTypes.GET_DATA, getData);
  }
}

export default new SearchingStore();

function filter(state, payload) {
  const nextState = state.set('value', payload.value);

  if (state.equals(nextState))  {
    return state;
  }

  return nextState;
}

function getData(state, payload)  {
  return state.set('directories', toImmutable(payload.data));
}
