import { Person } from "./people-service";
import { Starship } from "./starship-service";

export class CacheService {
    private _starships: Starship[] = [];
    private _byPilot: Record<string, Starship[]> = {};

    private _people: Person[] = [];
    private _queries: Record<string, Person[]> = {};


    get starships(): Starship[] {
        return this._starships;
    }

    set starships(value: Starship[]) {
        this._starships = value;
    }

    get byPilot(): Record<string, Starship[]> {
        return this._byPilot;
    }

    set byPilot(value: Record<string, Starship[]>) {
        this._byPilot = value;
    }

    get people(): Person[] {
        return this._people;
    }

    set people(value: Person[]) {
        this._people = value;
    }

    get queries(): Record<string, Person[]> {
        return this._queries;
    }

    set queries(value: Record<string, Person[]>) {
        this._queries = value;
    }
}
