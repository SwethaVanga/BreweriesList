import { fetchBreweries } from "./breweries";

describe("Fetch Breweries Tests", () => {
    test("Fetches 100 results", async () => {
        const res = await fetchBreweries()
        expect(res.length).toBe(100)
    })
})