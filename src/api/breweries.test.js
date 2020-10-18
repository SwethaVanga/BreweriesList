import { fetchBreweries, getQueryParams, getBreweries } from "./breweries";

const alphabeticalSort = (list, key) => {
	return list.sort((a, b) => {
		if(a[key] < b[key]) { return -1; }
		if(a[key] > b[key]) { return 1; }
		return 0;
	})
}

describe("Fetch Breweries Tests", () => {
	test("Fetches 100 results", async () => {
		const res = await fetchBreweries()
		expect(res.length).toBe(100)
	})
})
describe("sortType", () => {
	test("Sorted results Asc", async () => {
		expect(getQueryParams("name", "asc")).toBe("sort=+name");
	})
	test("Sorted results desc", async () => {
		expect(getQueryParams("name", "desc")).toBe("sort=-name");
	})
})
describe("getBreweries", () => {
	/** It looks like the API doesn't actually sort as you'd expect */
	test("getBreweries sorted by name and asc works just like js sort", async () => {
		const fromAPi = await getBreweries("name", "asc")
		const sorted = alphabeticalSort([...fromAPi], "name")
		expect(fromAPi.map(el => el.id)).toEqual(sorted.map(el => el.id))
	})

	test("getBreweries sorted by name and desc works just like js sort", async () => {
		const fromAPi = await getBreweries("name", "desc")
		const sorted = alphabeticalSort([...fromAPi], "name").reverse()
		expect(fromAPi.map(el => el.id)).toEqual(sorted.map(el => el.id))
	})
})

