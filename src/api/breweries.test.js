import { fetchBreweries, getQueryParams } from "./breweries";

describe("Fetch Breweries Tests", () => {
	test("Fetches 100 results", async () => {
		const res = await fetchBreweries()
		expect(res.length).toBe(100)
	})
})
describe("sortType name direction is defaulted to asc", () => {
	test("Sorted results Asc", async () => {
		expect(getQueryParams("name", "asc")).toBe("sort=+name");
	})
})
describe("sortType name direction to desc", () => {
	test("Sorted results desc", async () => {
		expect(getQueryParams("name", "desc")).toBe("sort=-name");
	})
})


