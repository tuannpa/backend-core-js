import {injectable} from "inversify";
import "reflect-metadata";
import {IDatabaseService} from "../interfaces/database.interface";
import { dbHost, dbPort, dbName, username, password } from "../../database/config";
import mongoose from "mongoose";
import {RETRY_CONNECTION_SECONDS} from "../constants/database.constant";
import debug, { IDebugger } from "debug"

const log: IDebugger = debug("app:mongoose-service")

@injectable()
export class MongooseService implements IDatabaseService {
    private connectionUri = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${dbName}`;
    private options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10
    }

    async connect(): Promise<void> {
        console.log(`Connecting MongoDB with URI: ${this.connectionUri}`);
        log(`Connecting MongoDB with URI: ${this.connectionUri}`);

        try {
            await mongoose.createConnection(this.connectionUri, this.options)
            console.log('Connected to MongoDB.');
            log('Connected to MongoDB.');
        } catch (e) {
            console.log(`An error has occurred when connecting to MongoDB. Reason: ${JSON.stringify(e)}`);
            log(`An error has occurred when connecting to MongoDB. Reason: ${JSON.stringify(e)}`);

            // Retry the connection
            setTimeout(async () => {
                await this.connect();
            }, RETRY_CONNECTION_SECONDS * 1000)
        }
    }
}