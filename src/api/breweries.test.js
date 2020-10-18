import { fetchBreweries, getQueryParams } from "./breweries";

describe("Fetch Breweries Tests", () => {
    test("Fetches 100 results", async () => {
        const res = await fetchBreweries()
        expect(res.length).toBe(100)
		})
		test("sortType name direction is defaulted to asc", async () => {
			expect(getQueryParams("name")).toBe("+name")
		})
})

