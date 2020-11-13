import { FETCH_WINES } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WINES:
      return [action.payload.data, ...state];
    default:
      return state;
  }
};
