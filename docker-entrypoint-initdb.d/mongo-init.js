print('------- Connecting to Admin DB -------');

db = db.getSiblingDB('admin');
// move to the admin db - always created in Mongo
db.auth("admin", "Huong150894");

print('------- Connected successfully! -------');

const dbName = 'dev_db';

print(`------- Initializing database ${dbName} -------`);

db = db.getSiblingDB(dbName);
db.createUser(
    {
        user: 'api_user',
        pwd: 'Huong150894',
        roles: [{ role: 'readWrite', db: dbName }]
    }
);

db.createCollection('dump_collection');

print('------- Finish database initialization  -------');