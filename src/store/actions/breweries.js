import {LOAD_BREWERIES} from "../types/breweries";
import { getBreweries } from "../../api/breweries";

/**
 * Loads the breweries based on sortType and direction(asc,desc)
 * @param {*} type 
 */
export const loadBreweries = async (sortType, direction) => {

    //based on the sorttype, change the direction
    //50 resutls
    const data = await getBreweries(sortType, direction)
    return {
        type: LOAD_BREWERIES,
        payload: data
    }
};