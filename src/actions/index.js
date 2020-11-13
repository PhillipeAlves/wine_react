import axios from "axios";

export const FETCH_WINES = "FETCH_WINES";
export const RESET_STORE = "RESET_STORE";

const ROOT_URL = "https://fast-wave-08855.herokuapp.com/api/search/";

export const fetchWines = (search) => {
  const url = `${ROOT_URL}${search}`;
  const res = axios.get(url);
  return {
    type: FETCH_WINES,
    payload: res,
  };
};

export const resetStore = () => {
  return {
    type: RESET_STORE,
  };
};
