import PeopleService from "../src/services/people-service";
import StarshipService from "../src/services/starship-service";
import { starships } from "./test-starship-data";

describe("starships", () => {
    const starshipService = new StarshipService({} as PeopleService);

    beforeEach(() => {
        starshipService.starships = starships;
    });
    test("no params", async () => {
        expect(await starshipService.find({})).toEqual(starships);
    });
    test("with params", async() => {
        expect(await starshipService.find({query: { pilot: 'luke' }}));
    });
});
