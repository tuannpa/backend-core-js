import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import * as routes from './routes';
import {myContainer} from "../inversify.config";
import {IDatabaseService} from "./interfaces/database.interface";
import {TYPES} from "./services/types/types";

const app = express();

const port = process.env.APP_PORT || 3000;

// Set up CORS
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

// Init DB connection
const dbService = myContainer.get<IDatabaseService>(TYPES.IDatabaseService);
dbService.connect().then(() => {
    // Register routes
    routes.register(app);

    // start the Express server
    app.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` );
    });
});