/**
 * Retrieves 100 breweries given the query params
 * @param {string} queryParams - stringified params to be used with the api
 * Read here for examples: https://www.openbrewerydb.org/documentation/01-listbreweries
 */
export const fetchBreweries = async (queryParams) => {
	const response1 = await fetch(`https://api.openbrewerydb.org/breweries?page=1&${queryParams}&per_page=50`);
	const response2 = await fetch(`https://api.openbrewerydb.org/breweries?page=2&${queryParams}&per_page=50`);
	const data1 = await response1.json();
	const data2 = await response2.json();
	const merged = data1.concat(data2)

	return merged
}

//Given a string
//Return the queyrParams for the specific fetch
expost const getQueryParams 


export const getBreweries 
//The method that sues both fetch and getQueyrParms to return the breweries sorted and filtered as requested