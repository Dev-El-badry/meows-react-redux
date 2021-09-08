import { combineReducers } from "redux";
import {searchCatsReducer, fetchCatsReducer} from './cats.reducer';

export const reducers = combineReducers(
  {
    searchCatsReducer,
    fetchCatsReducer
  }
);