import { combineReducers } from "redux";

import itemReducer from "./item.slice";

export const rootReducer = combineReducers({
  itemReducer,
});
