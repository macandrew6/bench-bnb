import { UPDATE_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
  bounds: {},
  minSeating: 1,
  maxSeating: 10
});

const filterReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, {[action.filter]: action.value});
    default:
      return state; 
  }
};

export default filterReducer;