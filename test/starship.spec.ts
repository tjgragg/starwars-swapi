import { CacheService } from "../src/services/cache-service";
import PeopleService from "../src/services/people-service";
import StarshipService from "../src/services/starship-service";
import { people } from "./test-people-data";
import { starships } from "./test-starship-data";

// TODO could also mock the https-service instead of initializing people, starships, and byPilot.
describe("starships", () => {
    const cacheService = new CacheService();
    cacheService.people = people;
    cacheService.byPilot = {Luke: [{"name":"X-wing","model":"T-65 X-wing","manufacturer":"Incom Corporation","cost_in_credits":"149999","length":"12.5","max_atmosphering_speed":"1050","crew":"1","passengers":"0","cargo_capacity":"110","consumables":"1 week","hyperdrive_rating":"1.0","MGLT":"100","starship_class":"Starfighter","pilots":["https://swapi.dev/api/people/1/","https://swapi.dev/api/people/9/","https://swapi.dev/api/people/18/","https://swapi.dev/api/people/19/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/"],"created":"2014-12-12T11:19:05.340000Z","edited":"2014-12-20T21:23:49.886000Z","url":"https://swapi.dev/api/starships/12/"},{"name":"Imperial shuttle","model":"Lambda-class T-4a shuttle","manufacturer":"Sienar Fleet Systems","cost_in_credits":"240000","length":"20","max_atmosphering_speed":"850","crew":"6","passengers":"20","cargo_capacity":"80000","consumables":"2 months","hyperdrive_rating":"1.0","MGLT":"50","starship_class":"Armed government transport","pilots":["https://swapi.dev/api/people/1/","https://swapi.dev/api/people/13/","https://swapi.dev/api/people/14/"],"films":["https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/"],"created":"2014-12-15T13:04:47.235000Z","edited":"2014-12-20T21:23:49.900000Z","url":"https://swapi.dev/api/starships/22/"}]}

    const peopleService = new PeopleService(cacheService);

    const starshipService = new StarshipService(cacheService, peopleService);

    test("no params", async () => {
        expect(await starshipService.find({})).toEqual(starships);
    });
    test("with params", async() => {
        expect(await starshipService.find({query: { pilot: 'luke' }}));
    });
    test("by pilot", async() => {
        expect(await starshipService.findByPilot("Luke")).toEqual(
            [{"name":"X-wing","model":"T-65 X-wing","manufacturer":"Incom Corporation","cost_in_credits":"149999","length":"12.5","max_atmosphering_speed":"1050","crew":"1","passengers":"0","cargo_capacity":"110","consumables":"1 week","hyperdrive_rating":"1.0","MGLT":"100","starship_class":"Starfighter","pilots":["https://swapi.dev/api/people/1/","https://swapi.dev/api/people/9/","https://swapi.dev/api/people/18/","https://swapi.dev/api/people/19/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/"],"created":"2014-12-12T11:19:05.340000Z","edited":"2014-12-20T21:23:49.886000Z","url":"https://swapi.dev/api/starships/12/"},{"name":"Imperial shuttle","model":"Lambda-class T-4a shuttle","manufacturer":"Sienar Fleet Systems","cost_in_credits":"240000","length":"20","max_atmosphering_speed":"850","crew":"6","passengers":"20","cargo_capacity":"80000","consumables":"2 months","hyperdrive_rating":"1.0","MGLT":"50","starship_class":"Armed government transport","pilots":["https://swapi.dev/api/people/1/","https://swapi.dev/api/people/13/","https://swapi.dev/api/people/14/"],"films":["https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/"],"created":"2014-12-15T13:04:47.235000Z","edited":"2014-12-20T21:23:49.900000Z","url":"https://swapi.dev/api/starships/22/"}]
        )
    })
});
