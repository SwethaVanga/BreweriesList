/**
 * mapping of sort options 
 */
const sortOptions = {
	"name": {
		desc: "-name", asc: "+name"
	},
	"type": {
		desc: "-type", asc: "+type"
	},
	"state": {
		desc: "-state", asc: "+state"
	}
}


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

	return merged;
}

/**
		* Given a string - Return the queryParams for the specific fetch
		* @params {} sortType, direction
*/

export const getQueryParams = (sortType, direction) => {
	try {
		return `sort=${sortOptions[sortType][direction]}`
	} catch (err) {
		return ""
	}
}


/**
		* Combine sort and Fetch
*/

export const getBreweries = async (sortType, desc) => {
	const queryParams = getQueryParams(sortType, desc)
	const breweries = await fetchBreweries(queryParams)

	return breweries
}
