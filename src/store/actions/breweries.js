import {LOAD_BREWERIES} from "../types/breweries";
import { getBreweries } from "../../api/breweries";

/**
 * Loads the breweries based on types
 * @param {*} type 
 */
export const loadBreweries = async (sortType, direction) => {

    //based on the type, cahnge the
    //50 resutls
    const data = await getBreweries(sortType, direction)

    //REWRITE TO USER api/breweries

    return {
        type: LOAD_BREWERIES,
        payload: data
    }
};