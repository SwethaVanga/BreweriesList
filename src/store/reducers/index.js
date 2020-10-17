import { combineReducers } from "redux";
import breweriesReducer from "./breweries";

const rootReducer = combineReducers({
    breweries: breweriesReducer
});

export default rootReducer