import mongoose from 'mongoose';

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const mongoURI = `mongodb://${username}:${password}@${dbHost}:${dbPort}/${dbName}`;

export const connectDB = () => {
    console.debug(`Connecting MongoDB with URI: ${mongoURI}`);

    mongoose.connect(mongoURI).then(
    () => {
        console.log('Connected to MongoDB.');
    },
    err => {
        console.error(`An error has occurred when connecting to MongoDB. Reason: ${JSON.stringify(err.reason)}`);
    });
}
