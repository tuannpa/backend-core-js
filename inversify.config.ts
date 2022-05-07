import {Container} from "inversify";
import {TYPES} from "./src/services/types/types";
import {IDatabaseService} from "./src/interfaces/database.interface";
import {MongooseService} from "./src/services/mongoose.service";

// Bind the services below
const myContainer = new Container();
myContainer.bind<IDatabaseService>(TYPES.IDatabaseService).to(MongooseService); // If you wish to switch to a new DB, simply change the instance here

export { myContainer };