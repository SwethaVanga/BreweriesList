import {LOAD_BREWERIES} from "../types/breweries";

export default (state = [], action) => {
    switch(action.type){
        case LOAD_BREWERIES:
            return action.payload;

        default: 
           return state;
    }
}