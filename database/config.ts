const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

export { dbHost, dbPort, dbName, username, password };