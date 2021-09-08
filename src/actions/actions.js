import { apiCall } from "../hooks/useRequest";
import { CHANGE_SEARCH_FIELD, FETCH_CATS, FETCH_CATS_ERROR, IS_PENDING } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

const URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchCats = () => (dispatch) => {
  dispatch({type: IS_PENDING});
  apiCall(URL)
    .then(data => dispatch({type: FETCH_CATS, payload: data}))
    .catch(err => dispatch({type: FETCH_CATS_ERROR, payload: err}));
};