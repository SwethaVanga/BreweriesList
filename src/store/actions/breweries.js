import {LOAD_BREWERIES} from "../types/breweries";

/**
 * Loads the breweries based on types
 * @param {*} type 
 */
export const loadBreweries = async (type) => {

    //based on the type, cahnge the
    //50 resutls
    const response = await fetch("https://api.openbrewerydb.org/breweries");
    const data = await response.json();

    //REWRITE TO USER api/breweries

    return {
        type: LOAD_BREWERIES,
        payload: merged
    }
};