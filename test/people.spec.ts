import { CacheService } from "../src/services/cache-service";
import PeopleService from "../src/services/people-service";
import { people } from "./test-people-data";

// TODO could also mock the https-service instead of initializing people.
describe("people-service", () => {
    const cacheService = new CacheService();
    cacheService.people = people;
    const peopleService = new PeopleService(cacheService);
    test("no params", async () => {
        expect(await peopleService.find({})).toEqual(people)
    });
    test("param.query.name", async () => {
        expect(await peopleService.find(
            { query: { name: 'Luke' }
        })).toEqual([{
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"],
            "species": [],
            "vehicles": ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"],
            "starships": ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.dev/api/people/1/"
        }]);
    });
});
