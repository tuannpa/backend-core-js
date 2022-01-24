import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import * as routes from './routes';
import * as dbConnection from '../database/connection';

const app = express();

const port = process.env.APP_PORT || 3000;

// Set up CORS
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

// Register routes
routes.register(app);

// Init DB connection
dbConnection.connectDB();

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});