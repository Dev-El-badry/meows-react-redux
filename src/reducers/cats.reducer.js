import { CHANGE_SEARCH_FIELD, FETCH_CATS, FETCH_CATS_ERROR, IS_PENDING } from "../actions/constants";

const initialSearchField = {
  searchField: ''
};

export const searchCatsReducer = (state=initialSearchField, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload};
    default:
      return state;
  }
};

const initialFetchCats = {
  isPending: true,
  cats: [],
  error: ''
};

export const fetchCatsReducer = (state = initialFetchCats, action={}) => {
  switch(action.type) {
    case IS_PENDING:
      return {...state, isPending: true};
    case FETCH_CATS:
      return {...state, cats: action.payload, isPending: false};
    case FETCH_CATS_ERROR:
        return {...state, error: action.payload, isPending: false};
    default:
      return state;
  };
};