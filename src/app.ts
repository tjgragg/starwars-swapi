import { feathers } from '@feathersjs/feathers'
import { koa, rest, bodyParser, errorHandler } from '@feathersjs/koa'
import serveStatic from 'koa-static'
import { CacheService } from "./services/cache-service";
import PeopleService from "./services/people-service";
import StarshipService from "./services/starship-service";

// This tells TypeScript what services we are registering
type ServiceTypes = {
    people: PeopleService
    starships: StarshipService
}

// Creates an ExpressJS compatible Feathers application
const app = koa<ServiceTypes>(feathers())

// Use the current folder for static file hosting
app.use(serveStatic('.'))
// Register the error handle
app.use(errorHandler())
// Parse JSON request bodies
app.use(bodyParser())

// Register REST service handler
app.configure(rest())
// Register our services
const cacheService = new CacheService();
const peopleService = new PeopleService(cacheService);
app.use('people', peopleService)
app.use('starships', new StarshipService(cacheService, peopleService))

// Start the server
app.listen(3030).then(() => console.log('Feathers server listening on localhost:3030'))
